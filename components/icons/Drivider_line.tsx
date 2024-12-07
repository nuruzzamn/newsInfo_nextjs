import React from "react";
// import drivider_line from "@/public/drivider_line.svg";

const Drivider_line = () => {
  return (
    <div>
      <svg
        width="290"
        height="7"
        viewBox="0 0 290 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_4_4791" fill="white">
          <path d="M0 1H290V6H0V1Z" />
        </mask>
        <path
          d="M0 2H290V0H0V2ZM290 5H0V7H290V5Z"
          fill="#DFDFDF"
          mask="url(#path-1-inside-1_4_4791)"
        />
        <rect y="1" width="40" height="5" fill="#F4796C" />
        <mask
          id="mask0_4_4791"
          //   style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="36"
          y="0"
          width="10"
          height="7"
        >
          <g clipPath="url(#clip0_4_4791)">
            <path d="M40 0.5H46L42 6.5H36L40 0.5Z" fill="black" />
          </g>
        </mask>
        <g mask="url(#mask0_4_4791)">
          <rect x="36" y="0.5" width="10" height="6" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_4_4791">
            <rect
              width="10"
              height="6"
              fill="white"
              transform="translate(36 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Drivider_line;
