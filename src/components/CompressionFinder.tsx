import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { compressionStockingBrands } from "@/data/compression-stockings";

function toKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function CompressionFinder() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLine, setSelectedLine] = useState("");

  const brand = compressionStockingBrands.find((item) => item.id === selectedBrand);
  const lines = useMemo(() => {
    if (!brand) return [];

    return Array.from(
      new Map(brand.lines.map((line) => [toKey(line.line), line.line])).entries()
    ).map(([key, label]) => ({ key, label }));
  }, [brand]);

  const destination =
    selectedBrand && selectedLine
      ? `/meias-compressivas?marca=${selectedBrand}&linha=${selectedLine}`
      : "";

  return (
    <Card className="gap-0 overflow-hidden border-2 border-primary/20 py-0 shadow-xl">
      <div className="border-b bg-secondary/60 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge>Encontre sua meia</Badge>
            <p className="mt-2 font-semibold">Escolha a marca e depois a linha</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className={selectedBrand ? "text-primary" : ""}>1. Marca</span>
            <span aria-hidden="true">→</span>
            <span className={selectedLine ? "text-primary" : ""}>2. Linha</span>
          </div>
        </div>
      </div>

      <CardContent className="space-y-6 p-5 sm:p-6">
        <fieldset>
          <legend className="mb-3 text-sm font-semibold">1. Qual marca você procura?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {compressionStockingBrands.map((item) => {
              const isSelected = selectedBrand === item.id;

              return (
                <Button
                  key={item.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedBrand(item.id);
                    setSelectedLine("");
                  }}
                  className="h-16 justify-between px-4"
                >
                  <span className={isSelected ? "rounded bg-white px-3 py-1.5" : ""}>
                    <img src={item.logo} alt={item.name} className="h-7 max-w-36 object-contain" />
                  </span>
                  {isSelected && <Check className="size-5" />}
                </Button>
              );
            })}
          </div>
        </fieldset>

        {brand && (
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">2. Qual linha da {brand.name}?</legend>
            <div className="flex flex-wrap gap-2">
              {lines.map((line) => (
                <Button
                  key={line.key}
                  type="button"
                  size="sm"
                  variant={selectedLine === line.key ? "default" : "outline"}
                  aria-pressed={selectedLine === line.key}
                  onClick={() => setSelectedLine(line.key)}
                >
                  {selectedLine === line.key && <Check />}
                  {line.label}
                </Button>
              ))}
            </div>
          </fieldset>
        )}

        {destination ? (
          <Button asChild size="lg" className="h-12 w-full text-base">
            <a href={destination}>
              Ver produtos desta linha
              <ArrowRight />
            </a>
          </Button>
        ) : (
          <Button type="button" size="lg" className="h-12 w-full text-base" disabled>
            {selectedBrand ? "Escolha uma linha" : "Escolha uma marca"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
