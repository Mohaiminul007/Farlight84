import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div
      className="sticky top-0 z-50 bg-[#202121] font-semibold italic text-[#aaa8a1] uppercase pl-3 py-1 flex justify-between  items-center whitespace-nowrap"
      
    >
      {/* Left side */}
      <div className="flex items-center whitespace-nowrap flex-shrink-0">
        {/* Logo */}
        <div className="flex gap-[12px] items-center">
          <Image src="/logo.png" width={220} height={420} alt="Farlight" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[12px] ml-[40px] flex-shrink-0">
          <a className="text-lime-500" href="#">Purchase</a>
          <a className="mx-[20px]" href="#">
            <Image src="/icon-logo-white.png" width={35} height={35} alt="Farlight" />
          </a>
          <a href="#">Prep room</a>
          <a href="#">Heros</a>
          <a href="#">Features</a>
          <a href="#">News</a>
          <div className="flex gap-[12px]">
            <a className="flex items-center gap-[4px]" href="#">
              Buddies
              <IoIosArrowDown />
            </a>
            <a className="flex items-center gap-[4px]" href="#">
              Esports
              <IoIosArrowDown />
            </a>
            <a href="#">Creators</a>
          </div>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex gap-[8px] items-center flex-shrink-0">
        {/* Language */}
        <div className="flex items-center gap-[4px]">
          <Image src="/lan_icon.png" width={25} height={25} alt="Farlight" />
          <h1>English</h1>
          <Image src="/menu-arrow.png" width={15} height={15} alt="Farlight" />
        </div>

        {/* Play now */}
        <div className="translate-y-[20px] flex-shrink-0">
          <div
            className="relative inline-block rounded-tl-[24px] rounded-bl-[12px] overflow-hidden"
            style={{
              width: "280px",
              height: "80px",
            }}
          >
            <Image
              src="/btn-play-now.png"
              alt="Play Now Background"
              fill
              className="object-cover absolute inset-0"
            />
            <button
              className="relative translate-y-[10px] z-10 font-bold text-2xl uppercase bg-transparent text-black border-none cursor-pointer"
              style={{
                padding: "16px 64px",
              }}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
