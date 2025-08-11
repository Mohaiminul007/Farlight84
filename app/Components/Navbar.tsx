import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-[#202121] font-semibold italic text-[#aaa8a1] justify-between uppercase pl-3 py-1 flex">
      {/* for all the nav thing */}
      <div className="flex">
        <div className="flex gap-3 items-center ">
          <Image
            src="/logo.png"
            width={220}
            height={420}
            alt="Farlight"
          />
          
        </div>
        <nav className="flex items-center gap-3">
          <a className="text-lime-500 ml-10 " href="#">
            Purchase
          </a>
          <a className=" mx-5" href="#">
          <Image src="/icon-logo-white.png" width={35} height={35} alt="Farlight" />
          </a>
          <a className="" href="#">
            Prep room
          </a>
          <a className="" href="#">
            Heros
          </a>
          <a className="" href="#">
            features
          </a>
          <a className="" href="#">
            news
          </a>
          <div className="flex gap-3">
            <a className="flex items-center" href="#">
               
              Buddies
              <IoIosArrowDown />
            </a>
            <a className="flex items-center text " href="#">
              
              esports
              <IoIosArrowDown />
            </a>
            <a className="flex " href="#">
              creators
              
            </a>
          </div>
        </nav>
      </div>
      {/* for the play now button */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1 ">
          <Image src="/lan_icon.png" width={25} height={25} alt="Farlight" />
          <h1>English</h1>
          <Image src="/menu-arrow.png" width={15} height={15} alt="Farlight" />

        </div>
        <div className="translate-y-5">

        

        <div className="relative inline-block rounded-tl-3xl rounded-bl-md  overflow-hidden ">
          <Image
            src="/btn-play-now.png"
            alt="Play Now Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 "
          />
          <button className="relative z-10  px-16 py-4 font-bold text-2xl uppercase bg-transparent text-black border-none cursor-pointer">
            PLAY NOW
          </button>
        </div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
