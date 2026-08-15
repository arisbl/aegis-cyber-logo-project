import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Audiences } from "@/components/landing/audiences";
import { Methodology } from "@/components/landing/methodology";
import { Compliance } from "@/components/landing/compliance";
import { Faq } from "@/components/landing/faq";
import { Roadmap } from "@/components/landing/roadmap";
import { Contact } from "@/components/landing/contact";
import { SiteFooter } from "@/components/landing/site-footer";

const title = "Vanguard OSINT — Investigação Digital, OSINT e Perícia Forense";
const description =
  "Empresa de investigação digital para pessoas físicas e empresas: OSINT, perícia forense, due diligence e rastreio de fraudes com laudos válidos e sigilo absoluto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Audiences />
        <Methodology />
        <Compliance />
        <Faq />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
