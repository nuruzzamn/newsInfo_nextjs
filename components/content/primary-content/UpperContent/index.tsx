import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import RightSideBarContent from "./RightSideBarContent";

const UpperContent = () => {
  return (
    <>
      {/* main content  */}
      <div className="flex">
        {/* Left hero content 75% */}
        <div className="basis-3/4 flex mb-4">
          {/* Left hero content */}
          <div className="basis-2/6 flex flex-col">
            <LeftContent />
          </div>
          {/* Vertical Divider */}
          <div className="border-r-2 border-gray-300 h-full"></div>

          {/* Right hero content   */}
          <div className="basis-2/3">
            <RightContent />
          </div>
        </div>

        {/* Right right sidebar content 25% */}
        <div className="basis-1/4">
          <RightSideBarContent />
        </div>
      </div>
    </>
  );
};

export default UpperContent;
