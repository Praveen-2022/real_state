import Image from "next/image";
import Link from "next/link";
import { BsBuildings } from "react-icons/bs";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";

interface SectionProps {
  imageSrc: string;
  heading: string;
  text1: string;
  reverse?: boolean;
}

const sections: SectionProps[] = [
  {
    imageSrc: "/header/06.jpg",
    heading: "Divya Shakti Nagari",
    text1: "Subject to inventory availability*",
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Divya Shakti Township",
    text1: "Subject to inventory availability*",
    reverse: true,
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Divya Shakti Garden",
    text1: "Subject to inventory availability*",
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Divya Shakti Corner",
    text1: "Subject to inventory availability*",
    reverse: true,
  },
];

const Section: React.FC<SectionProps> = ({
  imageSrc,
  heading,
  text1,
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
        <p className="text-sm md:text-base text-center mb-4">{text1}</p>

        {/* Info Div */}
        <div className="flex w-full justify-around h-auto my-6">
          {/* Project Size */}
          <div className="flex items-center">
            <BsBuildings className="w-10 h-10 md:w-14 md:h-14 text-blue-800" />
            <div className="ml-2">
              <p className="font-semibold text-base md:text-lg">50 Acres</p>
              <p className="text-xs md:text-sm">Project Size</p>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center">
            <IoBedOutline className="w-10 h-10 md:w-14 md:h-14 text-blue-800" />
            <div className="ml-2">
              <p className="font-semibold text-base md:text-lg">3-5 BHK</p>
              <p className="text-xs md:text-sm">Bedrooms</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <IoLocationOutline className="w-10 h-10 md:w-14 md:h-14 text-blue-800" />
            <div className="ml-2">
              <p className="font-semibold text-base md:text-lg">Mumbai</p>
              <p className="text-xs md:text-sm">Location</p>
            </div>
          </div>
        </div>

        <Link href="/properties/1">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Read More
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
          src="/header/04.jpg"
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
