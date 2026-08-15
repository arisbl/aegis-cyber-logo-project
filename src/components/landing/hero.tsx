import { ArrowRight, Fingerprint, Lock, Scale } from "lucide-react";
import logo from "@/assets/vanguard-osint-logo.png";

const badges = [
  { icon: Scale, label: "Provas com validade jurídica" },
  { icon: Lock, label: "LGPD e cadeia de custódia" },
  { icon: Fingerprint, label: "OSINT + forense digital" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <span className="label-mono inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">
            Protocolo OSINT · Atuação nacional
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Inteligência digital que transforma
            <span className="text-gradient"> dados abertos em provas</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Somos uma empresa de investigação digital para pessoas físicas e empresas.
            Rastreamos fraudes, identificamos autores anônimos, mapeamos riscos e
            entregamos relatórios técnicos com transparência, rigor metodológico e
            responsabilidade profissional.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Solicitar análise sigilosa
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Ver serviços
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border/70 bg-surface/70 p-8 shadow-elevated backdrop-blur">
            <img
              src={logo}
              alt="Emblema Vanguard OSINT"
              className="mx-auto w-full max-w-[300px] object-contain"
            />
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border/70 pt-6 text-center">
              {[
                { k: "24h", v: "Triagem inicial" },
                { k: "100%", v: "Confidencial" },
                { k: "+40", v: "Fontes OSINT" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-display text-2xl font-bold text-primary">{item.k}</dt>
                  <dd className="label-mono mt-1 text-muted-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
