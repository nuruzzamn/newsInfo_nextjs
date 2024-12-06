import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import Signin from "@/components/icons/Signin";
import { Calender, SignIn } from "../Icons";

const NavMiddle = () => {
  return (
    // Top section: calender, logo, sign button, subscribe button
    <div className="flex h-32 justify-between items-center">
      {/* left section: calender, logo */}
      <div className="flex items-center gap-3">
        <Calender />
        <p className="text-xs font-thin text-gray-400">November 5, 2024</p>
        <Link href="/">
          <Image src={logo} alt="logo" width={171} height={50} priority />
        </Link>
      </div>

      {/* Center section: sign in   */}
      <div className="flex items-center gap-2">
        <SignIn />
        <Link href="/">
          <p className="text-xs font-thin text-gray-400 hover:text-black">
            Sign in
          </p>
        </Link>
      </div>

      {/* right section: Subscribe button  */}
      <div>
        <button className="w-36 h-11 rounded bg-customPink text-white  font-bold transition transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NavMiddle;
