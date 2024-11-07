import React from "react";
import Calendar from "@/components/icons/Calendar";
import Image from "next/image";
import stories_post_1 from "@/public/content/stories/stories_post01.jpg";

const UpperTopStories = () => {
  return (
    <div className="flex justify-center items-center border-b-2 border-gray-300 pb-8">
      {/* left content  */}
      <div className="basis-3/4 ">
        <p className="text-base font-bold text-gray-400">Politics</p>
        <p className="text-lg font-bold text-custommBlue mt-1">
          Lessons Learned As A Designer-Founder
        </p>

        <div className="flex gap-2 items-center mt-1">
          <Calendar />
          <p className="text-xs font-thin text-gray-400">27 August, 2024</p>
        </div>
      </div>

      {/* right image content  */}
      <div className="basis-1/4 justify-center items-center ">
        <Image
          src={stories_post_1}
          alt="Business"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <div className="border "></div>
    </div>
  );
};

export default UpperTopStories;
