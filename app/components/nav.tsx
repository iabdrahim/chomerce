"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  let r = useRouter();
  let handleSubmit = (e: any) => {
    if (!search) {
      return;
    }
    e.preventDefault();
    r.push("/search?q=" + search);
  };
  return (
    <>
      <div className="observer-element h-4 md:h-8 "></div>
      <nav
        className={`sticky top-0 left-0 max-w-5xl mx-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-8 py-8 bg-opacity-60 px-4 `}
        id="sticky-nav"
      >
        <Link href="/">
          <div className="logo">
            <Image
              priority
              src="/logo.svg"
              width={60}
              height={30}
              alt="cannot load the logo"
            />
          </div>
        </Link>
        <div className="searchBar">
          <form onClick={handleSubmit}>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-base"
              placeholder="Search for anything"
            />
            <button type="submit">
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
          <Link href="cart">
            <button className="cart w-full">
              <RiShoppingCart2Line size={24} />
              {/* <span>0</span> */}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
