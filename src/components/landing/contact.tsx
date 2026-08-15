import { useState } from "react";
import { Lock, Mail, MessageSquare, Clock } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="label-mono text-primary">Primeiro contato</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Conte o caso. O resto é método.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A triagem inicial é sigilosa e sem compromisso. Avaliamos a viabilidade
            técnica, explicamos o que é possível provar e apresentamos escopo, prazo e
            investimento antes de qualquer contratação.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {[
              { icon: Clock, text: "Retorno da triagem em até 24h úteis" },
              { icon: Lock, text: "Canal cifrado e NDA disponível desde o primeiro contato" },
              { icon: Mail, text: "contato@vanguardosint.com" },
              { icon: MessageSquare, text: "Atendimento remoto em todo o Brasil" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-muted-foreground">
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border/70 bg-card p-8 shadow-elevated"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm sm:col-span-2">
              <span className="label-mono text-muted-foreground">Nome</span>
              <input
                required
                name="nome"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="Como devemos chamar você"
              />
            </label>
            <label className="text-sm">
              <span className="label-mono text-muted-foreground">E-mail</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="voce@email.com"
              />
            </label>
            <label className="text-sm">
              <span className="label-mono text-muted-foreground">Telefone</span>
              <input
                name="telefone"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="(00) 00000-0000"
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="label-mono text-muted-foreground">Perfil</span>
              <select
                name="perfil"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option>Pessoa física</option>
                <option>Empresa</option>
                <option>Escritório de advocacia</option>
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="label-mono text-muted-foreground">Resumo do caso</span>
              <textarea
                required
                name="caso"
                rows={4}
                className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="Descreva o ocorrido sem incluir dados sensíveis neste primeiro contato."
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Enviar para triagem sigilosa
          </button>

          <p aria-live="polite" className="mt-3 text-center text-xs text-muted-foreground">
            {sent
              ? "Recebemos seu resumo neste protótipo. Conecte um backend para registrar e notificar os casos."
              : "Ao enviar, você concorda com o tratamento dos dados apenas para fins desta triagem."}
          </p>
        </form>
      </div>
    </section>
  );
}
