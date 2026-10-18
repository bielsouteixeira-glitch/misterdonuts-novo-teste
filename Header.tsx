import { useEffect, useState } from "react";
import { LINKS, NAV } from "../data/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled || open
            ? "border-b border-terra-500/15 bg-cream-50/94 shadow-[0_8px_30px_-24px_rgba(47,29,22,0.8)] backdrop-blur-md"
            : "border-b border-transparent bg-cream-50/75 backdrop-blur-sm",
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-3 py-2 sm:h-24">
          <a
            href="#topo"
            className="flex min-w-0 shrink items-center rounded-xl py-1"
            aria-label="Mister Donuts Brasil — início"
          >
            <Logo size="md" />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-cocoa-700 transition-colors hover:bg-sky-100 hover:text-terra-600 xl:px-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden !min-h-11 !px-5 !py-2.5 text-sm md:inline-flex"
            >
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              <span>Fazer pedido</span>
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fazer pedido pelo WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-700 md:hidden"
            >
              <WhatsAppIcon />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-terra-500/25 bg-cream-50 text-cocoa-800 transition-colors hover:border-terra-500 hover:text-terra-600 lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          id="menu-mobile"
          hidden={!open}
          className="border-t border-terra-500/15 bg-cream-50/98 backdrop-blur-md lg:hidden"
        >
          <nav
            aria-label="Navegação mobile"
            className="shell max-h-[calc(100dvh-6rem)] overflow-y-auto py-5"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3.5 text-base font-medium text-cocoa-800 transition-colors hover:bg-sky-100 hover:text-terra-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2.5 border-t border-terra-500/15 pt-4">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                <WhatsAppIcon />
                <span>Pedir pelo WhatsApp</span>
              </a>
              <a href="#unidades" onClick={() => setOpen(false)} className="btn btn-outline w-full">
                Ver unidades e delivery
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Espaçador: impede que o cabeçalho fixo cubra o conteúdo */}
      <div aria-hidden="true" className="h-20 sm:h-24" />
    </>
  );
}
