import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "../../lib/useApi";
import Container from "../../components/Container";
import Filter from "../../components/catagorie/Fiilter";
export default function Page({}: {}) {
  let { query } = useRouter();
  let { products, isLoading, isError } = useQuery(query?.q || "");
  return (
    <Container>
      <h3 className="text-gray-700 w-full font-medium text-2xl pl-52 translate-y-12 max-md:p-0 max-md:translate-y-0 my-4 ">
        find result for “{query.q}”
      </h3>
      <Filter data={products} isLoading={isLoading} />
    </Container>
  );
}
