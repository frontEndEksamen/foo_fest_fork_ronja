import Section from "./Section.jsx";
import HeroDescription from "./HeroDescription.jsx";
import Image from "next/image";
import BandCard from "@/app/components/BandCard";

export default function Hero({ band, genre }) {
  return (
    <Section>
      {/* ÆNDRING: gjort billede height mindre så man ved der er mere indhold på siden */}
      <div className="h-[400px] full-width">
        {band?.logo && band.logo.includes("https") ? (
          <Image
            src={band.logo}
            alt={`${band.name} playing at a festival`}
            layout="fill"
            className="object-cover h-full pb-3"
          />
        ) : (
          <Image
            src={`https://polarized-chrome-trouser.glitch.me/logos/${
              band?.logo && band.logo.includes(".") ? band.logo : `${band?.logo}.png`
            }`}
            alt={`${band?.name} playing at a festival`}
            layout="fill"
            className="object-cover h-full"
          />
        )}

        <div className="absolute bottom-12 right-12 text-right z-10 text-white">
          <HeroDescription></HeroDescription>
        </div>
      </div>
    </Section>
  );
}
