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
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-3">
        {storeBrands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <a
              href={brand.href}
              className="group flex h-24 items-center justify-center px-4 sm:h-28 sm:px-6"
              aria-label={`Ver produtos ${brand.name}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className={cn(
                  "max-h-14 w-full max-w-44 object-contain transition-[opacity,transform] group-hover:scale-[1.03] group-hover:opacity-80",
                  brand.darkInkOnLight && "brightness-0"
                )}
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-2 z-10 size-9 bg-background/95 shadow-md sm:-left-4"
        title="Marcas anteriores"
      />
      <CarouselNext
        className="right-2 z-10 size-9 bg-background/95 shadow-md sm:-right-4"
        title="Próximas marcas"
      />
    </Carousel>
  );
}
