import Calendar from "@/components/icons/Calendar";
import React from "react";
import { Story_2 } from "@/db/top_stories";

interface BottomTopStories {
  stories_2: Story_2[];
}

const BottomTopStories = ({ stories_2 }) => {
  console.log("from bottom stories", stories_2[0].serial_number);
  return (
    <div className="">
      {stories_2.map((data, index) => {
        return (
          <div
            className={`flex top-0 bg-gray-100 p-4  ${
              index !== stories_2.length - 1 ? "mb-1" : ""
            }`}
            key={index}
          >
            {/* number serial 20%  */}
            <div className="basis-1/6 mt-1">
              <p className="text-xl font-semibold text-gray-400 text-left">
                {data.serial_number} .
              </p>
            </div>

            {/* for description 80% */}
            <div className="flex flex-col justify-start top-0 basis-10/12">
              <p className="text-lg font-bold text-custommBlue mt-1">
                {data.title}
              </p>
              <div className="flex gap-2 items-center mt-1">
                <Calendar />
                <p className="text-xs font-thin text-gray-400">{data.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomTopStories;
