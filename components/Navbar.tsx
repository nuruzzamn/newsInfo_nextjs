import Link from "next/link";
import { Calender, DownArrow, Line3, Search, SignIn } from "./Icons";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <div className="">
      {/* Header navbar: social media link, calender, logo, sign button, subscribe button */}
      <div className="max-w-7xl px-6 mx-auto">
        {/* Top section: social media link  */}
        <div></div>
        {/* Middle section: calender, logo, sign button, subscribe button */}
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
      </div>
      {/* divider between nav items */}
      <hr className="border-gray-300 border-t-2 w-full" />

      {/* Main navbar: menu button, menu lists, search bar */}
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex justify-between">
          {/* Left section: Home menu */}
          <Link href="/" className="flex pl-2">
            <div className="border-l-2 border-gray-300 h-full"></div>
            <Line3 />
            <div className="border-l-2 border-gray-300 h-full"></div>
          </Link>

          {/* Center section: menu details */}
          <div className="flex items-center gap-10">
            <div className="flex gap-1 items-center">
              <p className="text-gray-400 text-base font-thin">Home</p>
              <div className="mt-[2px]">
                <DownArrow />
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-base font-thin">About us</p>
            </div>

            <div className="flex gap-1 items-center">
              <p className="text-gray-400 text-base font-thin">Features</p>
              <div className="mt-[2px]">
                <DownArrow />
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <p className="text-gray-400 text-base font-thin">Categories</p>
              <div className="mt-[2px]">
                <DownArrow />
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-base font-thin">Contact</p>
            </div>
          </div>

          {/* Right section: search bar */}
          <div className="flex justify-end items-center">
            {/* Search Input */}
            <div className=" flex items-center">
              <input
                type="text"
                placeholder="Search here..."
                className="py-2 text-base max-w-36 text-gray-700 outline-none"
              />
              {/* Search Icon */}
              <button className=" text-gray-400 transition transform hover:scale-105 hover:bg-opacity-90">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* divider between nav items */}
      <hr className="border-gray-300 border-t-2 w-full shadow-lg" />
    </div>
  );
};

export default Navbar;
