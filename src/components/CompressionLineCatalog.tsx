import { Badge } from "@/components/ui/badge";
import CompressionProductCard from "@/components/CompressionProductCard";
import type { StockingBrand } from "@/data/compression-stockings";

interface CompressionLineCatalogProps {
  brands: StockingBrand[];
}

export default function CompressionLineCatalog({ brands }: CompressionLineCatalogProps) {
  const lines = brands.flatMap((brand) => brand.lines);

  return (
    <div className="space-y-12">
      {brands.map((brand) => (
        <section key={brand.id} id={brand.id} className="scroll-mt-24">
          <div className="mb-6 flex flex-col justify-between gap-5 border-b pb-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <img src={brand.logo} alt={brand.name} className="h-10 max-w-40 object-contain" />
                <Badge variant="secondary">{brand.lines.length} produtos cadastrados</Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {brand.description}
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {brand.lines.map((line) => (
              <CompressionProductCard key={line.id} line={line} />
            ))}
          </div>
        </section>
      ))}

      <div className="sr-only" aria-label="Índice do catálogo para busca futura">
        {lines.map((line) => (
          <span key={line.id}>
            {line.displayName} {line.summary} {line.keywords.join(" ")}
          </span>
        ))}
      </div>
    </div>
  );
}
