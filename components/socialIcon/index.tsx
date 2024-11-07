import React from "react";
import Twitter from "@/components/icons/Twitter";
import Facebook from "@/components/icons/Facebook";
import LinkedIn from "@/components/icons/LinkedIn";

const SocialIcon = () => {
  return (
    <>
      {/* Social Icons */}
      <div className="flex space-x-6 mt-6 md:mt-0">
        <a
          href="#"
          aria-label="Twitter"
          className="text-gray-400 hover:text-blue-400"
        >
          <Twitter />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-400 hover:text-blue-400"
        >
          <Facebook />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-400"
        >
          <LinkedIn />
        </a>
      </div>
    </>
  );
};

export default SocialIcon;
