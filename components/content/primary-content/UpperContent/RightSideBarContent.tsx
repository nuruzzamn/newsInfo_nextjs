import Image from "next/image";
import React from "react";
import Border_line from "@/public/Border.jpg";
import UpperTopStories from "./UpperTopStories";
import top_stories_1 from "@/db/top_stories";
import { top_stories_2 } from "@/db/top_stories";
import side_bar_image from "@/public/content/sidebar_img05.jpg";
import BottomTopStories from "./BottomTopStories";
import Calendar from "@/components/icons/Calendar";

const RightSideBarContent: React.FC = () => {
  // console.log("data for top stories", top_stories_2);

  return (
    <div className="px-4 mt-10 border-l-2 border-gray-300">
      {/* Top section: Head line with title and all stories */}
      <div className="-translate-y-[6px]">
        <Image
          src={Border_line}
          alt="Top stories"
          width={290}
          height={5}
          className="w-full"
        />

        <h4 className="text-2xl font-semibold text-custommBlue mt-4">
          Top Stories
        </h4>

        {/* Props drilling for all stories */}
        <div className="mt-5">
          {
            <div>
              {top_stories_1.map((story, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center pb-8 mb-4 ${
                    index !== top_stories_1.length - 1
                      ? "border-b-2 border-gray-300"
                      : ""
                  }`}
                >
                  {/* Left content */}
                  <div className="basis-3/4">
                    <p className="text-base font-bold text-gray-400">
                      {story.title}
                    </p>
                    <p className="text-lg font-bold text-custommBlue mt-1">
                      {story.des}
                    </p>
                    <div className="flex gap-2 items-center mt-1">
                      <Calendar />
                      <p className="text-xs font-thin text-gray-400">
                        {story.date}
                      </p>
                    </div>
                  </div>

                  {/* Right image content */}
                  <div className="basis-1/4 flex justify-center items-center">
                    <Image
                      src={story.Image}
                      alt={story.title}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
        {/* Advisement image  */}
        <div className="flex justify-center">
          <Image
            src={side_bar_image}
            alt="Business"
            width={290}
            height={236}
            className="items-center"
          />
        </div>

        {/* Bottom section: Head line with title and all stories */}

        <Image
          src={Border_line}
          alt="Top stories"
          width={290}
          height={5}
          className="w-full mt-10"
        />

        <h4 className="text-2xl font-semibold text-custommBlue mt-4">
          Top Stories
        </h4>
        {/* Props drilling for all stories */}
        <div className="mb-0 mt-10">
          {top_stories_2.map((data, index) => {
            return (
              <div
                className={`flex top-0 bg-gray-100 p-4  ${
                  index !== top_stories_2.length - 1 ? "mb-1" : ""
                }`}
                key={index}
              >
                {/* Tag: number serial  */}
                <div className="basis-1/6 mt-1">
                  <p className="text-xl font-semibold text-gray-400 text-left">
                    {data.serial_number} .
                  </p>
                </div>

                {/* Tag: description */}
                <div className="flex flex-col justify-start top-0 basis-10/12">
                  <p className="text-lg font-bold text-custommBlue mt-1">
                    {data.title}
                  </p>
                  <div className="flex gap-2 items-center mt-1">
                    <Calendar />
                    <p className="text-xs font-thin text-gray-400">
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSideBarContent;
