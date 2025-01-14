"use client";

import { useState } from "react";

import Section from "./Section.jsx";
import Header from "./Header.jsx";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const slides = [
    {
      backgroundColor: "#333",
      bandImage: "/images/band_images/band_1.jpg",
      bandName: "Band 1",
    },
    {
      backgroundColor: "#000",
      bandImage: "/images/band_images/band_2.jpg",
      bandName: "Band 2",
    },
    {
      backgroundColor: "#adadad",
      bandImage: "/images/band_images/band_3.jpg",
      bandName: "Band 3",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Section>
      <Header>
        <h2 className="text-center pt-12">Gallery</h2>
      </Header>

      <div className="mx-auto flex flex-col items-center min-w-[600px] max-w-[85%] rounded-3xl ">
        <div className="slides-container min-w-[375px] w-full max-w-[90%] h-[500px] mt-4 border-2 border-orange-400 rounded-3xl ">
          <article
            style={{
              backgroundImage: `url(${slides[currentIndex].bandImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[100%] w-[100%] duration-500 slide rounded-3xl"
          ></article>
        </div>
        <div className="flex justify-center items-center gap-7 mt-6 w-full">
          <button
            className=" flex items-center justify-center bg-body-background-color border-2 border-orange-300 text-orange-300 h-[40px] w-[40px] rounded-full shadow-md transition-all duration-150 hover:bg-orange-300 hover:text-white active:shadow-none"
            onClick={prevSlide}
          >
            <FaArrowLeftLong />
          </button>
          <button
            className=" flex items-center justify-center bg-body-background-color border-2 border-orange-300 text-orange-300 h-[40px] w-[40px] rounded-full shadow-md transition-all duration-150 hover:bg-orange-300 hover:text-white active:shadow-none"
            onClick={nextSlide}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </Section>
  );
}
