"use client"
import Image from 'next/image';
import React from 'react';

const images = [
  '/header/01.jpg',
  '/header/02.jpg',
  '/header/03.jpg',
  // Add more images as needed
];

const texts = [
  'Inspiring Quote 1',
  'Inspiring Quote 2',
  'Inspiring Quote 3',
  // Add more texts as needed
];

const getRandomImageAndText = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return { image: images[randomIndex], text: texts[randomIndex] };
};

const RandomImage = () => {
  const [content, setContent] = React.useState({ image: '', text: '' });

  React.useEffect(() => {
    setContent(getRandomImageAndText());
  }, []);

  return (
<div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
  {content.image && (
    <>
      {/* High-quality image */}
      <Image
        src={content.image}
        alt="Random"
        width={2000} // High resolution
        height={2000} // High resolution
        quality={100} // Highest quality for the image
        priority // Load with high priority for faster rendering
        className="object-cover w-full h-full"
      />
      
      {/* Dark overlay only on image */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Text over the image */}
      <div className="absolute z-10 text-white text-xl md:text-3xl font-bold text-center px-4">
        {content.text}
      </div>
    </>
  )}
</div>

  );
};

export default RandomImage;
