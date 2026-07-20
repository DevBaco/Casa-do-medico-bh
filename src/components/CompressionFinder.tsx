import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      ? `/meias-compressivas/${selectedBrand}/linhas/${selectedLine}`
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
            <Select
              value={selectedBrand}
              onValueChange={(value) => {
                setSelectedBrand(value);
                setSelectedLine("");
              }}
            >
              <SelectTrigger className="h-12 w-full bg-background">
                <SelectValue placeholder="Selecione a marca" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold">2. Qual linha?</legend>
            <Select value={selectedLine} disabled={!brand} onValueChange={setSelectedLine}>
              <SelectTrigger className="h-12 w-full bg-background">
                <SelectValue placeholder="Selecione a linha" />
              </SelectTrigger>
              <SelectContent>
                {lines.map((line) => (
                  <SelectItem key={line.key} value={line.key}>
                    {line.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
