import RootLayout from "./layout";
import Hero from "../app/components/Hero.jsx";
import Navigation from "../app/components/Navigation.jsx";
import GuestPassPriceCalculator from "../app/components/GuestPassPriceCalculator.jsx";
import ImageSlider from "@/app/components/ImageSlider";
import HomeAboutUs from "@/app/components/HomeAboutUs";
import HomeAboutCamping from "@/app/components/HomeAboutCamping";

export default function Home() {
  const navItems = [
    {
      href: "/",
      linkText: "Home",
    },
    {
      href: "/program",
      linkText: "Program",
    },
    {
      href: "/book",
      linkText: "Book",
    },
  ];

  return (
    <>
      {" "}
      <Navigation navItems={navItems} />
      <Hero></Hero>
      <HomeAboutUs />
      <HomeAboutCamping />
      <ImageSlider />
    </>
  );
}
