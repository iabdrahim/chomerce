import React, { useEffect } from "react";
import Container from "../components/Container";
import HeroHeader from "../components/heroHeader";
import Tabs from "../components/tabs";
import Latest from "../components/latest";
import MainProducts from "../components/MainProducts";
import { useProducts } from "../lib/useApi";
import { useRouter } from "next/router";

export default function Page() {
  let { products, isLoading, isError } = useProducts();
  let router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <>
      <Container>
        <HeroHeader />
        <MainProducts products={products} isLoading={isLoading} />
      </Container>
      <Tabs />
      <Container>
        <Latest />
      </Container>
    </>
  );
}
