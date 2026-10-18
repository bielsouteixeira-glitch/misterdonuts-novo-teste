import { LINKS, LOCATIONS, NAV } from "../data/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terra-500/15 bg-cream-100">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
          <div className="min-w-0">
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cocoa-600">
              Donuts artesanais produzidos diariamente desde 2016, em São Paulo e Guarulhos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Mister Donuts Brasil"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-terra-500/25 bg-cream-50 text-cocoa-700 transition-colors hover:border-terra-500 hover:bg-sky-100 hover:text-terra-600"
              >
                <InstagramIcon />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Mister Donuts Brasil"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-terra-500/25 bg-cream-50 text-cocoa-700 transition-colors hover:border-terra-500 hover:bg-sky-100 hover:text-terra-600"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="min-w-0">
            <h2 className="font-display text-base text-cocoa-900">Navegue</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cocoa-600 transition-colors hover:text-terra-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h2 className="font-display text-base text-cocoa-900">Unidades</h2>
            <ul className="mt-4 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="min-w-0 text-sm leading-relaxed text-cocoa-600">
                  <span className="block font-semibold text-cocoa-800">{loc.name}</span>
                  <span className="block">{loc.address}</span>
                  <a
                    href={loc.order.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-semibold text-terra-600 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
                  >
                    {loc.order.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-terra-500/15 pt-6 text-xs leading-relaxed text-cocoa-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mister Donuts Brasil. Todos os direitos reservados.</p>
          <p>Imagens ilustrativas. Disponibilidade de sabores varia por unidade.</p>
        </div>
      </div>
    </footer>
  );
}
