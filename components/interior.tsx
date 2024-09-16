"use client";
import Image from "next/image";

const Interior: React.FC = () => {
  const images = [
    { src: "/interior/1.jpg", alt: "Image 1", label: "Security Camera" },
    { src: "/interior/2.jpg", alt: "Image 2", label: "Living Room" },
    { src: "/interior/3.jpg", alt: "Image 3", label: "Dining Room" },
    { src: "/interior/4.jpg", alt: "Image 4", label: "Kitchen" },
    { src: "/interior/5.jpg", alt: "Image 5", label: "HighTech Lifts" },
    { src: "/interior/6.jpg", alt: "Image 1", label: "Dining Room" },
    { src: "/interior/7.jpg", alt: "Image 2", label: "Dining Room" },
    { src: "/interior/8.jpg", alt: "Image 3", label: "Living Room" },
    { src: "/interior/9.jpg", alt: "Image 4", label: "Living Room" },
    { src: "/interior/10.jpg", alt: "Image 5", label: "Living Room" },
    { src: "/interior/11.jpg", alt: "Image 1", label: "Dining Room" },
    { src: "/interior/12.jpg", alt: "Image 2", label: "Dining Room" },
    { src: "/interior/13.jpg", alt: "Image 3", label: "Bathroom" },
    { src: "/interior/14.jpg", alt: "Image 4", label: "Bed Room" },
    { src: "/interior/15.jpg", alt: "Image 5", label: "Living Room" },
    { src: "/interior/16.jpg", alt: "Image 1", label: "Bathroom" },
    { src: "/interior/17.jpg", alt: "Image 2", label: "Living Room" },
    { src: "/interior/18.jpg", alt: "Image 3", label: "Dining Room" },
    { src: "/interior/19.jpg", alt: "Image 4", label: "Dining Room" },
    { src: "/interior/20.jpg", alt: "Image 5", label: "Decoration" },
    { src: "/interior/21.jpg", alt: "Image 1", label: "Security Camera" },
    { src: "/interior/22.jpg", alt: "Image 2", label: "Bedroom" },
    { src: "/interior/23.jpg", alt: "Image 3", label: "Living Room" },
    { src: "/interior/24.jpg", alt: "Image 4", label: "Kitchen" }
    // add other images and labels as needed
  ];

  return (
    <div>
      <h1 className="ml-10 text-left font-semibold text-xl">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-72 rounded-lg object-cover"
            />
            <h1 className="px-10 text-xl font-semibold text-gray-600">
              {image.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interior;
