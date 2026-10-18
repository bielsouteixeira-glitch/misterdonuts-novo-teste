import { FLAVORS, LINKS } from "../data/site";
import { ArrowIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Flavors() {
  return (
    <section id="sabores" className="section bg-cream-50">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Na vitrine</p>
            <h2 className="title-lg mt-3 text-cocoa-900">
              Clássicos que saem quentinhos da cozinha
            </h2>
            <p className="lede mt-4">
              A produção é diária e a vitrine muda ao longo do dia. Abaixo, alguns donuts que
              saem da nossa cozinha — o que está disponível agora fica sempre nos canais
              oficiais de pedido.
            </p>
          </Reveal>

          <Reveal delay={100} className="md:pb-2">
            <a
              href="#unidades"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-terra-500 transition-colors hover:text-terra-700"
            >
              <span>Ver canais de pedido</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FLAVORS.map((flavor, index) => (
            <Reveal as="li" key={flavor.id} delay={index * 90} className="h-full">
              <article className="card group flex h-full flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(47,29,22,0.9)]">
                <div className="overflow-hidden bg-cream-200">
                  {/* Fotos reais verticais (3:4) — card 4/5 preserva o produto inteiro */}
                  <img
                    src={flavor.image}
                    alt={flavor.alt}
                    width={760}
                    height={1013}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="title-md text-cocoa-900">{flavor.name}</h3>
                  <p className="text-sm leading-relaxed text-cocoa-600">{flavor.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 rounded-2xl border border-dashed border-terra-500/25 bg-sky-50 p-5 text-sm leading-relaxed text-cocoa-600">
            Sabores, recheios e disponibilidade podem variar por unidade e por horário. Para
            conferir o que está pronto agora, chame a gente no{" "}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-terra-600 underline decoration-brand-300 underline-offset-4 hover:text-terra-700"
            >
              WhatsApp
            </a>{" "}
            ou acompanhe o{" "}
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-terra-600 underline decoration-brand-300 underline-offset-4 hover:text-terra-700"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
