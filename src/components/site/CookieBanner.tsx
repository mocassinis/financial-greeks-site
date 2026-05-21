import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "fg-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  if (!show) return null;

  const decide = (val: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, val);
    } catch {}
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <div className="rounded-2xl border border-border/60 bg-card/95 p-5 shadow-card backdrop-blur-xl">
        <p className="font-display text-sm font-semibold">Χρησιμοποιούμε cookies</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Χρησιμοποιούμε αναγκαία cookies για τη λειτουργία της ιστοσελίδας και προαιρετικά
          cookies για στατιστικά και ενσωματωμένο περιεχόμενο YouTube. Δες την{" "}
          <Link to="/cookies" className="text-primary hover:underline">
            Πολιτική Cookies
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => decide("accepted")}
            className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Αποδοχή
          </button>
          <button
            onClick={() => decide("rejected")}
            className="inline-flex h-9 flex-1 items-center justify-center rounded-full border border-border bg-surface/60 px-4 text-xs font-semibold text-foreground transition hover:bg-surface"
          >
            Απόρριψη
          </button>
        </div>
      </div>
    </div>
  );
}
