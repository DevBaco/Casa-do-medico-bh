import { useEffect, useRef, useState } from "react";
import { Minus, Palette, Plus, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { StockingColor } from "@/data/compression-stockings";
import { cn } from "@/lib/utils";

interface CompressionProductGalleryProps {
  displayName: string;
  boxImage: string;
  sizeChartImage?: string;
  colors: StockingColor[];
}

function SliderTableZoom({ image, alt }: { image: string; alt: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pointerZoom, setPointerZoom] = useState(false);
  const effectiveZoom = pointerZoom ? Math.max(zoom, 2) : zoom;

  const updateZoom = (nextZoom: number) => {
    const normalizedZoom = Math.min(3, Math.max(1, nextZoom));
    setZoom(normalizedZoom);

    if (normalizedZoom === 1) {
      viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const followPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const bounds = viewport.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));

    requestAnimationFrame(() => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) * x;
      viewport.scrollTop = (viewport.scrollHeight - viewport.clientHeight) * y;
    });
  };

  return (
    <div className="relative h-[390px] overflow-hidden rounded-lg border bg-white sm:h-[520px]">
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-md border bg-background/95 p-1 shadow-sm">
        <span className="min-w-11 text-center text-xs font-semibold">
          {Math.round(effectiveZoom * 100)}%
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => updateZoom(zoom - 0.25)}
          disabled={zoom <= 1}
          title="Reduzir"
        >
          <Minus />
          <span className="sr-only">Reduzir tabela</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => updateZoom(1)}
          disabled={zoom === 1}
          title="Restaurar tamanho"
        >
          <RotateCcw />
          <span className="sr-only">Restaurar tabela</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => updateZoom(zoom + 0.25)}
          disabled={zoom >= 3}
          title="Ampliar"
        >
          <Plus />
          <span className="sr-only">Ampliar tabela</span>
        </Button>
      </div>

      <div
        ref={viewportRef}
        className="h-full overflow-auto"
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") setPointerZoom(true);
        }}
        onPointerMove={followPointer}
        onPointerLeave={() => {
          setPointerZoom(false);
          if (zoom === 1) viewportRef.current?.scrollTo({ top: 0, left: 0 });
        }}
        onPointerDown={(event) => {
          if (effectiveZoom > 1) event.stopPropagation();
        }}
      >
        <img
          src={image}
          alt={alt}
          draggable={false}
          className="h-auto max-w-none select-none"
          style={{ width: `${effectiveZoom * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function CompressionProductGallery({
  displayName,
  boxImage,
  sizeChartImage,
  colors,
}: CompressionProductGalleryProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const media = [
    {
      image: selectedColor.image,
      label: `${displayName} na cor ${selectedColor.name}`,
      type: "product",
    },
    ...(sizeChartImage
      ? [
          {
            image: sizeChartImage,
            label: `Tabela de medidas ${displayName}`,
            type: "size-chart",
          },
        ]
      : []),
    { image: boxImage, label: `Embalagem ${displayName}`, type: "package" },
  ];

  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => setCurrentSlide(api.selectedScrollSnap());
    updateCurrentSlide();
    api.on("select", updateCurrentSlide);
    api.on("reInit", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("reInit", updateCurrentSlide);
    };
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
        <CarouselContent className="ml-0">
          {media.map((item, index) => (
            <CarouselItem key={`${index}-${item.image}`} className="pl-0">
              {item.type === "size-chart" ? (
                <SliderTableZoom image={item.image} alt={item.label} />
              ) : (
                <div className="relative flex h-[390px] items-center justify-center overflow-hidden rounded-lg border bg-secondary sm:h-[520px]">
                  {index === 0 && (
                    <Badge variant="secondary" className="absolute top-4 left-4 z-10">
                      {selectedColor.name}
                    </Badge>
                  )}
                  <img
                    src={item.image}
                    alt={item.label}
                    className="max-h-full w-full object-contain p-6 sm:p-10"
                  />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          title="Imagem anterior"
          className="left-3 z-20 size-10 border-primary/20 bg-background/95 text-primary shadow-md hover:bg-background"
        />
        <CarouselNext
          title="Próxima imagem"
          className="right-3 z-20 size-10 border-primary/20 bg-background/95 text-primary shadow-md hover:bg-background"
        />
      </Carousel>

      <div
        className={cn("mt-3 grid gap-2", media.length === 2 ? "grid-cols-2" : "grid-cols-3")}
        aria-label="Selecionar imagem do produto"
      >
        {media.map((item, index) => (
          <Button
            key={`${index}-${item.image}`}
            type="button"
            variant="ghost"
            title={item.label}
            aria-label={item.label}
            aria-pressed={currentSlide === index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-20 min-w-0 rounded-md border bg-background p-2 hover:bg-secondary",
              currentSlide === index && "border-primary bg-secondary ring-1 ring-primary/20"
            )}
          >
            <img src={item.image} alt="" className="h-full w-full object-contain" />
          </Button>
        ))}
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
          <Palette className="size-4 text-primary" />
          Modelos disponíveis
        </p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <Button
              key={color.name}
              type="button"
              variant="ghost"
              aria-label={`Selecionar modelo ${color.name}`}
              aria-pressed={selectedColor.name === color.name}
              onClick={() => {
                setSelectedColor(color);
                api?.scrollTo(0);
              }}
              className={cn(
                "h-auto min-w-14 flex-col gap-1.5 rounded-none bg-transparent p-0 text-xs font-normal text-muted-foreground hover:bg-transparent hover:text-foreground",
                selectedColor.name === color.name && "font-semibold text-foreground"
              )}
            >
              <span
                className={cn(
                  "size-9 rounded-full border border-black/15 shadow-sm",
                  selectedColor.name === color.name && "ring-2 ring-primary ring-offset-2"
                )}
                style={{ backgroundColor: color.swatch }}
                aria-hidden="true"
              />
              <span>{color.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
