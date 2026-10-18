import { IMAGES } from "../data/site";
import { Reveal } from "./Reveal";

/**
 * Textos retirados LITERALMENTE do post oficial da marca
 * ("imagem de post do instagram bem bonita falando do processo de fazer o donut.jpg").
 */
const PILLARS = [
  {
    step: "01",
    title: "Massa feita manualmente",
    text: "Tudo começa no processo: a massa é preparada à mão, sem atalhos.",
  },
  {
    step: "02",
    title: "Tempo certo de fermentação",
    text: "O descanso é respeitado — é ele que deixa o donut leve e macio.",
  },
  {
    step: "03",
    title: "Preparo cuidadoso em cada etapa",
    text: "Fritura no ponto, cobertura aplicada uma a uma e acabamento conferido.",
  },
];

export function Story() {
  return (
    <section id="processo" className="section bg-cream-100">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <figure className="m-0 mx-auto w-full max-w-md lg:max-w-none">
            {/* Post oficial da marca, exibido inteiro (sem corte) */}
            <div className="overflow-hidden rounded-[1.75rem] border border-cream-300 bg-cream-200 shadow-[0_40px_80px_-55px_rgba(47,29,22,0.8)]">
              <img
                src={IMAGES.processoPost}
                width={900}
                height={1125}
                loading="lazy"
                decoding="async"
                alt="Post oficial da Mister Donuts: 'Tudo começa no processo do donut' — massa feita manualmente, tempo certo de fermentação e preparo cuidadoso em cada etapa"
                className="w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-cocoa-500">
              Publicação oficial da Mister Donuts Brasil sobre o processo de produção.
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Nossa história</p>
            <h2 className="title-lg mt-3 text-cocoa-900">
              Tudo começa no processo do donut
            </h2>
            <p className="lede mt-5">
              A Mister Donuts Brasil começou em 2016 e, desde então, mantém o mesmo jeito de
              fazer: simples, trabalhoso e sem pressa. É esse cuidado que faz o donut chegar
              macio até você.
            </p>
          </Reveal>

          <ol className="mt-9 flex list-none flex-col gap-5 p-0">
            {PILLARS.map((pillar, index) => (
              <Reveal as="li" key={pillar.step} delay={index * 100}>
                <div className="flex gap-4 rounded-2xl border border-terra-500/15 bg-cream-50 p-5 sm:gap-5 sm:p-6">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-200 font-display text-sm font-semibold text-terra-600">
                    {pillar.step}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-cocoa-900">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cocoa-600">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={320}>
            <p className="mt-6 rounded-2xl border-l-4 border-brand-400 bg-sky-50 p-5 text-sm leading-relaxed text-cocoa-700">
              <span className="font-semibold text-terra-600">Curiosidade da casa:</span> aqueles
              pontinhos escuros na massa são canela — é o que deixa o gostinho ainda mais
              memorável.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
