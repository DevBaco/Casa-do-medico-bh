import { ArrowRight, Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface HeaderCatalogItem {
  id: string;
  label: string;
  description: string;
  href: string;
}

interface Props {
  productItems: HeaderCatalogItem[];
  compressionItems: HeaderCatalogItem[];
  whatsappUrl: string;
  whatsappLabel: string;
}

function DesktopCatalogLink({ item }: { item: HeaderCatalogItem }) {
  return (
    <NavigationMenuLink href={item.href} className="block px-3 py-2.5 font-medium">
      {item.label}
    </NavigationMenuLink>
  );
}

function MobileCatalogLinks({ items }: { items: HeaderCatalogItem[] }) {
  return (
    <div className="grid gap-1.5 px-1">
      {items.map((item) => (
        <SheetClose asChild key={item.id}>
          <a
            href={item.href}
            className="rounded-lg border bg-background px-3 py-2.5 transition-colors hover:bg-muted"
          >
            <span className="block font-medium text-foreground">{item.label}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </span>
          </a>
        </SheetClose>
      ))}
    </div>
  );
}

export default function SiteHeaderClient({
  productItems,
  compressionItems,
  whatsappUrl,
  whatsappLabel,
}: Props) {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="/" aria-label="Página inicial da Casa do Médico BH" className="shrink-0">
          <img
            src="/images/home/logo-casa-do-medico-wordmark.webp"
            alt="Casa do Médico BH"
            width="520"
            height="240"
            className="hidden h-11 w-auto sm:block"
          />
          <img
            src="/logo/casa-do-medico.png"
            alt="Casa do Médico BH"
            className="h-11 w-auto sm:hidden"
          />
        </a>

        <NavigationMenu viewport={false} className="hidden xl:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Início
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Produtos médicos</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[360px] p-2">
                <NavigationMenuLink
                  href="/produtos"
                  className="mb-1 block border bg-primary/5 px-3 py-2.5 font-semibold text-primary"
                >
                  Ver todos os produtos
                </NavigationMenuLink>
                <div className="grid gap-0.5">
                  {productItems.map((item) => (
                    <DesktopCatalogLink key={item.id} item={item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Meias compressivas</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[320px] p-2">
                <NavigationMenuLink
                  href="/meias-compressivas"
                  className="mb-1 block border bg-primary/5 px-3 py-2.5 font-semibold text-primary"
                >
                  Ver todas as meias
                </NavigationMenuLink>
                <div className="grid gap-0.5">
                  {compressionItems.map((item) => (
                    <DesktopCatalogLink key={item.id} item={item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#nossa-historia"
                className={navigationMenuTriggerStyle()}
              >
                Nossa história
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/#contato" className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild className="h-10 px-3 sm:px-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <img src="/icons/whatsapp.svg" alt="" className="size-4" />
              <span className="hidden sm:inline">{whatsappLabel}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-lg" className="xl:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto p-0">
              <SheetHeader className="border-b p-5 pr-14">
                <SheetTitle>Casa do Médico BH</SheetTitle>
                <SheetDescription>Encontre rapidamente a categoria desejada.</SheetDescription>
              </SheetHeader>

              <nav className="px-4 pb-6" aria-label="Navegação principal">
                <SheetClose asChild>
                  <a
                    href="/"
                    className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
                  >
                    Início
                  </a>
                </SheetClose>

                <Accordion type="single" collapsible className="border-y">
                  <AccordionItem value="produtos" className="border-b">
                    <AccordionTrigger className="px-3 text-base no-underline hover:no-underline">
                      Produtos médicos
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 pb-4">
                      <SheetClose asChild>
                        <a
                          href="/produtos"
                          className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2.5 font-semibold text-primary no-underline"
                        >
                          Catálogo completo
                          <ArrowRight className="size-4" />
                        </a>
                      </SheetClose>
                      <MobileCatalogLinks items={productItems} />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="meias" className="border-0">
                    <AccordionTrigger className="px-3 text-base no-underline hover:no-underline">
                      Meias compressivas
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 pb-4">
                      <SheetClose asChild>
                        <a
                          href="/meias-compressivas"
                          className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2.5 font-semibold text-primary no-underline"
                        >
                          Catálogo de meias
                          <ArrowRight className="size-4" />
                        </a>
                      </SheetClose>
                      <MobileCatalogLinks items={compressionItems} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <SheetClose asChild>
                  <a
                    href="/#nossa-historia"
                    className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
                  >
                    Nossa história
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/#contato"
                    className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
                  >
                    Contato
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
