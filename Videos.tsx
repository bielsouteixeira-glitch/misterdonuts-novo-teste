import { VIDEOS } from "../data/site";
import { Reveal } from "./Reveal";

export function Videos() {
  return (
    <section id="videos" className="section bg-cocoa-800 text-cream-100">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-sky-300">
            Vídeos
          </p>
          <h2 className="title-lg mt-3 text-cream-50">Por dentro da Mister Donuts</h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-cream-200/85">
            Imagens reais da cozinha, da loja e dos donuts — gravadas pela própria equipe. Toque
            em um vídeo para assistir; todos estão sem áudio.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VIDEOS.map((video, index) => (
            <Reveal as="li" key={video.id} delay={index * 80} className="h-full">
              <figure className="m-0 flex h-full flex-col overflow-hidden rounded-2xl border border-cream-100/15 bg-cocoa-900">
                <div className="relative w-full overflow-hidden bg-cocoa-900">
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    muted
                    loop
                    preload="none"
                    aria-label={video.label}
                    className="aspect-[9/16] w-full bg-cocoa-900 object-contain"
                  >
                    Seu navegador não consegue exibir este vídeo.
                  </video>
                </div>
                <figcaption className="flex flex-1 flex-col gap-1.5 p-5">
                  <h3 className="font-display text-lg leading-snug text-cream-50">
                    {video.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream-200/75">{video.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
