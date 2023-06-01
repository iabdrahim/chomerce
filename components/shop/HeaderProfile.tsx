import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Profile from "../product/Profile";
export default function HeaderProfile() {
  const [search, setSearch] = useState("");
  let handleSubmit = (e: any) => {
    if (!search) {
      return;
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="banner w-full h-96 max-md:h-5 overflow-hidden">
        <img
          src={
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          }
          alt={"product image"}
          className="w-full object-cover object-center h-fill rounded-lg"
        />
      </div>
      <div className="action flex max-md:flex-col justify-between items-center gap-12 max-md:gap-4">
        <Profile isMake={true} />
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
      </div>
    </div>
  );
}
