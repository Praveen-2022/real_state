// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image";

import { IoLocationOutline } from "react-icons/io5";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <>
      <main className="">
        <Carousel />
      </main>

      {/* <section className="bg-slate-50 pt-10">
        <h1 className="text-center text-3xl font-semibold">
          Featured Properties
        </h1>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>
        <div className="px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden p-2 bg-white">
            <Image
              src="/1.jpg"
              width={500}
              height={500}
              alt="freatured image"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-3 flex gap-x-2">
              <div className="text-base font-bold text-slate-800">
                {" "}
                <h1>Skyper Pool Apartment</h1>
              </div>
              <div className="flex-end ml-28 font-bold text-orange-800">
                <p>₹25 lakh</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700 gap-1 text-base font-semibold max-w-[260px]">
              <IoLocationOutline /> Ghazipur
            </div>
            <div className="flex gap-x-4 my-4 font-semibold text-sm">
              <div className="flex items-center text-gray-700 gap-1">
                <BiBed /> 4 Beds
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiBath /> 2 Baths
              </div>

              <div className="flex items-center text-gray-700 gap-1">
                <BiArea /> 450 sqft
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            See All Properties
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </section> */}

      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Child Div 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/path/to/image1.jpg" // Replace with your image path
              alt="Image 1"
              width={400}
              height={250}
              className="rounded-t-lg object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Clear Land Title</h2>
            <p className="mt-2 text-gray-600">
              Rest assured with Keshavam Infra's clear property titles, ensuring
              transparency and peace of mind for our customers. Each project is
              legally vetted and complies with all regulatory requirements,
              guaranteeing a secure investment in your dream home or commercial
              property.
            </p>
          </div>

          {/* Child Div 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/path/to/image2.jpg" // Replace with your image path
              alt="Image 2"
              width={400}
              height={250}
              className="rounded-t-lg object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Top-Notch Amenities</h2>
            <p className="mt-2 text-gray-600">
              At Keshavam Infra, we prioritize your comfort with a range of
              top-notch amenities, including 24/7 security, landscaped gardens,
              clubhouse facilities, and modern infrastructure. Enjoy a seamless
              blend of convenience and luxury in every aspect of our projects.
            </p>
          </div>

          {/* Child Div 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/path/to/image3.jpg" // Replace with your image path
              alt="Image 3"
              width={400}
              height={250}
              className="rounded-t-lg object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Premium Living</h2>
            <p className="mt-2 text-gray-600">
              Experience premium living with Keshavam Infra, where luxury meets
              comfort in meticulously crafted residential townships and gated
              communities. Our developments offer spacious layouts, elegant
              designs, and a serene environment for a sophisticated lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-center">Our Distinguished Projects</h1>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Child Div 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/1.jpg" // Replace with your image path
                alt="Image 1"
                width={400}
                height={250}
                className="rounded-lg object-cover mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">
                Divya Shakti Nagari
              </h2>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                More Details
              </button>
            </div>

            {/* Child Div 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/1.jpg" // Replace with your image path
                alt="Image 2"
                width={400}
                height={250}
                className="rounded-lg object-cover mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">
                Divya Shakti Garden
              </h2>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                More Details
              </button>
            </div>

            {/* Child Div 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/1.jpg" // Replace with your image path
                alt="Image 3"
                width={400}
                height={250}
                className="rounded-lg object-cover mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">
                Divya Shakti Township
              </h2>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                More Details
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="border">See All Projects</button>
        </div>
      </section>

    </>
  );
}
