import { FileCheck2, KeyRound, ScrollText, EyeOff } from "lucide-react";

const pillars = [
  {
    icon: ScrollText,
    title: "Legalidade da prova",
    desc: "Coleta apenas por meios lícitos, em conformidade com a LGPD, o Marco Civil da Internet e a Lei 13.432/2017.",
  },
  {
    icon: KeyRound,
    title: "Segurança da informação",
    desc: "Criptografia em trânsito e em repouso, ambientes segregados, controle de acesso e descarte seguro dos dados.",
  },
  {
    icon: FileCheck2,
    title: "Cadeia de custódia",
    desc: "Hash SHA-256, registro temporal e trilha documental de cada evidência, do primeiro acesso à entrega final.",
  },
  {
    icon: EyeOff,
    title: "Sigilo contratual",
    desc: "NDA em todo engajamento, equipe reduzida por caso e política de não retenção após o encerramento.",
  },
];

export function Compliance() {
  return (
    <section
      id="compliance"
      className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5">
        <header className="max-w-2xl">
          <span className="label-mono text-primary">Ética e conformidade</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Resultado só vale se a prova se sustentar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seguimos todas as normas de segurança digital aplicáveis. Não realizamos
            invasão de dispositivos, quebra de sigilo sem ordem judicial ou qualquer
            prática que contamine a evidência.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border/70 bg-card p-6">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
