import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 bg-white z-50 w-full">
      <header className="flex flex-col md:flex-row justify-between items-center py-3 px-4 md:px-8 lg:px-32 w-full">
        <div className="flex items-center mb-3 md:mb-0"> {/* Added margin-bottom for small screens */}
          <Image width={50} height={50} alt="Ahead Logo" src="/ahead-logo.png" />
        </div>
        <div className="flex-1">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start">
            <li className="cursor-pointer font-semibold">Emotions</li>
            <li className="cursor-pointer font-semibold">Manifesto</li>
            <li className="cursor-pointer font-semibold">Self-awareness test</li>
            <li className="cursor-pointer font-semibold">Work With Us</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="cursor-pointer text-white bg-black rounded-full px-5 py-3 font-semibold">
            Download app
          </button>
        </div>
      </header>
    </div>
  );
}
