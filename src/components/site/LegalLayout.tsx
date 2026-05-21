import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteFooter } from "./Chrome";

type Section = { title: string; body: React.ReactNode };

export function LegalLayout({
  title,
  kicker,
  sections,
}: {
  title: string;
  kicker?: string;
  sections: Section[];
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Επιστροφή στην αρχική
          </Link>
          <h1 className="mt-6 font-display text-4xl tracking-tight md:text-5xl">{title}</h1>
          {kicker && (
            <p className="mt-3 text-sm uppercase tracking-widest text-primary">{kicker}</p>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-5">
          {sections.map((s, i) => (
            <article
              key={i}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-8"
            >
              <h2 className="font-display text-xl tracking-tight md:text-2xl">{s.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.body}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
