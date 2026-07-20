import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CatalogProduct, CatalogProductImage } from "@/data/catalog-products";
import { cn } from "@/lib/utils";

interface CatalogProductGalleryProps {
  images: CatalogProductImage[];
  imageFrame?: CatalogProduct["imageFrame"];
}

export default function CatalogProductGallery({
  images,
  imageFrame,
}: CatalogProductGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const aspectClass = imageFrame?.detailAspectRatio === "landscape"
    ? "aspect-[3/2]"
    : imageFrame?.detailAspectRatio === "standard"
      ? "aspect-[4/3]"
      : "aspect-square";
  const objectClass = imageFrame?.detailFit === "cover"
    ? imageFrame.detailPosition === "bottom"
      ? "object-cover object-bottom"
      : "object-cover object-center"
    : "object-contain object-center";
  const imageStyle = {
    transform: `translateX(${imageFrame?.detailTranslateX ?? 0}%) scale(${imageFrame?.detailScale ?? 1})`,
  };

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
          {images.map((image, index) => (
            <CarouselItem key={`${index}-${image.src}`} className="pl-0">
              <Card className="gap-0 overflow-hidden py-0 shadow-sm">
                <div
                  className={cn(
                    "relative max-h-[650px] overflow-hidden bg-white",
                    aspectClass
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={cn(
                      "absolute inset-0 h-full w-full origin-center",
                      objectClass
                    )}
                    style={imageStyle}
                  />
                </div>
              </Card>
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
        className={cn(
          "mt-3 grid gap-2",
          images.length === 2 ? "grid-cols-2" : "grid-cols-3"
        )}
        aria-label="Selecionar imagem do produto"
      >
        {images.map((image, index) => (
          <Button
            key={`${index}-${image.src}`}
            type="button"
            variant="ghost"
            title={image.alt}
            aria-label={image.alt}
            aria-pressed={currentSlide === index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-20 min-w-0 rounded-md border bg-background p-2 hover:bg-secondary",
              currentSlide === index &&
                "border-primary bg-secondary ring-1 ring-primary/20"
            )}
          >
            <img src={image.src} alt="" className="h-full w-full object-contain" />
          </Button>
        ))}
      </div>
    </div>
  );
}
