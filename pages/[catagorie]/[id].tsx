import React, { useEffect } from "react";
import { useProduct } from "../../lib/useApi";
import Details from "../../components/product/Details";
import Container from "../../components/Container";
import PathNav from "../../components/product/PathNav";
import { useRouter } from "next/router";

export default function Page() {
  let { query } = useRouter();
  let { product, isLoading, isError } = useProduct(query.id || "");

  return (
    <Container>
      <PathNav name={product?.name || "..."} />
      {product?.name && <Details product={product} />}
    </Container>
  );
}
