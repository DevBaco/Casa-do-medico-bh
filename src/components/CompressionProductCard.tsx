import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getCompressionStockingPath,
  type StockingLine,
} from "@/data/compression-stockings";

interface CompressionProductCardProps {
  line: StockingLine;
}

export default function CompressionProductCard({ line }: CompressionProductCardProps) {
  const href = getCompressionStockingPath(line);

  return (
    <Card
      id={line.id}
      className="scroll-mt-24 gap-0 overflow-hidden rounded-lg p-0 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <a
        href={href}
        className="group relative flex aspect-[5/4] w-full snap-x snap-mandatory overflow-x-auto bg-secondary [scrollbar-width:none] md:grid md:place-items-center md:overflow-hidden [&::-webkit-scrollbar]:hidden"
        aria-label={`Ver ${line.displayName}`}
      >
        <img
          src={line.genericImage}
          alt={line.displayName}
          loading="lazy"
          className="h-full w-full shrink-0 snap-center object-contain p-5 transition-opacity duration-200 md:absolute md:inset-0 md:p-6 md:group-hover:opacity-0"
        />
        <img
          src={line.boxImage}
          alt={`Embalagem ${line.displayName}`}
          loading="lazy"
          className="h-full w-full shrink-0 snap-center object-contain p-5 transition-opacity duration-200 md:absolute md:inset-0 md:p-6 md:opacity-0 md:group-hover:opacity-100"
        />
        <span className="pointer-events-none absolute right-3 bottom-3 hidden rounded-md border bg-background/95 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm md:block">
          Ver produto
        </span>
        <span className="pointer-events-none absolute right-3 bottom-3 flex gap-1.5 md:hidden" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="size-1.5 rounded-full bg-border" />
        </span>
      </a>

      <CardContent className="flex min-h-[270px] flex-col gap-3 border-t p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{line.brandName}</Badge>
          {line.badges.slice(0, 2).map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>

        <div>
          <a href={href} className="group/title inline-flex items-start gap-2">
            <h3 className="text-lg font-semibold leading-snug">{line.displayName}</h3>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover/title:text-primary" />
          </a>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {line.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {line.compression.slice(0, 2).map((compression) => (
            <Badge key={compression} variant="secondary">
              {compression}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-1">
          <Button asChild size="lg" className="w-full">
            <a href={href}>
              Ver detalhes do produto
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
