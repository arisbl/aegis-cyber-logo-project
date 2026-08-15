import { LayoutDashboard, Bot, BellRing, FileSignature, Users, CreditCard } from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    title: "Portal do cliente",
    desc: "Área logada com status do caso, timeline da investigação e download seguro de laudos.",
  },
  {
    icon: FileSignature,
    title: "Geração de relatórios",
    desc: "Montagem automática do dossiê em PDF com hash das evidências e assinatura digital.",
  },
  {
    icon: BellRing,
    title: "Monitoramento contínuo",
    desc: "Alertas por e-mail sobre menções à marca, vazamento de credenciais e novos indícios.",
  },
  {
    icon: Bot,
    title: "Pré-triagem com IA",
    desc: "Classificação automática do caso, sugestão de fontes OSINT e resumo executivo inicial.",
  },
  {
    icon: Users,
    title: "CRM de casos",
    desc: "Pipeline interno, atribuição de analistas, prazos e histórico de interações auditável.",
  },
  {
    icon: CreditCard,
    title: "Contratação online",
    desc: "Proposta, aceite de NDA e pagamento de pacotes ou consultas diretamente pelo site.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <header className="max-w-2xl">
          <span className="label-mono text-accent">Próximos passos do projeto</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            O que ainda podemos construir aqui
          </h2>
          <p className="mt-4 text-muted-foreground">
            Este é o esboço. Cada item abaixo pode ser implementado nesta mesma base, com
            banco de dados, autenticação e funções de servidor.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-dashed border-border bg-card/60 p-6"
            >
              <Icon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
