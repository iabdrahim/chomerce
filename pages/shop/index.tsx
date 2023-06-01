import React from "react";
import Filter from "../../components/catagorie/Fiilter";
import Container from "../../components/Container";
import HeaderProfile from "../../components/shop/HeaderProfile";
import { useProducts } from "../../lib/useApi";
import ECOMMERCE from "../../ECOMMERCE.config";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export const getServerSideProps = async (ctx: any) => {
  let session = await getServerSession(ctx.req, ctx.res, authOptions);
  let user = session?.user?.email == ECOMMERCE.email;
  if (user) {
    return { props: {} };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/auth",
      },
      props: {},
    };
  }
};
export default function Page() {
  let { products, isError, isLoading } = useProducts();
  return (
    <Container>
      <HeaderProfile />
      <Filter data={products} isLoading={isLoading} />
    </Container>
  );
}
