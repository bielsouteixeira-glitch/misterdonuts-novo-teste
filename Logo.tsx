import { LOGO } from "../data/site";
import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  /** altura da marca; o SVG/PNG mantém a proporção original (320x390) */
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: "h-11",
  md: "h-14 sm:h-[4.5rem]",
  lg: "h-24 sm:h-28",
};

/**
 * Logo OFICIAL da Mister Donuts Brasil — arquivo "logo.jpg" da pasta do Drive,
 * com o fundo azul recortado para PNG transparente.
 * object-contain garante que o selo apareça inteiro, sem distorção nem corte.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <img
      src={LOGO}
      width={320}
      height={390}
      alt="Mister Donuts Brasil"
      className={cn("w-auto object-contain", SIZES[size], className)}
      decoding="async"
    />
  );
}
