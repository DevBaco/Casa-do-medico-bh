import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Menu } from "lucide-react";
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

export interface HeaderCatalogGroup {
  id: string;
  label: string;
  href: string;
  items: HeaderCatalogItem[];
}

interface Props {
  productGroups: HeaderCatalogGroup[];
  compressionItems: HeaderCatalogItem[];
}

function DesktopCatalogLink({ item }: { item: HeaderCatalogItem }) {
  return (
    <NavigationMenuLink
      href={item.href}
      className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
    >
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
            className="block rounded-lg border bg-background px-3 py-2.5 no-underline transition-colors hover:bg-muted"
          >
            <span className="block font-medium text-foreground">{item.label}</span>
          </a>
        </SheetClose>
      ))}
    </div>
  );
}

function MobileSectionLink({
  sectionId,
  onNavigate,
  children,
}: {
  sectionId: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`/#${sectionId}`}
      className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
      onClick={(event) => {
        if (window.location.pathname !== "/") return;
        event.preventDefault();
        onNavigate();
        window.setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }}
    >
      {children}
    </a>
  );
}

export default function SiteHeaderClient({
  productGroups,
  compressionItems,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProductGroupId, setActiveProductGroupId] = useState(
    productGroups[0]?.id ?? ""
  );
  const [mobileCategoryOpenId, setMobileCategoryOpenId] = useState<string | null>(null);
  const activeProductGroup =
    productGroups.find((group) => group.id === activeProductGroupId) ?? productGroups[0];

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
              <NavigationMenuTrigger>Meias compressivas</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[360px] p-2">
                <NavigationMenuLink
                  href="/meias-de-compressão"
                  className="mb-1 flex items-center justify-between border bg-primary/5 px-3 py-2.5 font-semibold text-primary"
                >
                  Ver catálogo de meias
                  <ArrowRight className="size-4" />
                </NavigationMenuLink>
                <div className="grid gap-0.5">
                  {compressionItems.map((item) => (
                    <DesktopCatalogLink key={item.id} item={item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Produtos médicos</NavigationMenuTrigger>
              <NavigationMenuContent
                className="overflow-hidden p-0"
                style={{ width: "min(640px, calc(100vw - 2rem))" }}
              >
                <div className="grid grid-cols-[220px_minmax(0,1fr)]">
                  <div className="border-r bg-secondary/35 p-2">
                    <NavigationMenuLink
                      href="/produtos"
                      className="mb-1 flex items-center justify-between px-3 py-2.5 font-semibold text-primary"
                    >
                      Catálogo completo
                      <ArrowRight className="size-4" />
                    </NavigationMenuLink>
                    {productGroups.map((group) => (
                      <NavigationMenuLink
                        key={group.id}
                        href={group.href}
                        onMouseEnter={() => setActiveProductGroupId(group.id)}
                        onFocus={() => setActiveProductGroupId(group.id)}
                        className={`flex items-center justify-between px-3 py-2.5 font-semibold ${
                          activeProductGroup?.id === group.id
                            ? "bg-primary/10 text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {group.label}
                        <ArrowRight className="size-4" />
                      </NavigationMenuLink>
                    ))}
                  </div>

                  <section className="min-h-64 p-3">
                    {activeProductGroup && (
                      <div className="grid grid-cols-1 gap-1">
                        {activeProductGroup.items.map((item) => (
                          <DesktopCatalogLink key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </section>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/#nossa-historia" className={navigationMenuTriggerStyle()}>
                Nossa história
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contato" className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
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
                <Accordion type="single" collapsible className="border-y">
                  <AccordionItem value="meias">
                    <AccordionTrigger className="px-3 text-base no-underline hover:no-underline">
                      Meias compressivas
                    </AccordionTrigger>
                    <AccordionContent
                      className="!h-auto pb-4"
                      contentClassName="data-open:!h-auto data-closed:!h-0"
                    >
                      <SheetClose asChild>
                        <a
                          href="/meias-de-compressão"
                          className="mb-2 flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2.5 font-semibold text-primary no-underline"
                        >
                          Ver catálogo de meias
                          <ArrowRight className="size-4" />
                        </a>
                      </SheetClose>
                      <MobileCatalogLinks items={compressionItems} />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="produtos-medicos">
                    <AccordionTrigger className="px-3 text-base no-underline hover:no-underline">
                      Produtos médicos
                    </AccordionTrigger>
                    <AccordionContent
                      className="!h-auto pb-4"
                      contentClassName="data-open:!h-auto data-closed:!h-0"
                    >
                      <SheetClose asChild>
                        <a
                          href="/produtos"
                          className="mb-3 flex items-center justify-between gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-semibold leading-snug text-primary no-underline"
                        >
                          <span>Ver catálogo completo</span>
                          <ArrowRight className="size-4 shrink-0" />
                        </a>
                      </SheetClose>
                      <div className="divide-y rounded-lg border">
                        {productGroups.map((group) => (
                          <div key={group.id}>
                            <Button
                              type="button"
                              variant="ghost"
                              className="flex h-auto min-h-11 w-full items-center justify-between rounded-none px-3 py-2.5 text-left text-sm font-medium hover:bg-muted"
                              aria-expanded={mobileCategoryOpenId === group.id}
                              onClick={() =>
                                setMobileCategoryOpenId((current) =>
                                  current === group.id ? null : group.id,
                                )
                              }
                            >
                              <span>{group.label}</span>
                              {mobileCategoryOpenId === group.id ? (
                                <ChevronUp className="size-4 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="size-4 text-muted-foreground" />
                              )}
                            </Button>
                            {mobileCategoryOpenId === group.id && (
                              <div className="space-y-3 px-3 pb-4">
                                <SheetClose asChild>
                                  <a
                                    href={group.href}
                                    className="flex items-center justify-between gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-semibold leading-snug text-primary no-underline"
                                  >
                                    <span>Ver todos os itens de {group.label}</span>
                                    <ArrowRight className="size-4 shrink-0" />
                                  </a>
                                </SheetClose>
                                <MobileCatalogLinks items={group.items} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <MobileSectionLink sectionId="nossa-historia" onNavigate={() => setMenuOpen(false)}>
                  Nossa história
                </MobileSectionLink>
                <a
                  href="/contato"
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
