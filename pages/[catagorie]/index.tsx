import { useRouter } from "next/router";
import React from "react";
import Filter from "../../components/catagorie/Fiilter";
import Container from "../../components/Container";
import { useCatgorie } from "../../lib/useApi";

export default function Page() {
  let { query } = useRouter();

  let { products, isLoading, isError } = useCatgorie(query.catagorie || "");
  return (
    <Container className="catagorie">
      <h1 className="w-full text-center">{query.catagorie}</h1>
      <Filter data={products} isLoading={isLoading} />
    </Container>
  );
}
