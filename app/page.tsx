// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image";

import { IoLocationOutline } from "react-icons/io5";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
export default function Home() {
  return (
    <>
      {/* <header className="w-full min-h-screen overflow-hidden bg-image bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-10">
          <div className="border-2 border-green-600 text-white">
            <h1>Welcome to Divya Shakti</h1>
            <h1>Manage Your Property</h1>
            <p>You will have everything nearby D-mart  supermarket,buses, stations,cinemas,theatres,the friendly neighbourhood etc.</p>
         <h1>Our Locations :</h1>
          </div>

          <div className="">
            <Image
              // fill
              src="/test2.jpeg"
              alt="header image"
              width={750}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
      </header> */}
      <header className="relative bg-[url('/test3.jpg')] bg-cover bg-center h-screen">
  {/* Overlay for opacity */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  {/* Content inside the header */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-white text-4xl font-bold">Your Header Content</h1>
  </div>
</header>


      <section className="bg-slate-50 pt-10">
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
      </section>

      <section className="bg-slate-50 pt-10">
        <h1 className="text-center text-3xl font-semibold">
          Find Properties in These Cities
        </h1>
        <p className="text-center">Lorem ipsum dolor sit amet.</p>
        <div className="px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-96 max-w-sm">
            <Image
              src="/2.jpg"
              width={400}
              height={400}
              alt="University of Southern California"
              className="absolute inset-0 h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="z-10 pl-6 pb-6">
              <h3 className="text-3xl font-bold text-white">Paris</h3>
              <p className="text-sm leading-6 text-gray-300">City of love</p>
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-96 max-w-sm">
            <Image
              src="/2.jpg"
              width={400}
              height={400}
              alt="University of Southern California"
              className="absolute inset-0 h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="z-10 pl-6 pb-6">
              <h3 className="text-3xl font-bold text-white">Paris</h3>
              <p className="text-sm leading-6 text-gray-300">City of love</p>
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-96 max-w-sm">
            <Image
              src="/2.jpg"
              width={400}
              height={400}
              alt="University of Southern California"
              className="absolute inset-0 h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="z-10 pl-6 pb-6">
              <h3 className="text-3xl font-bold text-white">Paris</h3>
              <p className="text-sm leading-6 text-gray-300">City of love</p>
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-96 max-w-sm">
            <Image
              src="/2.jpg"
              width={400}
              height={400}
              alt="University of Southern California"
              className="absolute inset-0 h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="z-10 pl-6 pb-6">
              <h3 className="text-3xl font-bold text-white">Paris</h3>
              <p className="text-sm leading-6 text-gray-300">City of love</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
