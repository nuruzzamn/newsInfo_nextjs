import React from "react";
import Calendar from "@/components/icons/Calendar";
import Image from "next/image";
import { Story } from "@/db/top_stories";

interface UpperTopStoriesProps {
  stories_1: Story[];
}

const UpperTopStories: React.FC<UpperTopStoriesProps> = ({ stories_1 }) => {
  return (
    // <div className="flex justify-center items-center border-b-2 border-gray-300 pb-8">
    //   {/* left content  */}
    //   <div className="basis-3/4 ">
    //     <p className="text-base font-bold text-gray-400">Politics</p>
    //     <p className="text-lg font-bold text-custommBlue mt-1">
    //       Lessons Learned As A Designer-Founder
    //     </p>

    //     <div className="flex gap-2 items-center mt-1">
    //       <Calendar />
    //       <p className="text-xs font-thin text-gray-400">27 August, 2024</p>
    //     </div>
    //   </div>

    //   {/* right image content  */}
    //   <div className="basis-1/4 justify-center items-center ">
    //     <Image
    //       src={stories_post_1}
    //       alt="Business"
    //       width={150}
    //       height={150}
    //       className="rounded-full"
    //     />
    //   </div>

    //   <div className="border "></div>
    // </div>
    <>
      <div>
        {stories_1.map((story, index) => (
          <div
            key={index}
            className={`flex justify-center items-center pb-8 mb-4 ${
              index !== stories_1.length - 1 ? "border-b-2 border-gray-300" : ""
            }`}
          >
            {/* Left content */}
            <div className="basis-3/4">
              <p className="text-base font-bold text-gray-400">{story.title}</p>
              <p className="text-lg font-bold text-custommBlue mt-1">
                {story.des}
              </p>
              <div className="flex gap-2 items-center mt-1">
                <Calendar />
                <p className="text-xs font-thin text-gray-400">{story.date}</p>
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
    </>
  );
};

export default UpperTopStories;
