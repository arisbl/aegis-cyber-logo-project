import {
  Search,
  ShieldAlert,
  Smartphone,
  FileSearch,
  Landmark,
  UserSearch,
  Globe2,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Investigação OSINT",
    desc: "Coleta e correlação de dados em fontes abertas, redes sociais, vazamentos públicos, registros societários e deep/dark web.",
    tag: "Núcleo",
  },
  {
    icon: UserSearch,
    title: "Identificação de anônimos",
    desc: "Rastreio de perfis falsos, extorsão virtual, difamação e ameaças, com dossiê apto a instruir medidas judiciais.",
    tag: "Pessoa física",
  },
  {
    icon: FileSearch,
    title: "Perícia forense digital",
    desc: "Cópia forense, recuperação de arquivos apagados, análise de e-mails, logs e metadados com cadeia de custódia.",
    tag: "Judicial",
  },
  {
    icon: Smartphone,
    title: "Perícia em dispositivos móveis",
    desc: "Extração e análise de mensagens, chamadas, mídias e aplicativos em smartphones e tablets.",
    tag: "Judicial",
  },
  {
    icon: Landmark,
    title: "Due diligence e background check",
    desc: "Verificação reputacional de sócios, fornecedores, executivos e candidatos: processos, mídia adversa e vínculos.",
    tag: "Empresas",
  },
  {
    icon: ShieldAlert,
    title: "Fraudes financeiras e PIX",
    desc: "Rastreio de golpes digitais, contas laranja, criptoativos e apoio técnico na recuperação de valores.",
    tag: "Ambos",
  },
  {
    icon: Globe2,
    title: "Monitoramento de marca e vazamentos",
    desc: "Alertas contínuos sobre uso indevido da marca, credenciais expostas, clones de site e falsos perfis.",
    tag: "Empresas",
  },
  {
    icon: Network,
    title: "Threat intelligence e resposta",
    desc: "Análise de superfície de ataque, avaliação de riscos cibernéticos e suporte investigativo a incidentes.",
    tag: "Empresas",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <header className="max-w-2xl">
          <span className="label-mono text-primary">Soluções</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Capacidades investigativas de ponta a ponta
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do primeiro indício ao relatório final: combinamos inteligência de fontes
            abertas, forense computacional e análise de risco em um único protocolo
            auditável.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <article
              key={title}
              className="group rounded-xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="label-mono text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
