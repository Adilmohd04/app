import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300 py-8 px-4 md:py-12 md:px-12 border-t">
      <div className="flex justify-center mb-4">
        <Image width={60} height={60} alt="ahead logo" src="/ahead-logo.png" />
      </div>
      <p className="mb-5 text-lg md:text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-5 font-semibold">
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Image width={15} height={20} alt="location icon" src="/location-svg.svg" />
          </div>
          <div>AugustraBe 26, 10117 Berlin</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Image width={15} height={20} alt="mail icon" src="/mail-svg.svg" />
          </div>
          <div>hi@ahead-app.com</div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Image
          src="/appleStoreIcon.svg"
          alt="download from apple store"
          width={150}
          height={50}
        />
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; 2022 Ahead app. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
