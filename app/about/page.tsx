import Agents from "@/components/Agents";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative min-w-full h-auto">
        <Image
          src="/header/07.jpg"
          width={1920}
          height={500}
          alt="About"
          className="h-[80vh]"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
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
            <p className="text-gray-700">
              With over 7 years of experience in the real estate market, Divya
              Sshakti Realtor stands out as a trusted name in Nallasopara and
              Umroli East. Our dedicated team has successfully helped over 100
              satisfied customers find their perfect homes, thanks to our deep
              understanding of the local market and our commitment to
              exceptional service. We proudly collaborate with Shreenath
              Enterprises, a leading developer partner, to bring you a wide
              range of high-quality properties that meet your needs and exceed
              your expectations. Whether you&apos;re looking for your first home, an
              investment property, or a new place to settle down, we offer
              personalized solutions tailored to your unique requirements.
              Explore our listings and experience the difference that expertise
              and dedication can make. At Divya Sshakti Realtor, your dream home
              is just a call away.
            </p>
          </div>
        </div>
      </div>
      <Agents />
    </>
  );
};

export default About;
