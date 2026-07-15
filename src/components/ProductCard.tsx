import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface ProductColor {
  name: string;
  swatch: string;
  image: string;
}

export interface ProductCardProps {
  brand: string;
  line: string;
  name: string;
  tagline: string;
  boxImage: string;
  hoverImage: string;
  colors: ProductColor[];
  compression: string;
  models: string;
  whatsappUrl: string;
}

export default function ProductCard(product: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="group gap-0 overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative block aspect-square w-full cursor-pointer overflow-hidden bg-white"
            aria-label={`Ver detalhes de ${product.name}`}
          >
            <img
              src={product.boxImage}
              alt={`Embalagem ${product.name}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={product.hoverImage}
              alt={product.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute right-3 bottom-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Ver cores e detalhes
            </span>
          </button>
        </DialogTrigger>

        <CardContent className="flex flex-col gap-3 border-t p-5">
          <div className="flex items-center gap-2">
            <Badge>{product.brand}</Badge>
            <Badge variant="secondary">{product.tagline}</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.colors.length} cores · vários graus de compressão e modelos
            </p>
          </div>
          <div className="flex items-center gap-1.5" aria-label="Cores disponíveis">
            {product.colors.map((color) => (
              <span
                key={color.name}
                title={color.name}
                className="size-4 rounded-full border border-black/10"
                style={{ backgroundColor: color.swatch }}
              />
            ))}
          </div>
          <p className="text-sm font-semibold text-primary">Consultar disponibilidade</p>
          <div className="flex gap-2">
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1">
                Ver detalhes
              </Button>
            </DialogTrigger>
            <Button asChild className="flex-1">
              <a href={product.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src="/icons/whatsapp.svg" alt="" className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="max-h-[90dvh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col bg-secondary/60 p-6">
            <div className="relative flex-1">
              <img
                key={selectedColor.image}
                src={selectedColor.image}
                alt={`${product.name} na cor ${selectedColor.name}`}
                className="mx-auto aspect-square h-full w-full object-contain"
              />
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Cor: <span className="text-foreground">{selectedColor.name}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={`Cor ${color.name}`}
                    aria-pressed={selectedColor.name === color.name}
                    className={cn(
                      "size-8 cursor-pointer rounded-full border border-black/10 transition-all",
                      selectedColor.name === color.name
                        ? "ring-2 ring-ring ring-offset-2"
                        : "hover:scale-110"
                    )}
                    style={{ backgroundColor: color.swatch }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6">
            <DialogHeader className="gap-2 text-left">
              <div className="flex items-center gap-2">
                <Badge>{product.brand}</Badge>
                <Badge variant="secondary">Linha {product.line}</Badge>
              </div>
              <DialogTitle className="text-xl">{product.name}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">
                {product.tagline}. Meia de compressão graduada com ação antimicrobiana,
                indicada para o dia a dia — conforto para quem passa longos períodos em pé
                ou sentado.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">Graus de compressão</p>
              <p className="mt-1 text-sm text-muted-foreground">{product.compression}</p>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">Modelos</p>
              <p className="mt-1 text-sm text-muted-foreground">{product.models}</p>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-2">
              <p className="text-center text-sm font-semibold text-primary">
                Disponibilidade e tamanhos mediante consulta
              </p>
              <Button asChild size="lg">
                <a
                  href={product.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/whatsapp.svg" alt="" className="size-5" />
                  Consultar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
