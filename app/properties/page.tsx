import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

interface SectionProps {
  imageSrc: string;
  heading: string;
  text1: string;
  location: string;
  reverse?: boolean;
  href:string;
}

const sections: SectionProps[] = [
  {
    imageSrc: "/header/nagari.jpg",
    heading: "Parasnath Nagari",
    location: "Umroli(E), Palghar",
    text1: "Subject to inventory availability*",
    href: "/properties/parasnath-nagari",
  },
  {
    imageSrc: "/header/township.jpg",
    heading: "Parasnath Township",
    location: "Panchali Boisar(W), Palghar",
    text1: "Subject to inventory availability*",
    reverse: true,
    href: "/properties/parasnath-township",
  },
  {
    imageSrc: "/header/garden.jpg",
    heading: "Parasnath Garden",
    location: "Umroli(E), Palghar",
    text1: "Subject to inventory availability*",
    href: "/properties/parasnath-garden",
  },
  {
    imageSrc: "/header/corner.jpg",
    heading: "Parasnath Corner",
    location: "Umroli(E), Palghar",
    text1: "Subject to inventory availability*",
    reverse: true,
    href: "/properties/parasnath-corner",
  },
];


const Section: React.FC<SectionProps> = ({
  imageSrc,
  heading,
  text1,
  location,
  href,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full h-full border shadow-lg mt-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Div */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={heading}
          width={900}
          height={900}
          className="object-cover h-60 md:h-80 w-full"
        />
      </div>
      {/* Text Div */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-4 py-6 md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          {heading}
        </h2>
        <p className="text-sm text-center mb-1">{text1}</p>

        {/* Info Div */}
        <div className="flex w-full justify-center h-auto my-3">
          {/* Location */}
          <div className="flex items-center">
            <IoLocationOutline className="w-10 h-10 md:w-12 md:h-12 text-gray-800" />
            <div className="ml-2">
              <p className="font-semibold text-base md:text-lg">{location}</p>
              <p className="text-xs md:text-sm">Location</p>
            </div>
          </div>
        </div>

        <Link href={href}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const Properties: React.FC = () => {
  return (
    <>
      {/* Header Image with Overlay */}
      <div className="relative min-w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/header/corner.jpg"
          layout="fill"
          objectFit="cover"
          alt="About"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Sections */}
      <div className="px-4 md:px-20 py-8">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default Properties;
