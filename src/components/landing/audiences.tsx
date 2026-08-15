import { Building2, User, Check } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Pessoas físicas",
    lead: "Quando a vida digital vira um problema real.",
    items: [
      "Golpes, estelionato e fraudes em PIX ou cartão",
      "Perfis falsos, difamação, calúnia e ameaças",
      "Sextorsão e vazamento de imagens íntimas",
      "Localização de bens e pessoas em processos cíveis",
      "Verificação de relacionamentos e antecedentes",
      "Suporte técnico ao advogado da causa",
    ],
  },
  {
    icon: Building2,
    title: "Empresas e escritórios",
    lead: "Decisões críticas exigem evidência, não suposição.",
    items: [
      "Due diligence de sócios, M&A e fornecedores",
      "Fraudes internas, desvio de dados e concorrência desleal",
      "Investigação de incidentes e acessos indevidos",
      "Monitoramento de marca, clones e vazamento de credenciais",
      "Compliance, integridade e prevenção a riscos",
      "Assistência técnica e laudos em litígios",
    ],
  },
];

export function Audiences() {
  return (
    <section id="atuacao" className="border-y border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <header className="max-w-2xl">
          <span className="label-mono text-primary">Para quem atuamos</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Mesmo rigor técnico, dois contextos distintos
          </h2>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {audiences.map(({ icon: Icon, title, lead, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/70 bg-card p-8 shadow-elevated"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{lead}</p>
              <ul className="mt-6 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
