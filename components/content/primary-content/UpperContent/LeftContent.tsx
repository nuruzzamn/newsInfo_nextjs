import React from "react";
import Image from "next/image";
import content_business_image from "@/public/content-business.jpg";
import content_tech_image from "@/public/content-tech.jpg";
import Signin from "@/components/icons/Signin";
import Calendar from "@/components/icons/Calendar";

const LeftContent = () => {
  return (
    <>
      <div className="pt-0 pl-4 pr-4 pb-0">
        {/* business content */}
        <div className="">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={content_business_image}
              alt="Business"
              width={288}
              height={180}
              className="w-full"
            />
            <div className="p-4">
              <p className="text-xs font-bold text-gray-400">Business</p>
              <h1 className="text-sm font-thin text-gray-600 mt-2">
                A Pragmatist’s Guide To Their Lean User Research
              </h1>

              {/* bottom admin and date icon row */}
              <div className="flex justify-start gap-3 mt-2">
                {/* for admin icon */}
                <div className="flex items-center gap-1">
                  <Signin />
                  <p className="text-xs text-gray-500">By Admin</p>
                </div>

                {/* for date icon */}
                <div className="flex items-center gap-2">
                  <Calendar />
                  <p className="text-xs text-gray-500">November 5, 2024</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 h-full"></div>
          </div>
        </div>

        <div className="border border-gray-300 w-full my-4"></div>

        {/* tech content */}
        <div className="">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={content_tech_image}
              alt="Tech"
              width={288}
              height={180}
              className="w-full"
            />
            <div className="p-4">
              <p className="text-xs font-bold text-gray-400">Tech</p>
              <h1 className="text-sm font-thin text-gray-600 mt-2">
                Five Data-Loading Patterns To Boost Web Performance
              </h1>

              {/* bottom admin and date icon row */}
              <div className="flex justify-start gap-3 mt-2">
                {/* for admin icon */}
                <div className="flex items-center gap-1">
                  <Signin />
                  <p className="text-xs text-gray-500">By Admin</p>
                </div>

                {/* for date icon */}
                <div className="flex items-center gap-2">
                  <Calendar />
                  <p className="text-xs text-gray-500">July 5, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
