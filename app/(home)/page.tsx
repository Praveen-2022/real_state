import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import Link from "next/link";
import RandomImage from "@/components/randomImage";
import PopupForm from "@/components/PopupForm";
import { IoLocationOutline } from "react-icons/io5";
export default function Home() {
  return (
    <>
      <div>
        <PopupForm />
      </div>
      <main className="">
        {/* <Carousel /> */}
        <RandomImage />
      </main>
      <div className="bg-[#ffffff]">
        {/* about */}
        <section className="container mx-auto p-4">
          <div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
            <div className="flex flex-col items-center justify-center border shadow-lg rounded-lg bg-[#fffffc] py-6">
              <h1 className="text-center text-6xl font-semibold tracking-tighter text-slate-800">
                <NumberTicker value={150} className="text-slate-800" />+
              </h1>
              <p className="text-center tracking-wider font-bold text-xl py-2 text-slate-900">
                Acres of Land Development
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border shadow-lg rounded-lg bg-[#fffffc]">
              <h1 className="text-center text-6xl font-semibold tracking-tighter text-slate-800">
                <NumberTicker value={5} className="text-slate-800" />
                Mn+
              </h1>
              <p className="text-center tracking-wider font-bold text-xl text-slate-900 py-2">
                Sq Ft of Development
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border shadow-lg rounded-lg bg-[#fffffc]">
              <h1 className="text-center text-6xl font-semibold tracking-tighter text-slate-800 dark:text-white">
                <NumberTicker value={1500} className="text-slate-800" />+
              </h1>
              <p className="text-center tracking-wider font-bold text-lg text-slate-900 py-2">
                Happy Families
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Child Div 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/path/to/image1.jpg" // Replace with your image path
                alt="Image 1"
                width={400}
                height={250}
                className="rounded-t-lg object-cover"
              />
              <h2 className="text-xl font-bold mt-4 text-slate-900">
                Clear Land Title
              </h2>
              <p className="mt-2 text-slate-800 font-semibold tracking-wide">
                Rest assured with Divya Ssakti Realtors clear property titles,
                ensuring transparency and peace of mind for our customers. Each
                project is legally vetted and complies with all regulatory
                requirements, guaranteeing a secure investment in your dream
                home or commercial property.
              </p>
            </div>

            {/* Child Div 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/path/to/image2.jpg" // Replace with your image path
                alt="Image 2"
                width={400}
                height={250}
                className="rounded-t-lg object-cover"
              />
              <h2 className="text-xl font-bold mt-4 text-slate-900">
                Top-Notch Amenities
              </h2>
              <p className="mt-2 text-slate-800 font-semibold tracking-wide">
                At Keshavam Infra, we prioritize your comfort with a range of
                top-notch amenities, including 24/7 security, landscaped
                gardens, clubhouse facilities, and modern infrastructure. Enjoy
                a seamless blend of convenience and luxury in every aspect of
                our projects.
              </p>
            </div>

            {/* Child Div 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/path/to/image3.jpg" // Replace with your image path
                alt="Image 3"
                width={400}
                height={250}
                className="rounded-t-lg object-cover"
              />
              <h2 className="text-xl font-bold mt-4 text-slate-900">
                Premium Living
              </h2>
              <p className="mt-2 text-slate-800 font-semibold tracking-wide">
                Experience premium living with Keshavam Infra, where luxury
                meets comfort in meticulously crafted residential townships and
                gated communities. Our developments offer spacious layouts,
                elegant designs, and a serene environment for a sophisticated
                lifestyle.
              </p>
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
}