import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import logo from "@/assets/vanguard-osint-logo.png";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#atuacao", label: "Para quem" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#compliance", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vanguard OSINT — inteligência e investigação digital"
            className="h-11 w-11 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-[0.16em]">
              VANGUARD OSINT
            </span>
            <span className="label-mono block text-muted-foreground">
              Digital Intelligence
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="label-mono flex items-center gap-1.5 text-primary">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Sigilo absoluto
          </span>
          <a
            href="#contato"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Analisar meu caso
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Analisar meu caso
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
