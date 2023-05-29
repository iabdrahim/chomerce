import React from "react";
import Product from "./ui/Product";

export default function Tabs() {
  return (
    <div className="bg w-screen">
      <div className="max-w-5xl px-4 mx-auto w-full flex flex-col justify-start items-start">
        <div className="tabs">
          <div className="active">Most Popluar</div>
          <div>Most treending</div>
        </div>
        <main className="w-full my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 ">
          <Product Discount={4} />
          <Product Discount={4} />
          <Product Discount={4} />
          <Product Discount={4} />
        </main>
      </div>
    </div>
  );
}
