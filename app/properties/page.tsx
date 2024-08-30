import Image from "next/image";
import Link from "next/link";

interface SectionProps {
  imageSrc: string;
  heading: string;
  text1: string;
  text2: string;
  reverse?: boolean;
}

const sections: SectionProps[] = [
  {
    imageSrc: "/header/06.jpg",
    heading: "Your Heading Here",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Your Heading Here",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reverse: true,
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Your Heading Here",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSrc: "/header/06.jpg",
    heading: "Your Heading Here",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reverse: true,
  },
  // Add more sections as needed
];

const Section: React.FC<SectionProps> = ({
  imageSrc,
  heading,
  text1,
  text2,
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
          className="object-cover h-80"
        />
      </div>
      {/* Text Div */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-6">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-base mb-4 text-center">{text1}</p>
        <p className="text-base mb-4 text-center">{text2}</p>
        <Link href="/properties/1">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
      <div className="relative min-w-full h-auto">
        <Image
          src="/header/04.jpg"
          width={1920}
          height={500}
          alt="About"
          className="h-[80vh]"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Sections */}
      <div className="mx-20">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default Properties;
