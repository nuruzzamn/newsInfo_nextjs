import DownArrow from "@/components/icons/DownArrow";
import Line3 from "@/components/icons/Line3";
import Search from "@/components/icons/Search";
import React from "react";

const NavBottom = () => {
  return (
    <div className="flex ">
      {/* left section with 25% */}
      <div className="flex basis-1/4 justify-start pl-2">
        <div className="border-l-2 border-gray-300 h-full"></div>

        <Line3 />
        <div className="border-l-2 border-gray-300 h-full"></div>
      </div>

      {/* middle section 50% */}
      <div className="flex basis-2/4 justify-center items-center gap-10">
        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-xs font-thin">Home</p>
          <div className="mt-[2px]">
            <DownArrow />
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-xs font-thin">About us</p>
        </div>

        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-xs font-thin">Features</p>
          <div className="mt-[2px]">
            <DownArrow />
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-xs font-thin">Categories</p>
          <div className="mt-[2px]">
            <DownArrow />
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-xs font-thin">Contact</p>
        </div>
      </div>

      {/* right section 25% */}
      <div className="flex basis-1/4 justify-end">
        <div className="flex items-center justify-center w-full gap-14">
          <p className="mr-2 text-gray-400 text-xs font-thin">
            Search here ...
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
