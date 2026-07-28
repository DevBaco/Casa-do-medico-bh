"use client"

import * as React from "react"
import { ArrowRight, MessageCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getCatalogCategoryFilterPath } from "@/data/catalog-filters"
import { cn } from "@/lib/utils"
import { WHATSAPP_URL } from "@/lib/whatsapp"

const slides = [
  {
    image: "/images/home/meias-compressao-rotina.webp",
    imageAlt: "Pessoa vestindo uma meia de compressão clara",
    imagePosition: "object-center",
    eyebrow: "Especialidade da casa",
    title: "Meias de compressão para cada rotina",
    description:
      "Compare linhas Venosan, Sigvaris e Genoven e converse com a equipe sobre modelos, tamanhos e disponibilidade.",
    href: "/meias-compressivas",
    action: "Ver marcas e linhas",
  },
  {
    image: "/images/home/mobilidade-home-care.webp",
    imageAlt: "Pessoa usando um andador com apoio durante a mobilidade em casa",
    imagePosition: "object-center",
    eyebrow: "Ortopedia e mobilidade",
    title: "Mais apoio e segurança para se movimentar",
    description:
      "Encontre andadores, bengalas, muletas, cadeiras de banho e outros recursos para diferentes necessidades.",
    href: getCatalogCategoryFilterPath("ortopedia-mobilidade"),
    action: "Ver produtos de mobilidade",
  },
  {
    image: "/images/home/monitoramento-em-casa.webp",
    imageAlt: "Pessoa medindo a pressão arterial com aparelho digital em casa",
    imagePosition: "object-center",
    eyebrow: "Monitoramento de saúde",
    title: "Praticidade para acompanhar a saúde em casa",
    description:
      "Conheça aparelhos de pressão, oxímetros, termômetros e opções para monitoramento de glicemia.",
    href: getCatalogCategoryFilterPath("monitoramento"),
    action: "Ver equipamentos",
  },
]

export default function HomeHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const syncCurrentSlide = () => setCurrent(api.selectedScrollSnap())

    syncCurrentSlide()
    api.on("select", syncCurrentSlide)
    api.on("reInit", syncCurrentSlide)

    return () => {
      api.off("select", syncCurrentSlide)
      api.off("reInit", syncCurrentSlide)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const timer = window.setInterval(() => api.scrollNext(), 6500)
    return () => window.clearInterval(timer)
  }, [api, paused])

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className="overflow-hidden rounded-2xl border bg-foreground shadow-sm"
      aria-label="Destaques da Casa do Médico BH"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <CarouselContent className="-ml-0">
        {slides.map((slide, index) => (
          <CarouselItem key={slide.title} className="pl-0">
            <div className="relative min-h-[450px] overflow-hidden sm:min-h-[390px]">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                width={1600}
                height={720}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover",
                  slide.imagePosition
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent sm:hidden" />

              <div className="relative flex min-h-[450px] items-center px-6 py-10 sm:min-h-[390px] sm:px-14 lg:px-20">
                <div className="max-w-2xl text-white">
                  <Badge className="border-white/20 bg-white/15 text-white ring-1 ring-white/15">
                    {slide.eyebrow}
                  </Badge>
                  {index === 0 ? (
                    <h1 className="mt-4 max-w-xl text-3xl leading-[1.04] font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="mt-4 max-w-xl text-3xl leading-[1.04] font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>
                  )}
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {slide.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="h-10 px-4">
                      <a href={slide.href}>
                        {slide.action}
                        <ArrowRight />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-10 border-white/35 bg-white/10 px-4 text-white hover:bg-white/20 hover:text-white"
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle />
                        Fale conosco
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        aria-label="Destaque anterior"
        variant="secondary"
        className="left-4 hidden size-9 border-white/20 bg-background/90 shadow-lg sm:inline-flex"
      />
      <CarouselNext
        aria-label="Próximo destaque"
        variant="secondary"
        className="right-4 hidden size-9 border-white/20 bg-background/90 shadow-lg sm:inline-flex"
      />

      <div className="absolute right-5 bottom-4 z-10 flex items-center gap-1.5 rounded-full bg-foreground/55 px-2.5 py-2 backdrop-blur-sm sm:right-7 sm:bottom-5">
        {slides.map((slide, index) => (
          <Button
            key={slide.title}
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label={`Ir para o destaque ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            className={cn(
              "size-2 rounded-full bg-white/45 p-0 hover:bg-white",
              current === index && "w-6 bg-white"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  )
}
