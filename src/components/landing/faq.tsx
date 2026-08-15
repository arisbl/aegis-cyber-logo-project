const faqs = [
  {
    q: "A investigação digital é legal?",
    a: "Sim. Atuamos com inteligência de fontes abertas e perícia forense sobre material fornecido de forma legítima pelo contratante, sempre dentro da LGPD, do Marco Civil da Internet e da Lei 13.432/2017. Não invadimos contas, dispositivos ou sistemas de terceiros.",
  },
  {
    q: "O relatório serve como prova em processo judicial?",
    a: "Sim. Os laudos e dossiês são produzidos com metodologia descrita, cadeia de custódia e anexos verificáveis, podendo instruir ações cíveis, criminais e trabalhistas, além de embasar atuação como assistente técnico.",
  },
  {
    q: "Quanto tempo leva uma investigação?",
    a: "A triagem inicial é feita em até 24 horas úteis. Casos de OSINT pontual costumam levar de 3 a 7 dias; perícias em dispositivos e due diligence complexas variam de 10 a 30 dias, sempre com prazo acordado antes do início.",
  },
  {
    q: "Vocês garantem identificar o autor de um perfil falso?",
    a: "Não vendemos garantias. Avaliamos a viabilidade antes de contratar e informamos com honestidade a probabilidade de êxito. Quando os vestígios digitais são insuficientes, indicamos o caminho judicial adequado para obtenção dos dados.",
  },
  {
    q: "Meus dados ficam armazenados com vocês?",
    a: "Somente pelo tempo necessário à execução e à eventual defesa técnica do laudo. Encerrado o prazo acordado, o material é descartado de forma segura, com registro de eliminação.",
  },
  {
    q: "Atendem em todo o Brasil?",
    a: "Sim. O atendimento é remoto e seguro, com envio de material por canais cifrados, e presencial mediante agenda para diligências e audiências.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <header className="text-center">
          <span className="label-mono text-primary">Perguntas frequentes</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Dúvidas antes de contratar</h2>
        </header>

        <div className="mt-10 divide-y divide-border/70 overflow-hidden rounded-xl border border-border/70 bg-card">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-1 text-primary transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
