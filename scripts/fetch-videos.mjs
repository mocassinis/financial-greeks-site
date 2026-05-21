// Build-time fetch of the YouTube channel RSS feed. Runs in Node (no CORS),
// writes the parsed videos to src/lib/latest-videos.json so Vite can statically
// inline them into the bundle. On network failure we still emit a valid empty
// file so the build never breaks — the homepage falls back to gradient cards.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UCEM8mimgOIJZK46kpKThl3Q"; // youtube.com/@FinancialGreeks
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const MAX_VIDEOS = 12;

const here = dirname(fileURLToPath(import.meta.url));
const outFile = resolve(here, "..", "src", "lib", "latest-videos.json");

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function parseFeed(xml) {
  const videos = [];
  const entries = xml.split("<entry>").slice(1);
  for (const e of entries) {
    const id = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = e.match(/<title>([^<]+)<\/title>/)?.[1];
    const published = e.match(/<published>([^<]+)<\/published>/)?.[1];
    const thumb = e.match(/<media:thumbnail url="([^"]+)"/)?.[1];
    if (!id || !title) continue;
    videos.push({
      id,
      title: decodeEntities(title),
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: thumb || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      publishedAt: published || "",
    });
  }
  return videos.slice(0, MAX_VIDEOS);
}

async function main() {
  let videos = [];
  let fetchedAt = new Date().toISOString();
  try {
    const res = await fetch(FEED_URL, {
      headers: { "user-agent": "financial-greeks-site/build-step" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    videos = parseFeed(xml);
    console.log(`[fetch-videos] parsed ${videos.length} videos from RSS feed`);
  } catch (err) {
    console.warn(
      `[fetch-videos] failed to fetch RSS feed — writing empty list. Reason: ${err.message}`,
    );
  }

  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, JSON.stringify({ fetchedAt, videos }, null, 2) + "\n");
  console.log(`[fetch-videos] wrote ${outFile}`);
}

main().catch((err) => {
  console.error("[fetch-videos] fatal:", err);
  process.exit(1);
});
