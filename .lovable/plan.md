# Πλάνο

## 1. Header cleanup
- Αφαίρεση του top nav ("Κανάλι", "Συνεργασίες", "Εταιρικές Πληροφορίες").
- Μένει μόνο: wordmark αριστερά + κουμπί **Subscribe** δεξιά (link στο YouTube).
- Οι "Εταιρικές Πληροφορίες" παραμένουν **μόνο στο footer**.

## 2. Live YouTube videos (RSS, χωρίς API key)
- Νέο server function `src/lib/youtube.functions.ts` που:
  1. Κάνει fetch το `https://www.youtube.com/@FinancialGreeks` και βγάζει το `channelId` (UC...) από το HTML (regex `"channelId":"(UC[^"]+)"`).
  2. Κάνει fetch το `https://www.youtube.com/feeds/videos.xml?channel_id=UC...`.
  3. Parse-άρει το XML με regex (entry → videoId, title, published, thumbnail από `media:thumbnail`).
  4. Επιστρέφει `[{ id, title, url, thumbnail, publishedAt }]` (μέχρι 12).
  5. Cache 10 λεπτά μέσω `Cache-Control` + in-memory map.
- Στο `index.tsx`: `useQuery` που καλεί το server fn. Αντικαθιστά τα static recent thumbnails. Τα hero thumbnails γίνονται τα 4 πιο πρόσφατα videos (loading skeleton μέχρι να φορτώσουν, fallback στα static αν fail).
- Κάθε thumbnail είναι `<a href={url} target="_blank">` → ανοίγει το video στο YouTube.

## 3. Όλες οι παραπομπές clickable
Audit & σύνδεση:
- Stats strip ("146K+ subscribers", "1.800+ videos") → link στο κανάλι.
- Pillar cards → anchor στο recent grid ή στο YouTube.
- Tag pills (Επενδύσεις, Crypto, κτλ) → YouTube search μέσα στο κανάλι (`/results?search_query=...+@FinancialGreeks`).
- "Δες όλα τα βίντεο" → ήδη link, παραμένει.
- Footer brand/legal → links σε αντίστοιχες σελίδες.

## 4. Νομικές σελίδες (στα ελληνικά)
Νέα routes με ξεχωριστό `head()` metadata:
- `src/routes/privacy.tsx` — **Πολιτική Απορρήτου**: ποια δεδομένα συλλέγονται (κανένα proprietary, embedded YouTube), δικαιώματα GDPR (πρόσβαση/διαγραφή/φορητότητα/εναντίωση), DPO/contact email, νομική βάση (συγκατάθεση/έννομο συμφέρον), διατήρηση.
- `src/routes/terms.tsx` — **Όροι Χρήσης**: σκοπός site, πνευματικά δικαιώματα, αποποίηση ευθύνης ότι το περιεχόμενο δεν είναι επενδυτική συμβουλή, εφαρμοστέο δίκαιο (Ελλάδα).
- `src/routes/cookies.tsx` — **Πολιτική Cookies**: κατηγορίες (αναγκαία, στατιστικά, marketing/YouTube embeds), διάρκεια, πώς απενεργοποιούνται, link σε browser settings.

Όλες σε reusable layout (`<LegalLayout>` με max-width prose, ίδιο styling με το `corporate.tsx`).

## 5. Cookie consent banner
- Νέο component `src/components/site/CookieBanner.tsx`.
- Mounted στο `__root.tsx`.
- Πρώτη επίσκεψη → fixed banner κάτω-κάτω: μικρό κείμενο στα ελληνικά + κουμπιά **Αποδοχή** / **Απόρριψη** + link στην `/cookies`.
- Persist επιλογή σε `localStorage` (`fg-cookie-consent`: `accepted` / `rejected`).
- Δεν φορτώνεται κανένα analytics προς το παρόν, οπότε το banner είναι informational + έτοιμο για μελλοντικά scripts.

## 6. Footer update
4 columns:
- Brand (description)
- Brand links: YouTube, Συνεργασίες
- Legal: Εταιρικές Πληροφορίες, Πολιτική Απορρήτου, Όροι Χρήσης, Πολιτική Cookies
- Επικοινωνία: email

## Out of scope
- Δεν ενεργοποιείται Lovable Cloud (χωρίς auth/db).
- Δεν προστίθεται analytics tracking — το banner απλά καταγράφει την προτίμηση.
- Δεν εμβαπτίζονται τα videos inline (απλό click-out στο YouTube για να μη χρειαστεί player & cookies).

## Technical notes
- YouTube RSS endpoint: `https://www.youtube.com/feeds/videos.xml?channel_id=UC...` (public, χωρίς auth).
- Channel ID resolution: scrape μία φορά, cache in-memory. Αν αποτύχει → fallback σε static thumbnails.
- Server fn με `setResponseHeaders({ 'Cache-Control': 'public, max-age=600' })`.
- Όλες οι νέες σελίδες με `head()` metadata στα ελληνικά (title + description + og).
