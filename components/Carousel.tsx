// components/Carousel.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define TypeScript interface for slide data
interface Slide {
  src: string;
  alt: string;
  text: string;
  width: number;
  height: number;
}

// Update slides array with width and height
const slides: Slide[] = [
  { src: "/header/01.jpg", alt: "Slide 1", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/02.jpg", alt: "Slide 2", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/03.jpg", alt: "Slide 3", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/04.jpg", alt: "Slide 4", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/05.jpg", alt: "Slide 5", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/06.jpg", alt: "Slide 6", text: "Your Text Here", width: 1920, height: 1080 },
  { src: "/header/07.jpg", alt: "Slide 7", text: "Your Text Here", width: 1920, height: 1080 },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = slides.length;

  const scrollCarousel = (direction: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + totalSlides) % totalSlides
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollCarousel(1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mx-auto h-[92vh]">
      {/* Carousel wrapper */}
      <div className="overflow-hidden relative w-full h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-full h-auto ">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl font-bold">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none max-sm:hidden"
        onClick={() => scrollCarousel(-1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none max-sm:hidden"
        onClick={() => scrollCarousel(1)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
