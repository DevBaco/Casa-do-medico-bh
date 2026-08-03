import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { storeBrands } from "@/data/brands";
import { cn } from "@/lib/utils";

export default function BrandCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 2800, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true, duration: 32 }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-3">
        {storeBrands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <div className="flex h-24 items-center justify-center px-4 sm:h-28 sm:px-6">
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className={cn(
                  "max-h-14 w-full max-w-44 object-contain",
                  brand.darkInkOnLight && "brightness-0"
                )}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="z-10 hidden size-9 bg-background/95 shadow-md sm:-left-4 sm:flex"
        title="Marcas anteriores"
      />
      <CarouselNext
        className="z-10 hidden size-9 bg-background/95 shadow-md sm:-right-4 sm:flex"
        title="Próximas marcas"
      />
    </Carousel>
  );
}
