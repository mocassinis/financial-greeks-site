import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const TITLE = "Πολιτική Cookies — Financial Greeks";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <LegalLayout
      title="Πολιτική Cookies"
      sections={[
        {
          title: "Τι είναι τα cookies",
          body: (
            <p>
              Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σου όταν
              επισκέπτεσαι μια ιστοσελίδα και βοηθούν στη λειτουργία της και στην εμπειρία σου.
            </p>
          ),
        },
        {
          title: "Κατηγορίες cookies που χρησιμοποιούμε",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Αναγκαία:</strong> Απαραίτητα για τη βασική
                λειτουργία της ιστοσελίδας (π.χ. αποθήκευση επιλογής σου για cookies).
              </li>
              <li>
                <strong className="text-foreground">Στατιστικά:</strong> Μας βοηθούν να
                κατανοήσουμε ανώνυμα πώς χρησιμοποιείται η ιστοσελίδα.
              </li>
              <li>
                <strong className="text-foreground">Ενσωματωμένο περιεχόμενο (YouTube):</strong>{" "}
                Όταν αναπαράγεις βίντεο YouTube, η Google μπορεί να εγκαταστήσει cookies σύμφωνα
                με τη δική της πολιτική.
              </li>
            </ul>
          ),
        },
        {
          title: "Διαχείριση cookies",
          body: (
            <p>
              Μπορείς να αποδεχθείς ή να απορρίψεις τα προαιρετικά cookies από το banner που
              εμφανίζεται κατά την πρώτη επίσκεψη. Επίσης, μπορείς να ελέγξεις και να
              διαγράψεις cookies μέσα από τις ρυθμίσεις του browser σου (Chrome, Safari, Firefox,
              Edge κ.ά.).
            </p>
          ),
        },
        {
          title: "Αλλαγές στην πολιτική",
          body: (
            <p>
              Ενδέχεται να επικαιροποιούμε την παρούσα πολιτική. Η τρέχουσα έκδοση είναι πάντα
              διαθέσιμη σε αυτή τη σελίδα.
            </p>
          ),
        },
      ]}
    />
  );
}
