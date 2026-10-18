import { IMAGES, LINKS } from "../data/site";
import { BagIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  { value: "2016", label: "Desde o primeiro donut" },
  { value: "3", label: "Unidades em SP e Guarulhos" },
  { value: "iFood", label: "Delivery nas unidades parceiras" },
];

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-cream-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[22rem] w-[22rem] rounded-full bg-sky-200/70 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[20rem] w-[20rem] rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="shell grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 lg:py-20">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-terra-600">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="min-w-0">Donuts artesanais desde 2016</span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="title-xl mt-6 text-cocoa-900">
              O donut que virou{" "}
              <span className="relative inline-block text-terra-500">
                tradição
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 -bottom-1 h-2.5 w-full text-brand-300"
                >
                  <path
                    d="M3 9.5C52 3.5 168 2.5 217 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              em São Paulo
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="lede mt-6">
              Massa feita manualmente, tempo certo de fermentação e preparo cuidadoso em cada
              etapa. Da Vila Leopoldina a Guarulhos, cada unidade monta a própria caixa — para
              comer na loja ou receber em casa.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#unidades" className="btn btn-primary w-full sm:w-auto">
                <BagIcon />
                <span>Peça na sua unidade</span>
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                <WhatsAppIcon />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-10 grid gap-4 border-t border-terra-500/15 pt-7 sm:grid-cols-3 sm:gap-6">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex min-w-0 items-baseline gap-3 sm:block">
                  <dt className="font-display text-2xl text-terra-500 sm:text-[1.7rem]">
                    {item.value}
                  </dt>
                  <dd className="min-w-0 text-sm leading-snug text-cocoa-600 sm:mt-1">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="w-full">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-cream-300 bg-cream-200 shadow-[0_40px_80px_-50px_rgba(47,29,22,0.65)]">
              {/* Foto oficial "foto de donuts na caixa.jpg" — 1:1 nativo, exibida sem corte */}
              <img
                src={IMAGES.heroCaixa}
                width={1100}
                height={1100}
                alt="Caixa oficial da Mister Donuts Brasil com quatro donuts: chocolate, confetes coloridos e coberturas variadas"
                className="aspect-square w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cream-300 bg-cream-50 p-4 shadow-[0_24px_50px_-40px_rgba(47,29,22,0.8)] sm:absolute sm:-bottom-7 sm:left-5 sm:mt-0 sm:max-w-[17rem]">
              <span
                aria-hidden="true"
                className="h-11 w-11 shrink-0 overflow-hidden rounded-full stripes ring-2 ring-cream-400"
              />
              <p className="min-w-0 text-sm leading-snug text-cocoa-700">
                Vitrine montada todos os dias nas três unidades.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
