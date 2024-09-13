// components/SimpleCarousel.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

const Interior: React.FC = () => {
  const images = [
    { src: "/interior/1.jpg", alt: "Image 1" },
    { src: "/interior/2.jpg", alt: "Image 1" },
    { src: "/interior/3.jpg", alt: "Image 1" },
    { src: "/interior/4.jpg", alt: "Image 1" },
    { src: "/interior/5.jpg", alt: "Image 1" },
    { src: "/interior/6.jpg", alt: "Image 1" },
    { src: "/interior/7.jpg", alt: "Image 1" },
    { src: "/interior/8.jpg", alt: "Image 1" },
    { src: "/interior/9.jpg", alt: "Image 1" },
    { src: "/interior/10.jpg", alt: "Image 1" },
    { src: "/interior/11.jpg", alt: "Image 1" },
    { src: "/interior/12.jpg", alt: "Image 1" },
    { src: "/interior/13.jpg", alt: "Image 1" },
    { src: "/interior/14.jpg", alt: "Image 1" },
    { src: "/interior/15.jpg", alt: "Image 1" },
    { src: "/interior/16.jpg", alt: "Image 1" },
    { src: "/interior/17.jpg", alt: "Image 1" },
    { src: "/interior/18.jpg", alt: "Image 1" },
    { src: "/interior/19.jpg", alt: "Image 1" },
    { src: "/interior/20.jpg", alt: "Image 1" },
    { src: "/interior/21.jpg", alt: "Image 1" },
    { src: "/interior/22.jpg", alt: "Image 1" },
    { src: "/interior/23.jpg", alt: "Image 1" },
    { src: "/interior/24.jpg", alt: "Image 1" },
    { src: "/interior/25.jpg", alt: "Image 1" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="relative h-64 w-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Image indicators */}
      {/* <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Interior;
