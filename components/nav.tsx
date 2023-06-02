import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Line, RiUserSmileFill } from "react-icons/ri";
import { CartContext } from "../context/cart";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  let session = useSession();
  let r = useRouter();
  let handleSubmit = (e: any) => {
    if (!search) {
      return;
    }
    e.preventDefault();
    r.push(`/search/?q=${search}`);
  };
  let { carts } = useContext(CartContext);
  return (
    <>
      <div className="observer-element h-4 max-md:hidden "></div>
      <nav
        className={`sticky max-md:static top-0 left-0 max-w-5xl mx-auto w-full h-6 max-md:h-32 flex flex-row justify-between items-center mb-2 md:mb-8 py-8 max-md:py-0 max-md:pb-2 bg-opacity-60 px-4 `}
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
          {session.status ? (
            <button className="hello w-full flex" onClick={() => signOut()}>
              <RiUserSmileFill size={20} />
              <span>Hi, {session?.data?.user?.name}</span>
            </button>
          ) : (
            <Link href="/auth">
              <button className="profile w-full p-2">Sign up</button>
            </Link>
          )}
          <Link href="/cart">
            <button className="cart w-full">
              <RiShoppingCart2Line size={24} />
              <span className={carts.length == 0 ? "hide" : ""}>
                {carts.length}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
