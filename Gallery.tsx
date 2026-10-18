import { IMAGES, LINKS } from "../data/site";
import { InstagramIcon } from "./Icons";
import { Reveal } from "./Reveal";

/** Todas as fotos abaixo são arquivos oficiais da pasta da marca. */
const SHOTS = [
  {
    src: IMAGES.lifestyleMilkshake,
    w: 860,
    h: 1150,
    alt: "Dois donuts glaceados servidos em pratos coloridos ao lado de dois milkshakes, sobre mesa de mármore",
    cell: "sm:col-span-2 sm:row-span-2",
    ratio: "aspect-[4/5] sm:h-full",
  },
  {
    src: IMAGES.closeCaixa,
    w: 860,
    h: 860,
    alt: "Close dos donuts variados dentro da caixa oficial da Mister Donuts",
    cell: "",
    ratio: "aspect-square sm:h-full",
  },
  {
    src: IMAGES.closeDonutVertical,
    w: 760,
    h: 1013,
    alt: "Close de um donut de chocolate com fio de doce de leite segurado na mão",
    cell: "",
    ratio: "aspect-square sm:h-full",
  },
  {
    src: IMAGES.brownieConfetes,
    w: 760,
    h: 1013,
    alt: "Doce de chocolate com confetes coloridos servido em prato rosa",
    cell: "",
    ratio: "aspect-square sm:h-full",
  },
  {
    src: IMAGES.donutsBandeja,
    w: 760,
    h: 1013,
    alt: "Bandeja de confeitaria com donuts de chocolate e de confetes coloridos",
    cell: "",
    ratio: "aspect-square sm:h-full",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="section bg-cream-50">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="title-lg mt-3 text-cocoa-900">De perto, dá vontade</h2>
            <p className="lede mt-4">
              Fotos reais da vitrine, das caixas e das mesas da Mister Donuts.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto"
            >
              <InstagramIcon />
              <span>Ver mais no Instagram</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:auto-rows-[minmax(0,11rem)] sm:grid-cols-4 lg:auto-rows-[minmax(0,13rem)]">
            {SHOTS.map((shot) => (
              <figure
                key={shot.alt}
                className={`m-0 overflow-hidden rounded-2xl border border-cream-300 bg-cream-200 ${shot.cell}`}
              >
                <img
                  src={shot.src}
                  width={shot.w}
                  height={shot.h}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${shot.ratio}`}
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
