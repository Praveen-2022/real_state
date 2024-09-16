import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";

import { LuBoxSelect } from "react-icons/lu";
import Interior from "@/components/interior";
import QueryForm from "@/components/QueryForm";

const ProjectOne = () => {
  return (
    <>
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/header/corner.jpg"
          alt="Static Image"
          width={2000}
          height={2000}
          quality={100}
          priority
          className="object-cover w-full h-full"
        />

        {/* Dark overlay only on image */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        {/* Static text over the image */}
        <div className="absolute z-10 text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-center px-4">
          Parasnath Corner
        </div>
      </div>
      <div className="my-6">
        <h1 className="text-center font-bold text-xl text-gray-700">
          Welcome to Parasnath Corner
        </h1>
        <h1 className="text-center text-gray-600 mt-2">
          Located in Takli, Mihan - 500 meters from Nagpur&apos;s bustling
          technological hub, Keshavam City 7 offers proximity to major MNCs and
          prestigious institutions such as TCS, Boeing, AIIMS, Pantanjali, IIM,
          and Godrej. This prime location has been the cornerstone of our
          success, with over 60 acres dedicated to multiple projects that have
          delivered exceptional returns to our clients.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-3 mx-4 md:mx-20 lg:mx-28 md:grid-cols-3 my-6">
        <div className="flex border shadow-md flex-col md:flex-row py-3 justify-center items-center rounded">
          <div>
            <IoLocationOutline className="h-10 w-10 text-gray-700" />
          </div>
          <div>
            <div className="">
              <h1 className="text-center text-gray-800">location</h1>
            </div>
            <div>
              <h1 className="text-xl text-center font-semibold text-gray-800">
                Mumbai
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border shadow-md flex-col md:flex-row py-3 justify-center items-center rounded">
          <div>
            <LuBoxSelect className="h-10 w-10 text-gray-700" />
          </div>
          <div>
            <div className="">
              <h1 className="text-center text-gray-800">Project size</h1>
            </div>
            <div>
              <h1 className="text-xl text-center font-semibold text-gray-800">
                10 Acres
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border shadow-md flex-col md:flex-row py-3 justify-center items-center rounded">
          <div>
            <AiOutlineTool className="h-10 w-10 text-gray-700 " />
          </div>
          <div>
            <div className="">
              <h1 className="text-center text-gray-800">RERA No.</h1>
            </div>
            <div>
              <h1 className="text-xl text-center font-semibold text-gray-800 uppercase">
                P897hdu4
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Interior />
      </div>

      <div>
        <QueryForm/>
      </div>
    </>
  );
};

export default ProjectOne;
