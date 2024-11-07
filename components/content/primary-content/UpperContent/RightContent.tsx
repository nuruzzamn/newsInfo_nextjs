import React from "react";
import Image from "next/image";
import main_hero_content_img from "@/public/main-hero-content-img.jpg";
import sign_icon from "@/public/sign_icon.jpg";
import time_icon from "@/public/time_icon.jpg";
import calendar_icon from "@/public/calendar_icon.jpg";

const RightContent = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-0 pr-4 pl-4 pb-0">
      <Image
        src={main_hero_content_img}
        alt="Banner image"
        width={630}
        height={450}
        className="w-full"
      />

      <button className="w-20 h-6 bg-transparent border border-gray-300 rounded my-6">
        Politics
      </button>

      <p className="text-3xl font-semibold text-custommBlue text-center">
        Beyond Algorithms Skills Of Designers That AI Can’t Replicate
      </p>

      {/* row for admin calendar time  */}
      <div className="flex justify-center items-center gap-2 my-4">
        {/* code for sign in icon and admin  */}
        <div className="flex items-center gap-1">
          <Image
            src={sign_icon} // Can be a local file in the `public` folder or an external URL
            alt="logo"
            width={16} // Set the width
            height={16} // Set the height
            priority // Optional: load the image with higher priority (recommended for above-the-fold images)
          />

          <p className="text-xs text-gray-500">By Admin</p>
        </div>
        {/* code for calendar data and icon  */}
        <div className="flex justify-center items-center gap-1">
          <Image
            src={calendar_icon} // Can be a local file in the `public` folder or an external URL
            alt="logo"
            width={16} // Set the width
            height={16} // Set the height
            priority // Optional: load the image with higher priority (recommended for above-the-fold images)
          />

          <p className="text-xs text-gray-500 items-center">27 August, 2024</p>
        </div>

        {/* code for time and icon  */}
        <div className="flex justify-center items-center gap-1">
          <Image
            src={time_icon} // Can be a local file in the `public` folder or an external URL
            alt="logo"
            width={16} // Set the width
            height={16} // Set the height
            priority // Optional: load the image with higher priority (recommended for above-the-fold images)
          />

          <p className="text-xs text-gray-500 items-center">20 MINS</p>
        </div>
      </div>

      {/* bottom description  */}
      <div>
        <p className="text-sm text-gray-500 text-center">
          Browned butter and brown sugar caramelly goodness, crispy edgend
          software centers and melty little puddles of chocolate first favorite.
        </p>
      </div>
    </div>
  );
};

export default RightContent;
