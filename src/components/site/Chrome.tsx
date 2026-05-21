import { Link } from "@tanstack/react-router";
import { Youtube, Instagram, Linkedin } from "lucide-react";

const YT = "https://www.youtube.com/@FinancialGreeks";
const IG = "https://www.instagram.com/financialgreeks/";
const LI = "https://www.linkedin.com/company/financialeuropeans/";
const MAIL = "mailto:financialgreeksbusiness@gmail.com";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-grad-coral shadow-glow">
            <Youtube className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-base tracking-tight">
            οι <span className="text-primary">Financial Greeks</span>
          </span>
        </Link>
        <a
          href={YT}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Youtube className="h-4 w-4" />
          <span className="hidden sm:inline">Subscribe</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-grad-coral">
              <Youtube className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base">
              οι <span className="text-primary">Financial Greeks</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Finance content brand για χρήματα, επενδύσεις και business στην Ελλάδα.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={YT}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={LI}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Brand</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={YT} target="_blank" rel="noreferrer" className="hover:text-primary">
                YouTube
              </a>
            </li>
            <li>
              <a href={MAIL} className="hover:text-primary">
                Συνεργασίες
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/corporate" className="hover:text-primary">
                Εταιρικές Πληροφορίες
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Πολιτική Απορρήτου
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Όροι Χρήσης
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary">
                Πολιτική Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Επικοινωνία</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={MAIL} className="hover:text-primary">
                financialgreeksbusiness@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} FINANCIAL GREEKS Ι.Κ.Ε. — Γ.Ε.ΜΗ. 161003303000
        </div>
      </div>
    </footer>
  );
}
