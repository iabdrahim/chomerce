import React from "react";
import Product from "./ui/Product";

export default function Latest() {
  return (
    <div className="latest mt-6">
      <h2>Latest Products</h2>
      <main className="w-full my-5 grid grid-cols-4 gap-4 max-md:grid-cols-2 ">
        <Product Discount={4} />
        <Product Discount={4} />
        <Product Discount={4} />
        <Product Discount={4} />
      </main>
    </div>
  );
}
