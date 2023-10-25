import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ showNav, setShowNav }) => {
  return (
    <div
      className={
        showNav
          ? "fixed h-1/2 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 z-50 transition-all duration-[500ms] overflow-hidden"
          : "fixed h-0 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md  z-50 transition-all duration-[500ms] overflow-hidden"
      }
    >
      <div className=" block items-center justify-center text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className="relative group">
            <Link
              to={"/home"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/contact"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Contact</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/posts"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiFileText fontSize={20} />
              <span className="">Posts</span>
            </Link>
          </li>
        </ul>

        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="flex  w-24 my-5 mx-auto gap-2 justify-center items-center text-lg bg-fuchsia-900 px-3 py-[3px] border border-purple-700 rounded-sm"
        >
        </a>
      </div>
    </div>
  );
};

export default Navbar;
