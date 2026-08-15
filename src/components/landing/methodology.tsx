const steps = [
  {
    n: "01",
    title: "Triagem e viabilidade",
    desc: "Escuta sigilosa do caso, definição do objetivo investigativo e análise prévia de viabilidade técnica e jurídica.",
  },
  {
    n: "02",
    title: "Planejamento OSINT",
    desc: "Mapeamento de fontes, hipóteses de investigação, escopo, prazos e critérios de licitude na coleta.",
  },
  {
    n: "03",
    title: "Coleta e preservação",
    desc: "Captura de evidências com hash, timestamp e cadeia de custódia documentada, sem alterar o material original.",
  },
  {
    n: "04",
    title: "Análise e correlação",
    desc: "Cruzamento de dados, linha do tempo, grafos de vínculos e validação cruzada de cada achado.",
  },
  {
    n: "05",
    title: "Relatório técnico",
    desc: "Dossiê claro e rastreável, com metodologia, limitações, anexos e conclusões defensáveis em juízo.",
  },
  {
    n: "06",
    title: "Suporte pós-entrega",
    desc: "Reunião de leitura do laudo, apoio ao advogado, quesitos complementares e acompanhamento de diligências.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <header className="max-w-2xl">
          <span className="label-mono text-primary">Metodologia</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Um protocolo auditável em 6 etapas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparência é método: você sabe o que foi feito, de onde veio cada dado e
            qual o grau de confiança de cada conclusão.
          </p>
        </header>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative overflow-hidden rounded-xl border border-border/70 bg-card p-6"
            >
              <span className="font-display text-4xl font-bold text-primary/25">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
