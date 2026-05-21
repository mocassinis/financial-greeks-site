import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";

const TITLE = "Εταιρικές Πληροφορίες — Financial Greeks";

export const Route = createFileRoute("/corporate")({
  component: CorporatePage,
});

const sections = [
  {
    title: "Πάροχος υπηρεσίας",
    body: "Η υπηρεσία παρέχεται από την εταιρεία FINANCIAL GREEKS Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.), με αριθμό Γ.Ε.ΜΗ. 161003303000.",
  },
  {
    title: "Στοιχεία επικοινωνίας",
    body: "Email: financialgreeksbusiness@gmail.com",
  },
  {
    title: "Ιδιοκτησιακή δομή / Πραγματικοί δικαιούχοι",
    body: "Η JNBC Μονοπρόσωπη Ι.Κ.Ε. κατέχει ποσοστό 95% στην εταιρεία. Τελικός πραγματικός δικαιούχος είναι ο Χρήστος Τσούνης του Χριστοφόρου. Η WECOM Μονοπρόσωπη Ι.Κ.Ε. κατέχει ποσοστό 5%.",
  },
  {
    title: "Δημόσια διαφημιστική χρηματοδότηση",
    body: "Η εταιρεία δεν έχει λάβει δημόσιους πόρους για κρατική διαφήμιση.",
  },
  {
    title: "Διαφημιστικά έσοδα από δημόσιες αρχές ή οντότητες τρίτων χωρών",
    body: "Η εταιρεία δεν έχει λάβει σχετικά έσοδα.",
  },
];

function CorporatePage() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

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
          <h1 className="mt-6 font-display text-4xl tracking-tight md:text-5xl">
            Εταιρικές Πληροφορίες
          </h1>
          <p className="mt-3 text-sm uppercase tracking-widest text-primary">
            άρθρο 6 Κανονισμού (ΕΕ) 2024/1083
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-5">
          {sections.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-8"
            >
              <h2 className="font-display text-xl tracking-tight md:text-2xl">{s.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
