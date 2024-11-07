import Image from "next/image";
import React from "react";
import Border_line from "@/public/Border.jpg";
import UpperTopStories from "./UpperTopStories";

const RightSideBarContent = () => {
  return (
    <div className="px-4 mt-10 border-l-2 border-gray-300 h-full ">
      {/* Content inside the sidebar */}
      <div className="-translate-y-[6px]">
        <Image
          src={Border_line}
          alt="Business"
          width={290}
          height={5}
          className="w-full"
        />

        <h4 className="text-2xl font-semibold text-custommBlue mt-4">
          Top Stories
        </h4>

        {/* upper top Stories different components */}
        <div className="mt-5">
          <UpperTopStories />
        </div>
      </div>
    </div>
  );
};

export default RightSideBarContent;
