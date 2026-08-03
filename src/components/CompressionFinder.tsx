import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface CompressionFinderBrand {
  id: string;
  name: string;
  lines: Array<{
    key: string;
    label: string;
  }>;
}

interface CompressionFinderProps {
  brands: CompressionFinderBrand[];
}

export default function CompressionFinder({ brands }: CompressionFinderProps) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLine, setSelectedLine] = useState("");

  const brand = brands.find((item) => item.id === selectedBrand);
  const lines = brand?.lines ?? [];

  const destination =
    selectedBrand && selectedLine
      ? `/meias-de-compressão/${selectedBrand}/linhas/${selectedLine}`
      : "";

  return (
    <Card className="gap-0 overflow-hidden border-2 border-primary/20 py-0 shadow-xl">
      <div className="border-b bg-secondary/60 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge>Busca guiada</Badge>
            <p className="mt-2 font-semibold">Encontre sua meia por marca e linha</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className={selectedBrand ? "text-primary" : ""}>1. Marca</span>
            <span aria-hidden="true">→</span>
            <span className={selectedLine ? "text-primary" : ""}>2. Linha</span>
          </div>
        </div>
      </div>

      <CardContent className="p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <fieldset>
            <legend className="mb-2 text-sm font-semibold">1. Qual marca?</legend>
            <div className="relative">
              <select
                aria-label="Selecione a marca"
                value={selectedBrand}
                onChange={(event) => {
                  setSelectedBrand(event.target.value);
                  setSelectedLine("");
                }}
                className="h-12 w-full appearance-none rounded-lg border bg-background px-3 pr-10 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>Selecione a marca</option>
                {brands.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold">2. Qual linha?</legend>
            <div className="relative">
              <select
                aria-label="Selecione a linha"
                value={selectedLine}
                disabled={!brand}
                onChange={(event) => setSelectedLine(event.target.value)}
                className="h-12 w-full appearance-none rounded-lg border bg-background px-3 pr-10 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>Selecione a linha</option>
                {lines.map((line) => (
                  <option key={line.key} value={line.key}>
                    {line.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </fieldset>
        </div>

        <div className="mt-6">
          {destination ? (
            <Button asChild size="lg" className="h-12 w-full text-base">
              <a href={destination}>
                Aplicar filtros e ver as meias
                <ArrowRight />
              </a>
            </Button>
          ) : (
            <Button type="button" size="lg" className="h-12 w-full text-base" disabled>
              {!selectedBrand ? "Selecione a marca" : "Selecione a linha"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
