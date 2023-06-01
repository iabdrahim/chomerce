import React from "react";
import { useProducts } from "../lib/useApi";
import MainProducts from "./MainProducts";
import Product from "./ui/Product";

export default function Tabs() {
  let { products, isLoading, isError } = useProducts();
  return (
    <div className="bg w-screen">
      <div className="max-w-5xl px-4 mx-auto w-full flex flex-col justify-start items-start">
        <div className="tabs">
          <div className="active">Most Popluar</div>
          <div>Most treending</div>
        </div>
        <MainProducts products={products} isLoading={isLoading} />
      </div>
    </div>
  );
}
