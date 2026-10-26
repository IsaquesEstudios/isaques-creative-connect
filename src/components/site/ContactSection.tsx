import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button, Card, DisplayHeading, Input, Label, Textarea } from "@/design-system/the-reading-room-697922";
import { whatsappLink } from "@/lib/site";

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-elevated px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Olá! Gostaria de solicitar um Diagnóstico Estratégico.",
      `Nome: ${f.get("nome")}`,
      `Empresa: ${f.get("empresa")}`,
      `Cargo: ${f.get("cargo")}`,
      `WhatsApp: ${f.get("telefone")}`,
      `E-mail: ${f.get("email")}`,
      `Porte: ${f.get("porte")}`,
      `Objetivo: ${f.get("objetivo")}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
    setSent(true);
  }

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-20 border-t-4 border-primary bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-4">
          <DisplayHeading id="contato-titulo" size="xl">
            Agende a Análise do Plano de Negócios da Sua Empresa
          </DisplayHeading>
          <p className="text-lg text-muted-foreground">
            Escolha abaixo a forma mais conveniente para iniciar nossa conversa. Preencha o formulário para agendarmos sua reunião
            apresentativa ou fale agora mesmo com nossa equipe via WhatsApp.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Card padding="lg" className="lg:col-span-3">
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field id="nome" label="Nome Completo" />
              <Field id="empresa" label="Nome da Empresa" />
              <Field id="cargo" label="Cargo" />
              <Field id="telefone" label="WhatsApp / Telefone" type="tel" />
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">E-mail Corporativo</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="porte">Porte da Empresa</Label>
                <select id="porte" name="porte" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Selecione</option>
                  <option>Pequeno Porte</option>
                  <option>Médio Porte</option>
                  <option>Grande Porte</option>
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="objetivo">Principal Objetivo Atual</Label>
                <Textarea id="objetivo" name="objetivo" required placeholder="Ex.: aumentar vendas, gerar leads, fortalecer a marca..." />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full">Solicitar Diagnóstico Estratégico</Button>
                {sent && <p role="status" className="mt-3 text-sm text-muted-foreground">Abrimos o WhatsApp com seus dados. É só enviar a mensagem.</p>}
              </div>
            </form>
          </Card>
          <Card variant="highlight" padding="lg" className="flex flex-col justify-between gap-8 lg:col-span-2">
            <div className="space-y-4">
              <MessageCircle aria-hidden className="size-10" />
              <DisplayHeading as="h3" size="md">Prefere um atendimento imediato?</DisplayHeading>
              <p>Fale direto com um consultor no WhatsApp Comercial e tire suas dúvidas agora, sem formulários.</p>
            </div>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} required />
    </div>
  );
}
