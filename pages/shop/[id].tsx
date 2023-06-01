import React from "react";
import Filter from "../../components/catagorie/Fiilter";
import Container from "../../components/Container";
import HeaderProfile from "../../components/shop/HeaderProfile";
import { useProducts } from "../../lib/useApi";
export default function Page() {
  let { products, isError, isLoading } = useProducts();
  return (
    <Container>
      <HeaderProfile />
      <Filter data={products} isLoading={isLoading} />
    </Container>
  );
}
