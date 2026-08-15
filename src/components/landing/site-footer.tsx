import logo from "@/assets/vanguard-osint-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vanguard OSINT" className="h-10 w-10 object-contain" />
            <span className="font-display text-sm font-bold tracking-[0.16em]">
              VANGUARD OSINT
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Investigação digital, OSINT e perícia forense para pessoas físicas e empresas.
            Transparência, legalidade e responsabilidade profissional em cada entrega.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <h3 className="label-mono text-primary">Serviços</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary">OSINT</a></li>
              <li><a href="#servicos" className="hover:text-primary">Forense digital</a></li>
              <li><a href="#servicos" className="hover:text-primary">Due diligence</a></li>
            </ul>
          </div>
          <div>
            <h3 className="label-mono text-primary">Empresa</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><a href="#metodologia" className="hover:text-primary">Metodologia</a></li>
              <li><a href="#compliance" className="hover:text-primary">Compliance</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="label-mono text-primary">Contato</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>contato@vanguardosint.com</li>
              <li>Atendimento nacional</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border/60 px-5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vanguard OSINT. Atuação em conformidade com a LGPD, o
        Marco Civil da Internet e a Lei 13.432/2017.
      </div>
    </footer>
  );
}
