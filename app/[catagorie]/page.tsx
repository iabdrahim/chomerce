import React from "react";
import Container from "../components/Container";
import Filter from "./components/Fiilter";
import Product from "../components/ui/Product";

export default function Page({ params }: { params: { catagorie: string } }) {
  return (
    <Container className="catagorie">
      <h1 className="w-full text-center">{params.catagorie}</h1>
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
