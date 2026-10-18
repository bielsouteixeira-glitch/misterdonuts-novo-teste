import { LINKS } from "../data/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function InstagramCta() {
  return (
    <section id="contato" className="section bg-cream-50">
      <div className="shell">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-cocoa-800 px-6 py-12 text-cream-100 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-16 -z-10 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl"
            />

            <div className="grid gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
              <div className="min-w-0">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Acompanhe a gente
                </p>
                <h2 className="title-lg mt-3 text-cream-50">
                  Novidades, sabores do dia e bastidores
                </h2>
                <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-cream-200/85">
                  É no Instagram que avisamos o que acabou de sair da cozinha. E se quiser falar
                  direto com a gente, o WhatsApp está sempre aberto.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 lg:max-w-sm lg:justify-self-end">
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  <InstagramIcon />
                  <span className="truncate">{LINKS.instagramHandle}</span>
                </a>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-light w-full"
                >
                  <WhatsAppIcon />
                  <span className="truncate">{LINKS.whatsappLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
