import * as React from "react";
import netflixLogo from "assets/Logonetflix.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import avt from "assets/netflix-avt.png";
import { AiFillCaretDown, AiOutlineLock, AiOutlineEdit } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="gradient-to-b-black-transparent lg:h-17 h-[41px] flex items-center px-[4%] lg:px-[60px] fixed top-0 left-0 right-0 z-[1]">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center h-full">
          <div className="lg:h-[25px] lg:w-[92.5px] h-[20px] w-[61px] lg:mr-[25px] cursor-pointer">
            <Image src={netflixLogo} alt="netflix" />
          </div>
          <ul className="flex items-center h-full">
            <li className="relative md:hidden h-full link flex items-center active [&:hover>ul]:block ">
              Browse
              <AiFillCaretDown className="ml-1 fill-white" />
              <ul className="hidden absolute ml-[-90px] top-full left-0 w-[220px] bg-[rgba(0,0,0,.9)]">
                <li className="text-[13px] h-[50px] link ml-0 active flex items-center justify-center">Home</li>
                <li className="text-[13px] h-[50px] font-normal link ml-0 flex items-center justify-center">TV Shows</li>
                <li className="text-[13px] h-[50px] font-normal link ml-0 flex items-center justify-center">Movies</li>
                <li className="text-[13px] h-[50px] font-normal link ml-0 flex items-center justify-center">New & Popular</li>
                <li className="text-[13px] h-[50px] font-normal link ml-0 flex items-center justify-center">My List</li>
                <li className="text-[13px] h-[50px] font-normal link ml-0 flex items-center justify-center">Browse by Languages</li>
              </ul>
            </li>
            <li className=" md:block hidden font-normal link active">Home</li>
            <li className=" md:block hidden font-normal link">TV Shows</li>
            <li className=" md:block hidden font-normal link">Movies</li>
            <li className=" md:block hidden font-normal link">New & Popular</li>
            <li className=" md:block hidden font-normal link">My List</li>
            <li className=" md:block hidden font-normal link">Browse by Languages</li>
          </ul>
        </div>
        <div className="flex items-center  h-full">
          <FaSearch className="w-6 h-6 fill-white mr-[15px]" />
          <IoNotifications className="w-6 h-6 fill-white mr-[15px]" />
          <div className="relative h-full flex items-center [&:hover>div:nth-child(2)]:block [&:hover>*:nth-child(1)>*:nth-child(2)]:rotate-180">
            <div className="flex items-center cursor-pointer">
              <Image src={avt} alt="netflix" className="rounded-md mr-[15px]" />
              <AiFillCaretDown className="ml-1 fill-white transition duration-200" />
            </div>
            <div className="hidden absolute top-full right-0 w-[220px] bg-[rgba(0,0,0,.9)]">
              <div className="text-[13px]">
                <ul className="p-0 m-0 pb-[5px] pt-[10px]">
                  <li className="cursor-pointer py-[5px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px]">
                      <Image
                        src={avt}
                        alt="netflix"
                        className="rounded-md mr-[15px]"
                      />
                    </div>
                    <span className="w-[100px] text-ellipsis text-white ml-2">
                      User
                    </span>
                    <AiOutlineLock className="fill-white" />
                  </li>
                  <li className="cursor-pointer py-[10px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px]">
                      <Image
                        src={avt}
                        alt="netflix"
                        className="rounded-md mr-[15px]"
                      />
                    </div>
                    <span className="w-[100px] text-ellipsis text-white ml-2">
                      Quynh
                    </span>
                    <AiOutlineLock className="fill-white" />
                  </li>
                </ul>
                <ul className="p-0 m-0 pb-[10px]">
                  <li className="cursor-pointer py-[5px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px] flex items-center justify-center">
                      <AiOutlineEdit className="fill-neutral-400 w-3/4 h-full" />
                    </div>
                    <span className="text-ellipsis text-white ml-2">
                      Manage Profiles
                    </span>
                  </li>
                  <li className="cursor-pointer py-[5px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px] flex items-center justify-center">
                      <BiExit className="fill-neutral-400 w-3/4 h-full" />
                    </div>
                    <span className="text-ellipsis text-white ml-2">
                      Exit Profiles
                    </span>
                  </li>
                  <li className="cursor-pointer py-[5px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px] flex items-center justify-center">
                      <MdOutlineAccountCircle className="fill-neutral-400 w-3/4 h-full" />
                    </div>
                    <span className="text-ellipsis text-white ml-2">
                      Account
                    </span>
                  </li>
                  <li className="cursor-pointer py-[5px] px-[10px] flex items-center">
                    <div className="fix-img-inline w-[32px] flex items-center justify-center">
                      <FiHelpCircle className="fill-neutral-400 w-3/4 h-full" />
                    </div>
                    <span className="text-ellipsis text-white ml-2">
                      Help Center
                    </span>
                  </li>
                </ul>
                <hr className="bg-gray-900" />
                <button className="py-[15px] px-[5px] text-white text-center w-full cursor-pointer">
                  Sign out of Netflix
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
