"use client"
import Image from 'next/image';
import React from 'react';

const images = [
  '/header/corner.jpg',
  '/header/garden.jpg',
  '/header/nagari.jpg',
  '/header/township.jpg',
];

const texts = [
  {
    title: 'Parasnath Corner',
    subtitle: 'Eco-luxe Residences',
    description: 'Umroli(E), Palghar | Starting from 13 lakh* | 1RK, 1BHK, 2BHK, & SHOPS',
  },
  {
    title: 'Parasnath Garden',
    subtitle: 'Luxury Apartments',
    description: 'Vasai(W), Mumbai | Starting from 15 lakh* | 2BHK & 3BHK',
  },
  {
    title: 'Parasnath Nagari',
    subtitle: 'Affordable Housing',
    description: 'Boisar, Palghar | Starting from 10 lakh* | 1BHK & SHOPS',
  },
  {
    title: 'Parasnath Township',
    subtitle: 'Community Living',
    description: 'Virar(E), Mumbai | Starting from 18 lakh* | 2BHK & 3BHK Villas',
  },
];

const getRandomImageAndText = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return { image: images[randomIndex], text: texts[randomIndex] };
};

const RandomImage = () => {
  const [content, setContent] = React.useState({ image: '', text: { title: '', subtitle: '', description: '' } });

  React.useEffect(() => {
    setContent(getRandomImageAndText());
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden flex items-end justify-start">
      {content.image && (
        <>
          {/* High-quality image */}
          <Image
            src={content.image}
            alt="Random"
            width={1500} // High resolution
            height={1500} // High resolution
            quality={100} // Highest quality for the image
            priority // Load with high priority for faster rendering
            className="object-cover w-full h-full zoom-in-out"
          />
          
          {/* Dark overlay only on image */}
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-800 opacity-40"></div>

          {/* Text over the image */}
          <div className="absolute z-10 text-white px-4 mb-10">
            <h1 className='text-3xl font-semibold'>{content.text.title}</h1>
            <p className='font-semibold'>{content.text.subtitle}</p>
            <p>{content.text.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomImage;
