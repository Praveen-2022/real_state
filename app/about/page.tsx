import Agents from "@/components/Agents";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="relative min-w-full h-[75vh]">
        <Image
          src="/header/corner.jpg"
          width={1920}
          height={500}
          alt="About"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center flex justify-center items-center">
            <Image
              src="/Divya Shakti.png"
              alt="Divya Shakti"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              DIVYA <span className="text-indigo-600">Sshakti Realtors</span>
            </h2>
            <p className="text-gray-700 text-lg tracking-wide">
              With over 7 years of experience in the real estate market, Divya
              Sshakti Realtor stands out as a trusted name in Nallasopara and
              Umroli East. Our dedicated team has successfully helped over 100
              satisfied customers find their perfect homes, thanks to our deep
              understanding of the local market and our commitment to
              exceptional service. We proudly collaborate with Shreenath
              Enterprises, a leading developer partner, to bring you a wide
              range of high-quality properties that meet your needs and exceed
              your expectations. Whether you&apos;re looking for your first
              home, an investment property, or a new place to settle down, we
              offer personalized solutions tailored to your unique requirements.
              Explore our listings and experience the difference that expertise
              and dedication can make. At Divya Sshakti Realtor, your dream home
              is just a call away.
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center mx-2 md:mx-10 my-6">
          <h1 className="text-center font-semibold text-4xl text-slate-800 underline underline-offset-2">
            Our On-Going Projects
          </h1>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
              {/* Child Div 1 */}
              <div className="bg-white p-3 rounded-lg shadow-md text-center w-full h-80">
                <Image
                  src="/header/nagri.jpg" // Replace with your image path
                  alt="Image 1"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-44"
                />
                <h2 className="text-xl font-semibold mt-4 text-gray-800 tracking-wide">
                  Parasnath Nagari
                </h2>
                <p className="text-gray-800 font-semibold mb-4">
                  <IoLocationOutline className="inline-block h-5 w-5 " />
                  Umroli(E), Palghar
                </p>
                <Link
                  className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  href="/properties/parasnath-nagri"
                >
                  More Details
                </Link>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center w-full h-80">
                <Image
                  src="/header/township.jpg" // Replace with your image path
                  alt="Image 1"
                  width={800}
                  height={800}
                  className="rounded-lg object-cover w-full h-44"
                />
                <h2 className="text-xl font-semibold mt-4 text-gray-800 tracking-wide">
                  Parasnath Township
                </h2>
                <p className="text-gray-800 font-semibold mb-4">
                  <IoLocationOutline className="inline-block h-5 w-5 " />
                  Panchali Boisar(W), Palghar
                </p>
                <Link
                  className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  href="/properties/parasnath-township"
                >
                  More Details
                </Link>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center w-full h-80">
                <Image
                  src="/header/garden.jpg" // Replace with your image path
                  alt="Image 1"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-44"
                />
                <h2 className="text-xl font-semibold mt-4 text-gray-800 tracking-wide">
                  Parasnath Garden
                </h2>
                <p className="text-gray-800 font-semibold mb-4">
                  <IoLocationOutline className="inline-block h-5 w-5 " />
                  Umroli(E), Palghar
                </p>
                <Link
                  className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  href="/properties/parasnath-garden"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              href="/properties"
            >
              See All Properties
            </Link>
          </div>
        </section>

      <Agents />
    </>
  );
};

export default About;
