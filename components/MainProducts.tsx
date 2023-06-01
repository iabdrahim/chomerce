import React from "react";
import IProduct from "../utils/productType";
import ProductLoader from "./loading";
import Product from "./ui/Product";

export default function MainProducts({
  products,
  isLoading,
  isGrid3,
}: {
  products: any;
  isLoading?: boolean;
  isGrid3?: boolean;
}) {
  if (!isLoading && products?.length == 0) {
    return (
      <h3 className="text-xl text-center mt-20 text-gray-700 w-full">
        404 noting found
      </h3>
    );
  }
  return (
    <>
      <main
        className={`w-full my-10 grid ${
          isGrid3 ? "grid-cols-3" : "grid-cols-4"
        } gap-4 max-md:grid-cols-2 `}
      >
        {products?.length &&
          products.map((pro: IProduct) => (
            <Product key={pro._id} product={pro} />
          ))}

        {isLoading && !products?.length && (
          <>
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </>
        )}
      </main>
    </>
  );
}
