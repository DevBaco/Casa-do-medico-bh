import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { googleReviews } from "@/data/reviews";

export default function GoogleReviewsCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4 items-stretch">
        {googleReviews.map((review) => (
          <CarouselItem key={review.name} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
            <Card className="h-full gap-0 py-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex h-full flex-col px-5">
                <Quote className="size-8 -scale-x-100 text-primary/20" />
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {review.text}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt=""
                    loading="lazy"
                    className="size-11 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{review.name}</p>
                    <div className="flex gap-0.5 text-accent" aria-label={`${review.rating} de 5 estrelas`}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="size-3.5"
                          fill={index < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="z-10 hidden size-9 bg-background/95 shadow-md md:flex md:-left-6"
        title="Avaliação anterior"
      />
      <CarouselNext
        className="z-10 hidden size-9 bg-background/95 shadow-md md:flex md:-right-6"
        title="Próxima avaliação"
      />
    </Carousel>
  );
}
