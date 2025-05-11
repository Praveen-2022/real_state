'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    src: '/header/corner2.png',
    alt: 'Modern Architecture',
    title: 'Parasnath Corner',
    description: 'Stylish, Comfortable Living For those who want a stylish and comfortable home.',
    buttonText: 'Learn More',
  },
  {
    src: '/header/garden.jpg',
    alt: 'Urban Living',
    title: 'Parasnath Garden',
    description: 'A Peaceful, Green Living Space, If yo love nature and calm surroundings.',
    buttonText: 'View Projects',
  },
  {
    src: '/header/nagari.jpg',
    alt: 'Sustainable Spaces',
    title: 'Parasnath Nagari',
    description: 'A Modern, Vibrant Community, Parasnath Nagari is perfect for those who want a lively community with all the modern amenities.',
    buttonText: 'See More',
  },
  {
    src: '/header/township.jpg',
    alt: 'Sustainable Spaces',
    title: 'Sustainable Spaces',
    description: 'Everything you need in One Place Parasnath Township is a complete community offering everything for a comfortable life.',
    buttonText: 'See More',
  },
];


export default function SwiperCarousel() {
  return (
<div className="w-full mx-auto h-full">
<Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="overflow-hidden"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="relative z-0 w-full h-[760px] md:h-[620px]">
        {/* Background Image */}
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover z-0"
          priority={index === 0}
        />

        {/* Opacity layer */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-12 text-white z-20">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">{slide.title}</h2>
            <p className="text-md md:text-lg mb-4">{slide.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
              {slide.buttonText}
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</div>
  );
}
