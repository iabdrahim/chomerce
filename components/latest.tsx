import React from "react";
import { useLastest } from "../lib/useApi";
import MainProducts from "./MainProducts";

export default function Latest() {
  let { products, isLoading, isError } = useLastest();
  return (
    <div className="latest w-full mt-6">
      <h2>Latest Products</h2>
      <MainProducts products={products} />
    </div>
  );
}
