"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Line, RiUserSmileFill } from "react-icons/ri";
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="observer-element h-4 md:h-8 "></div>
      <nav
        className={`sticky top-0 left-0 max-w-5xl mx-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-8 py-8 bg-opacity-60 px-4 `}
        id="sticky-nav"
      >
        <div className="logo">
          <Image
            priority
            src="/logo.svg"
            width={60}
            height={30}
            alt="cannot load the logo"
          />
        </div>
        <div className="searchBar">
          <form action="">
            <input
              type="text"
              className="text-base"
              placeholder="Search for anything"
            />
            <button>
              <FiSearch size={24} />
            </button>
          </form>
        </div>
        <div className="actions flex gap-4 justify-between items-center">
          <button className="profile w-full p-2">Sign up</button>
          {/* <button className="hello w-full flex">
            <RiUserSmileFill size={20} />
            <span>Hi, abdrahim</span>
          </button> */}
          <button className="cart w-full">
            <RiShoppingCart2Line size={24} />
            <span>20</span>
          </button>
        </div>
      </nav>
    </>
  );
}
