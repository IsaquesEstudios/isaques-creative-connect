import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { Footer } from "@/design-system/the-reading-room-697922";
import { SITE_NAME, WHATSAPP_DISPLAY, services, whatsappLink } from "@/lib/site";
import { Logo, SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Footer
            lead={
              <div className="space-y-3">
                <Logo />
                <p className="max-w-xs text-sm text-muted-foreground">
                  Agência de marketing para empresas com mais de 8 anos de mercado. Estratégia sob medida e foco em ROI.
                </p>
              </div>
            }
            columns={[
              { title: "Soluções", links: services.map((s) => ({ label: s.title, href: `/servicos/${s.slug}` })) },
              {
                title: "Agência",
                links: [
                  { label: "8 Anos de Experiência", href: "/#experiencia" },
                  { label: "Metodologia", href: "/#metodologia" },
                  { label: "Perguntas Frequentes", href: "/#faq" },
                  { label: "Agendar Diagnóstico", href: "/#contato" },
                ],
              },
              { title: "Contato", links: [{ label: `WhatsApp ${WHATSAPP_DISPLAY}`, href: whatsappLink() }] },
            ]}
            legal={`© ${new Date().getFullYear()} ${SITE_NAME}. Todos os direitos reservados.`}
          />
        </div>
      </div>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MessageCircle aria-hidden className="size-6" />
      </a>
    </div>
  );
}
