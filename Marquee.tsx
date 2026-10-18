const ITEMS = [
  "Massa feita no dia",
  "Coberturas artesanais",
  "Vila Leopoldina",
  "Santana",
  "Guarulhos",
  "Desde 2016",
  "Donuts recheados",
];

export function Marquee() {
  return (
    <div className="marquee-mask overflow-hidden border-y border-terra-500/15 bg-cocoa-800 py-3.5 text-cream-100">
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {ITEMS.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 text-[0.78rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.82rem]"
              >
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Versão acessível, legível por leitores de tela */}
      <p className="sr-only">
        Massa feita no dia, coberturas artesanais, unidades na Vila Leopoldina, Santana e
        Guarulhos, desde 2016.
      </p>
    </div>
  );
}
