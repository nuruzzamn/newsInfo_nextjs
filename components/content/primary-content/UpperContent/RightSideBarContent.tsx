import Image from "next/image";
import React from "react";
import Border_line from "@/public/Border.jpg";
import UpperTopStories from "./UpperTopStories";
import top_stories_1 from "@/db/top_stories";
import { top_stories_2 } from "@/db/top_stories";
import side_bar_image from "@/public/content/sidebar_img05.jpg";
import BottomTopStories from "./BottomTopStories";

const RightSideBarContent: React.FC = () => {
  // console.log("data for top stories", top_stories_2);

  return (
    <div className="px-4 mt-10 border-l-2 border-gray-300">
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
          <UpperTopStories stories_1={top_stories_1} />
        </div>

        <div className="flex justify-center">
          <Image
            src={side_bar_image}
            alt="Business"
            width={290}
            height={236}
            className="items-center"
          />
        </div>

        <Image
          src={Border_line}
          alt="Business"
          width={290}
          height={5}
          className="w-full mt-10"
        />

        <h4 className="text-2xl font-semibold text-custommBlue mt-4">
          Top Stories
        </h4>

        <div className="mb-0 mt-10">
          <BottomTopStories stories_2={top_stories_2} />
        </div>
      </div>

      <div>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </div>
    </div>
  );
};

export default RightSideBarContent;
