import { LOCATIONS } from "../data/site";
import { BagIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Locations() {
  return (
    <section id="unidades" className="section bg-cream-100">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Onde nos encontrar</p>
          <h2 className="title-lg mt-3 text-cocoa-900">Três unidades, o mesmo donut</h2>
          <p className="lede mt-4">
            Escolha a loja mais perto de você para retirar no balcão ou pedir delivery. Cada
            unidade tem o seu próprio canal oficial de pedido.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {LOCATIONS.map((loc, index) => (
            <Reveal as="li" key={loc.id} delay={index * 100} className="h-full">
              <article className="card flex h-full flex-col gap-5 p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(47,29,22,0.9)] sm:p-7">
                <header className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-500">
                    {loc.city}
                  </p>
                  <h3 className="mt-2 font-display text-[1.6rem] leading-tight text-cocoa-900">
                    {loc.name}
                  </h3>
                </header>

                <p className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-cocoa-700">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="min-w-0">{loc.address}</span>
                </p>

                <div className="mt-auto flex flex-col gap-2.5 pt-1">
                  <a
                    href={loc.order.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${
                      loc.order.kind === "ifood" ? "btn-primary" : "btn-dark"
                    }`}
                  >
                    {loc.order.kind === "ifood" ? <BagIcon /> : <WhatsAppIcon />}
                    <span>{loc.order.label}</span>
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <PinIcon className="h-[1.1rem] w-[1.1rem]" />
                    <span>Como chegar</span>
                  </a>
                </div>

                <p className="text-xs leading-relaxed text-cocoa-500">
                  {loc.order.kind === "ifood"
                    ? "Pedido pelo iFood oficial desta unidade."
                    : "Esta unidade atende pedidos pelo WhatsApp oficial da marca."}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
