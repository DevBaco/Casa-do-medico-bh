import { Check, Ruler } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { StockingLine } from "@/data/compression-stockings";

interface CompressionProductTabsProps {
  line: StockingLine;
  whatsappUrl: string;
}

interface WhatsAppCtaProps {
  whatsappUrl: string;
  title: string;
  description: string;
  label: string;
}

function WhatsAppCta({ whatsappUrl, title, description, label }: WhatsAppCtaProps) {
  return (
    <div className="mt-8 flex flex-col gap-5 border-l-4 border-primary bg-background px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <Button asChild size="lg" className="h-11 w-full shrink-0 px-5 sm:w-auto">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <img src="/icons/whatsapp.svg" alt="" className="size-4" />
          {label}
        </a>
      </Button>
    </div>
  );
}

export default function CompressionProductTabs({ line, whatsappUrl }: CompressionProductTabsProps) {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList variant="line" className="h-11 w-full justify-start gap-6 border-b">
        <TabsTrigger value="general" className="flex-none px-0 text-base">
          Informações gerais
        </TabsTrigger>
        <TabsTrigger value="size" className="flex-none px-0 text-base">
          Tamanho
        </TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="pt-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div>
            <h3 className="text-xl font-semibold">Sobre o produto</h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {line.description}
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Ruler className="size-5 text-primary" />
              Compressão
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {line.compression.map((compression) => (
                <Badge key={compression} variant="secondary">
                  {compression}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 border-t pt-7 md:grid-cols-2">
          {line.specifications.map((group) => (
            <section key={group.title}>
              <h3 className="text-base font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <WhatsAppCta
          whatsappUrl={whatsappUrl}
          title="Quer saber se este modelo é o ideal?"
          description="Converse com nossa equipe para consultar indicação, cores, modelos e disponibilidade."
          label="Consultar este produto"
        />
      </TabsContent>

      <TabsContent value="size" className="pt-6">
        <div className="mb-5 max-w-3xl">
          <h3 className="text-xl font-semibold">Tabela de medidas</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            As medidas devem ser conferidas antes da escolha do tamanho e confirmadas no atendimento.
          </p>
        </div>
        <div className="flex min-h-[360px] items-center justify-center rounded-lg border bg-white p-4 sm:p-6">
          <img
            src={line.sizeChartImage}
            alt={`Tabela de medidas ${line.displayName}`}
            className="max-h-[720px] w-full object-contain"
          />
        </div>

        <WhatsAppCta
          whatsappUrl={whatsappUrl}
          title="Ficou em dúvida entre dois tamanhos?"
          description="Envie suas medidas pelo WhatsApp para confirmar o tamanho e consultar a disponibilidade."
          label="Confirmar meu tamanho"
        />
      </TabsContent>
    </Tabs>
  );
}
