import React from "react";
import Container from "../components/Container";
import Product from "../components/ui/Product";
import Filter from "../[catagorie]/components/Fiilter";

export default function Page({
  searchParams,
}: {
  searchParams: { [q: string]: string | string[] | undefined };
}) {
  return (
    <Container>
      <h3 className="text-gray-700 w-full font-medium text-2xl pl-52 translate-y-12 max-md:p-0 max-md:translate-y-0 my-4 ">
        find result “{searchParams.q}”
      </h3>
      <div className="flex justify-between max-md:flex-col items-start relative">
        <Filter />
        <main className="w-full my-10 grid grid-cols-3 gap-4 max-md:grid-cols-2 mt-24 max-md:mt-16">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </main>
      </div>
    </Container>
  );
}
