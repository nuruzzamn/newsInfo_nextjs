import React from "react";
import Image from "next/image";
import content_tech_image from "@/public/content-tech.jpg";
import politics_post1 from "@/public/content/politics_post01.jpg";
import main_hero_content_img from "@/public/main-hero-content-img.jpg";
import content_business_image from "@/public/content-business.jpg";
import advertisingTravelAgency from "@/public/content/advertisement.jpg.jpg";
import advertisement14 from "@/public/content/advertisement14.jpg";

import {
  Calender,
  Clock,
  LeftArrowButton,
  LongBorder,
  RightArrowButton,
  SignIn,
  UpperArrow,
} from "@/components/Icons";
import top_stories_1 from "@/db/top_stories";
import { top_stories_2, politics_post } from "@/db/top_stories";
import Border_line from "@/public/Border.jpg";
import side_bar_image from "@/public/content/sidebar_img05.jpg";
import Link from "next/link";

const UpperContent = () => {
  return (
    <>
      {/* Section: main content */}
      <div className="flex w-full">
        {/* Left section:left sidebar and hero content 75% */}
        <section>
          {/* Tag:left sidebar and hero content */}
          <div className="basis-3/4 flex mb-4 h-auto">
            {/* Tag: Left side bar */}
            <div className="basis-2/6 flex flex-col border-r-2 border-gray-300">
              {/* <LeftContent /> */}
              <div className="pt-0 pl-4 pr-4 pb-0">
                {/* business content */}
                <div className="">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={content_business_image}
                      alt="Business"
                      width={288}
                      height={180}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-xs font-bold text-gray-400">
                        Business
                      </p>
                      <h1 className="text-sm font-thin text-gray-600 mt-2">
                        A Pragmatist’s Guide To Their Lean User Research
                      </h1>

                      {/* bottom admin and date icon row */}
                      <div className="flex justify-start gap-3 mt-2">
                        {/* for admin icon */}
                        <div className="flex items-center gap-1">
                          <SignIn />
                          <p className="text-xs text-gray-500">By Admin</p>
                        </div>

                        {/* for date icon */}
                        <div className="flex items-center gap-2">
                          <Calender />
                          <p className="text-xs text-gray-500">
                            November 5, 2024
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-gray-300 h-full"></div>
                  </div>
                </div>

                <div className="border border-gray-300 w-full my-4"></div>

                {/* tech content */}
                <div className="">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={content_tech_image}
                      alt="Tech"
                      width={288}
                      height={180}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-xs font-bold text-gray-400">Tech</p>
                      <h1 className="text-sm font-thin text-gray-600 mt-2">
                        Five Data-Loading Patterns To Boost Web Performance
                      </h1>

                      {/* bottom admin and date icon row */}
                      <div className="flex justify-start gap-3 mt-2">
                        {/* for admin icon */}
                        <div className="flex items-center gap-1">
                          <SignIn />
                          <p className="text-xs text-gray-500">By Admin</p>
                        </div>

                        {/* for date icon */}
                        <div className="flex items-center gap-2">
                          <Calender />
                          <p className="text-xs text-gray-500">July 5, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tag: Right hero content   */}
            <div className="basis-2/3">
              <div className="flex flex-col justify-center items-center pt-0 pr-4 pl-4 pb-0">
                <Image
                  src={main_hero_content_img}
                  alt="Banner image"
                  width={630}
                  height={450}
                  className="w-full"
                />

                <button className="w-20 h-6 bg-transparent border text-gray-600 border-gray-300 rounded my-6">
                  Politics
                </button>

                <p className="text-3xl font-semibold text-custommBlue text-center">
                  Beyond Algorithms Skills Of Designers That AI Can’t Replicate
                </p>

                {/* Sign in, calendar, clock */}
                <div className="flex justify-center items-center gap-2 my-4">
                  {/* Tag: sign in  */}
                  <div className="flex items-center gap-1">
                    <SignIn />
                    <p className="text-xs text-gray-500">By Admin</p>
                  </div>
                  {/* Tag: Calender date */}
                  <div className="flex justify-center items-center gap-1">
                    <Calender />
                    <p className="text-xs text-gray-500 items-center">
                      27 August, 2024
                    </p>
                  </div>
                  {/* Tag: Clock */}
                  <div className="flex justify-center items-center gap-1">
                    <Clock />
                    <p className="text-xs text-gray-500 items-center">
                      20 MINS
                    </p>
                  </div>
                </div>
                {/* Tag: description  */}
                <div>
                  <p className="text-sm text-gray-500 text-center">
                    Browned butter and brown sugar caramelly goodness, crispy
                    edgend software centers and melty little puddles of
                    chocolate first favorite.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Tag: advertisement for travel agency */}
          <Link href="">
            <Image
              src={advertisingTravelAgency}
              alt="Business"
              width={288}
              height={180}
              className="w-full px-4 py-12"
              priority
            />
          </Link>

          {/* Tag: Politics  */}
          <div className="px-4">
            {/* Title and title divider line  */}
            <div className="flex gap-2 items-center py-5">
              <h1 className="text-2xl font-semibold text-custommBlue">
                Politics
              </h1>
              <div className="">
                <LongBorder />
              </div>
            </div>
            {/* content body  */}
            <div className="flex justify-between gap-6">
              {/* image  */}
              <div>
                <Image
                  src={politics_post1}
                  alt="post1"
                  width={350}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* post details  */}
              <div className="border-r-2">
                <h1 className="text-sm font-semibold text-gray-400">
                  Politics
                </h1>
                <h2 className="text-xl font-bold text-custommBlue pt-1">
                  Warns Financial Institutions to be on Watch for Russian
                </h2>
                {/* post author details  */}
                <div className="flex gap-5 items-center py-2">
                  <div className="flex gap-3 items-center">
                    <SignIn />
                    <h1 className="text-sm text-gray-500">BY ADMIN</h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Calender />
                    <h1 className="text-sm text-gray-500">27 August, 2024</h1>
                  </div>
                </div>

                <h2 className="text-sm text-gray-600">
                  Browned butter browa melly ness crispy edgend software centers
                  puddles of chocolate.
                </h2>

                <div className="pt-4">
                  <button className="py-2 px-3 border border-gray-400 rounded-lg  text-sm text-gray-600 flex items-center gap-3">
                    Read more
                    <span>
                      <UpperArrow />
                    </span>
                  </button>
                </div>
              </div>

              {/* others post title  */}
              <div>
                {
                  <div>
                    {politics_post.map((story, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          index !== politics_post.length - 1
                            ? "border-b-2 border-gray-300"
                            : "pt-3"
                        }`}
                      >
                        {/* Left content */}
                        <div className="">
                          <p className="text-lg font-bold text-custommBlue">
                            {story.title}
                          </p>
                          <div className="flex gap-2 py-3">
                            <Calender />
                            <p className="text-xs font-thin text-gray-400">
                              {story.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Tag: Sports post */}
          <div className="mt-4">
            {/* Title and title divider line  */}
            <div className="flex gap-2 items-center py-5">
              <h1 className="text-2xl font-semibold text-custommBlue">
                Today’s Hot Spot
              </h1>
              <div className="">
                {/* <LongBorder /> */}
                <Image
                  src={Border_line}
                  alt="Top stories"
                  width={290}
                  height={5}
                  className="w-full"
                />
              </div>
            </div>

            {/* post details */}
            <div className="flex justify-between gap-3 pr-4">
              {/* post card 1  */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={content_business_image}
                  alt="Business"
                  width={288}
                  height={180}
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-xs font-bold text-gray-400">Business</p>
                  <h1 className="text-sm font-thin text-gray-600 mt-2">
                    A Pragmatist’s Guide To Their Lean User Research
                  </h1>

                  {/* bottom admin and date icon row */}
                  <div className="flex justify-start gap-3 mt-2">
                    {/* for admin icon */}
                    <div className="flex items-center gap-1">
                      <SignIn />
                      <p className="text-xs text-gray-500">By Admin</p>
                    </div>

                    {/* for date icon */}
                    <div className="flex items-center gap-2">
                      <Calender />
                      <p className="text-xs text-gray-500">November 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* post card 2  */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={content_tech_image}
                  alt="Tech"
                  width={288}
                  height={180}
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-xs font-bold text-gray-400">Tech</p>
                  <h1 className="text-sm font-thin text-gray-600 mt-2">
                    A Pragmatist’s Guide To Their Lean User Research
                  </h1>

                  {/* bottom admin and date icon row */}
                  <div className="flex justify-start gap-3 mt-2">
                    {/* for admin icon */}
                    <div className="flex items-center gap-1">
                      <SignIn />
                      <p className="text-xs text-gray-500">By Admin</p>
                    </div>

                    {/* for date icon */}
                    <div className="flex items-center gap-2">
                      <Calender />
                      <p className="text-xs text-gray-500">November 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* post card 3  */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={content_business_image}
                  alt="Business"
                  width={288}
                  height={180}
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-xs font-bold text-gray-400">Business</p>
                  <h1 className="text-sm font-thin text-gray-600 mt-2">
                    A Pragmatist’s Guide To Their Lean User Research
                  </h1>

                  {/* bottom admin and date icon row */}
                  <div className="flex justify-start gap-3 mt-2">
                    {/* for admin icon */}
                    <div className="flex items-center gap-1">
                      <SignIn />
                      <p className="text-xs text-gray-500">By Admin</p>
                    </div>

                    {/* for date icon */}
                    <div className="flex items-center gap-2">
                      <Calender />
                      <p className="text-xs text-gray-500">November 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right section: Right sidebar top stories */}
        <section>
          <div className="basis-1/4 w-full">
            {/* <RightSideBarContent /> */}
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

                <h1 className="text-2xl font-semibold text-custommBlue mt-4">
                  Top Stories
                </h1>

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
                              <Calender />
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
                            <Calender />
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
          </div>
        </section>
      </div>

      {/* Section: advertisement for travel agency */}
      <Link href="">
        <Image
          src={advertisement14}
          alt="Business"
          width={288}
          height={180}
          className="flex justify-center min-w-full px-20 py-12"
          priority
        />
      </Link>

      {/* Section: Editors' Picks */}
      <div className="bg-[#F9F9F9]">
        <div className="max-w-7xl px-6 mx-auto py-20">
          {/* title  */}
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-custommBlue">
              Editors' Picks
            </h1>
            <div className="flex items-center gap-3">
              <button>
                <LeftArrowButton />
              </button>

              <button>
                <RightArrowButton />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperContent;
