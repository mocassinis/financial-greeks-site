import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Youtube, TrendingUp, Briefcase, Wallet, Mic } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { VideoThumb } from "@/components/site/VideoThumb";

const YT = "https://www.youtube.com/@FinancialGreeks";
const MAIL = "mailto:financialgreeksbusiness@gmail.com";

const TITLE = "Οι Financial Greeks — Finance content για την Ελλάδα";

export const Route = createFileRoute("/")({
  component: Index,
});

const heroVideos = [
  { title: "Πώς να ξεκινήσεις επενδύσεις στην Ελλάδα", gradient: "coral" as const },
  { title: "Φόροι 2026, explained", gradient: "violet" as const },
  { title: "Build in Greece — η νέα γενιά founders", gradient: "mint" as const },
  { title: "Κρυφά κόστη που σε τρώνε κάθε μήνα", gradient: "sun" as const },
];

const recentVideos = [
  { title: "Χρηματιστήριο Αθηνών — αξίζει το 2026;", gradient: "violet" as const },
  { title: "Από μισθωτός σε επιχειρηματίας", gradient: "coral" as const },
  { title: "ETF για αρχάριους — τι να προσέξεις", gradient: "mint" as const },
  { title: "Ακίνητα στην Αθήνα: αγορά ή ενοίκιο;", gradient: "sun" as const },
  { title: "Crypto χωρίς θόρυβο — τα βασικά", gradient: "violet" as const },
  { title: "Το πρώτο σου budget σε 10 λεπτά", gradient: "coral" as const },
];

const tags = [
  "Επενδύσεις",
  "Χρηματιστήριο",
  "Startups",
  "Φόροι",
  "Ακίνητα",
  "Crypto",
  "Business",
  "Καθημερινά οικονομικά",
];

const tagSearch = (t: string) =>
  `https://www.youtube.com/@FinancialGreeks/search?query=${encodeURIComponent(t)}`;

const pillars = [
  {
    icon: TrendingUp,
    title: "Επενδύσεις & αγορές",
    text: "Απλές εξηγήσεις, αναλύσεις και συζητήσεις γύρω από τον κόσμο των επενδύσεων.",
    href: tagSearch("επενδύσεις"),
  },
  {
    icon: Briefcase,
    title: "Επιχειρηματικότητα",
    text: "Ιστορίες, ιδέες και συζητήσεις με ανθρώπους που χτίζουν, δημιουργούν και εξελίσσονται.",
    href: tagSearch("επιχειρηματικότητα"),
  },
  {
    icon: Wallet,
    title: "Προσωπικά οικονομικά",
    text: "Περιεχόμενο για καλύτερη οικονομική οργάνωση, αποφάσεις και καθημερινές συνήθειες.",
    href: tagSearch("προσωπικά οικονομικά"),
  },
  {
    icon: Mic,
    title: "Συνεντεύξεις & εκπομπές",
    text: "Creator-led formats, guests και σειρές που κάνουν τα οικονομικά πιο ενδιαφέροντα.",
    href: tagSearch("συνέντευξη"),
  },
];

function Index() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <a
              href={YT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition hover:text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Greek finance content brand
            </a>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Οι <span className="text-gradient">Financial Greeks</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Βίντεο, εκπομπές και συζητήσεις για χρήματα, επενδύσεις, business και
              πραγματικές οικονομικές αποφάσεις στην Ελλάδα.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={YT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                <Youtube className="h-4 w-4" /> Δες το κανάλι
              </a>
              <a
                href={MAIL}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-surface"
              >
                Συνεργασίες <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <VideoThumb {...heroVideos[0]} href={YT} badge="New" />
                <VideoThumb {...heroVideos[1]} href={YT} />
              </div>
              <div className="space-y-4">
                <VideoThumb {...heroVideos[2]} href={YT} />
                <VideoThumb {...heroVideos[3]} href={YT} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch divide-y divide-border/60 px-5 md:flex-row md:divide-x md:divide-y-0 md:px-8">
          {[
            ["146K+", "subscribers", YT],
            ["1.800+", "videos", `${YT}/videos`],
            ["Finance • Business • Investing", "", YT],
          ].map(([big, small, href], i) => (
            <a
              key={i}
              href={href as string}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 px-2 py-7 text-center transition hover:bg-surface/30 md:px-8"
            >
              <div className="font-display text-2xl tracking-tight transition group-hover:text-primary md:text-3xl">
                {big}
              </div>
              {small && (
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {small}
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          Τι είναι οι <span className="text-primary">Financial Greeks</span>
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Οι Financial Greeks είναι ένα ελληνικό finance content brand που δημιουργεί
            περιεχόμενο γύρω από τα χρήματα, τις επενδύσεις, την επιχειρηματικότητα και
            τις οικονομικές αποφάσεις της καθημερινότητας.
          </p>
          <p>
            Κάνουμε την οικονομική γνώση πιο απλή, πιο κατανοητή και πιο κοντά στον
            τρόπο που πραγματικά ζει και σκέφτεται το ελληνικό κοινό.
          </p>
        </div>
      </section>

      {/* ENTITY / PARTNERSHIPS */}
      <section className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8">
            <span className="text-xs uppercase tracking-widest text-primary">Brand</span>
            <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
              Το brand
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Οι Financial Greeks είναι ελληνικό finance content brand που λειτουργεί υπό
              τη νομική οντότητα{" "}
              <span className="text-foreground">FINANCIAL GREEKS Ι.Κ.Ε.</span>
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8">
            <span className="text-xs uppercase tracking-widest text-primary">Partnerships</span>
            <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
              Εμπορικές συνεργασίες
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Οι εμπορικές συνεργασίες και τα brand partnerships πραγματοποιούνται μέσω
              των{" "}
              <a
                href="https://www.financialeuropeans.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Financial Europeans
              </a>
              , του agency brand της ίδιας νομικής οντότητας.
            </p>
            <a
              href="https://www.financialeuropeans.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary"
            >
              www.financialeuropeans.com <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Τι θα βρεις στο κανάλι
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Τέσσερις βασικές κατηγορίες περιεχομένου, ένα brand που μιλάει ελληνικά.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary opacity-0 transition group-hover:opacity-100">
                Δες στο YouTube <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* RECENT CONTENT */}
      <section id="recent" className="border-t border-border/60 bg-ink/40">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary">Recent</span>
              <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
                Πρόσφατο περιεχόμενο
              </h2>
            </div>
            <a
              href={`${YT}/videos`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            >
              Δες όλα τα βίντεο <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentVideos.map((t, i) => (
              <VideoThumb key={i} title={t.title} gradient={t.gradient} href={YT} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <a
                key={t}
                href={tagSearch(t)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border/60 bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur transition hover:border-primary/50 hover:text-foreground"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-grad-coral p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl text-white md:text-5xl">
              Γίνε μέλος της κοινότητας
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Νέα βίντεο, εκπομπές και συζητήσεις κάθε εβδομάδα. Κάνε subscribe και μην
              χάνεις τίποτα.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={YT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                <Youtube className="h-4 w-4" /> Subscribe
              </a>
              <a
                href={MAIL}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Συνεργασίες
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
