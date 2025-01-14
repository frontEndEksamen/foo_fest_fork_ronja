import Section from "./Section.jsx";
import HeroDescription from "./HeroDescription.jsx";
import Image from "next/image";

export default function Hero({ bandName, genre }) {
  return (
    <Section>
      <div className="relative h-[575px] full-width">
        <div className="absolute h-full w-full inset-0 z-10 bg-black bg-opacity-40"></div>
        <Image
          src="/images/hero/hero_bg.jpg"
          alt="Hero background"
          layout="fill"
          className="object-cover h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white">
          <HeroDescription>
            <h2 className="text-8xl drop-shadow-md">
              Foo<span className="text-orange-300">Fest</span>
            </h2>
          </HeroDescription>
        </div>
      </div>
    </Section>
  );
}
