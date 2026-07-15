import { useEffect, useMemo, useState } from "react";
import { Check, SlidersHorizontal, X } from "lucide-react";
import CompressionProductCard from "@/components/CompressionProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

interface CatalogFilters {
  brand: string;
  line: string;
}

const emptyFilters: CatalogFilters = { brand: "", line: "" };

function getInitialFilters(): CatalogFilters {
  const params = new URLSearchParams(window.location.search);
  const requestedBrand = params.get("marca") ?? "";
  const requestedLine = params.get("linha") ?? "";
  const brand = compressionStockingBrands.find((item) => item.id === requestedBrand);
  const validLines = new Set(brand?.lines.map((line) => toKey(line.line)) ?? []);

  return {
    brand: brand?.id ?? "",
    line: validLines.has(requestedLine) ? requestedLine : "",
  };
}

export default function CompressionLineCatalog() {
  const [filters, setFilters] = useState<CatalogFilters>(emptyFilters);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setFilters(getInitialFilters());
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const params = new URLSearchParams();
    if (filters.brand) params.set("marca", filters.brand);
    if (filters.line) params.set("linha", filters.line);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${params.size ? `?${params}` : ""}`
    );
  }, [filters, isMounted]);

  const selectedBrand = compressionStockingBrands.find((brand) => brand.id === filters.brand);
  const availableLines = useMemo(() => {
    if (!selectedBrand) return [];
    return Array.from(
      new Map(selectedBrand.lines.map((line) => [toKey(line.line), line.line])).entries()
    ).map(([key, label]) => ({ key, label }));
  }, [selectedBrand]);

  const filteredBrands = compressionStockingBrands
    .map((brand) => ({
      ...brand,
      lines: brand.lines.filter(
        (line) =>
          (!filters.brand || line.brandId === filters.brand) &&
          (!filters.line || toKey(line.line) === filters.line)
      ),
    }))
    .filter((brand) => brand.lines.length > 0);

  const resultCount = filteredBrands.reduce((total, brand) => total + brand.lines.length, 0);
  const selectedLineLabel = availableLines.find((line) => line.key === filters.line)?.label;

  return (
    <div className="space-y-8">
      <Card className="gap-0 overflow-hidden py-0 shadow-sm">
        <CardContent className="p-0">
          <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-4">
              {selectedBrand ? (
                <div className="grid min-h-14 min-w-40 place-items-center rounded-lg border bg-white px-4 py-2">
                  <img
                    src={selectedBrand.logo}
                    alt={selectedBrand.name}
                    className="h-8 max-w-40 object-contain"
                  />
                </div>
              ) : (
                <div className="grid size-14 place-items-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  CM
                </div>
              )}

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedBrand && <Badge>{selectedBrand.name}</Badge>}
                  {selectedLineLabel && <Badge variant="secondary">{selectedLineLabel}</Badge>}
                </div>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                  {selectedLineLabel
                    ? `Produtos da linha ${selectedLineLabel}`
                    : selectedBrand
                      ? `Meias compressivas ${selectedBrand.name}`
                      : "Todas as meias compressivas"}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {resultCount} {resultCount === 1 ? "produto encontrado" : "produtos encontrados"}
                </p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="border-t">
            <AccordionItem value="filters" className="border-0 px-5 sm:px-6">
              <AccordionTrigger className="py-4 text-sm font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <SlidersHorizontal className="size-4 text-primary" />
                  Alterar marca ou linha
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 rounded-lg border bg-secondary/50 p-4 sm:p-5">
                  <fieldset>
                    <legend className="mb-3 text-sm font-semibold">Marca</legend>
                    <div className="flex flex-wrap gap-2">
                      {compressionStockingBrands.map((brand) => (
                        <Button
                          key={brand.id}
                          type="button"
                          size="sm"
                          variant={filters.brand === brand.id ? "default" : "outline"}
                          aria-pressed={filters.brand === brand.id}
                          onClick={() => setFilters({ brand: brand.id, line: "" })}
                        >
                          {filters.brand === brand.id && <Check />}
                          {brand.name}
                        </Button>
                      ))}
                    </div>
                  </fieldset>

                  {selectedBrand && (
                    <fieldset>
                      <legend className="mb-3 text-sm font-semibold">
                        Linha da {selectedBrand.name}
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {availableLines.map((line) => (
                          <Button
                            key={line.key}
                            type="button"
                            size="sm"
                            variant={filters.line === line.key ? "default" : "outline"}
                            aria-pressed={filters.line === line.key}
                            onClick={() =>
                              setFilters((current) => ({ ...current, line: line.key }))
                            }
                          >
                            {filters.line === line.key && <Check />}
                            {line.label}
                          </Button>
                        ))}
                      </div>
                    </fieldset>
                  )}

                  {(filters.brand || filters.line) && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setFilters(emptyFilters)}
                    >
                      <X />
                      Ver todas as marcas
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {filteredBrands.map((brand) => (
        <section key={brand.id} id={brand.id} className="scroll-mt-24">
          {!filters.brand && (
            <div className="mb-6 flex flex-wrap items-center gap-4 border-b pb-5">
              <img src={brand.logo} alt={brand.name} className="h-9 max-w-44 object-contain" />
              <Badge variant="secondary">{brand.lines.length} produtos</Badge>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {brand.lines.map((line) => (
              <CompressionProductCard key={line.id} line={line} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
