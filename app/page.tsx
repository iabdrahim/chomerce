import React from "react";
import Container from "./components/Container";
import HeroHeader from "./components/heroHeader";
import Product from "./components/ui/Product";
import Tabs from "./components/filter";
import Latest from "./components/latest";
import Footer from "./footer";

// let getData = async () => {
//   let res = await fetch("https://hamesh.vercel.app/api/articles");
//   let json = await res.json();
//   return json;
// };
export default async function Page() {
  // let data = await getData();
  // console.log(data);
  return (
    <Container>
      <HeroHeader />
      <main className="w-full my-10 grid grid-cols-4 gap-4 max-md:grid-cols-2 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
      <Tabs />
      <Latest />
    </Container>
  );
}
