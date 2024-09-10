// app/components/Carousel.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: '/images/slide1.jpg', // Replace with your local image or a public URL
      alt: 'Slide 1',
    },
    {
      id: 2,
      src: '/images/slide2.jpg',
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: '/images/slide3.jpg',
      alt: 'Slide 3',
    },
  ];

  const scrollCarousel = (direction: number) => {
    const totalSlides = slides.length;
    setCurrentIndex((currentIndex + direction + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden relative rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full">
                {/* Using Next.js Image Component */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
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
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
