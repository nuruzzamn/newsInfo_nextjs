import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import Calendar from "@/components/icons/Calendar";
import Signin from "@/components/icons/Signin";

const NavMiddle = () => {
  return (
    <div className="flex h-32 items-center">
      <div className="flex basis-2/4 justify-start items-center gap-3">
        <Calendar />
        <p className="text-xs font-thin text-gray-400">November 4, 2024</p>
        <Image
          src={logo} // Can be a local file in the `public` folder or an external URL
          alt="logo"
          width={171} // Set the width
          height={50} // Set the height
          priority // Optional: load the image with higher priority (recommended for above-the-fold images)
        />
      </div>

      <div className="flex basis-2/4 justify-between">
        <div className="flex gap-2 basis-2/4 items-center">
          <Signin />
          <Link href="/">
            <p className="text-xs font-thin text-gray-400 hover:text-black">
              Sign in
            </p>
          </Link>
        </div>

        <div className="flex items-center basis-2/4 justify-center">
          <button className="w-36 h-11 rounded bg-customPink text-white  font-bold transition transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
