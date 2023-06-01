import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Form from "../../components/shop/Form";
import ECOMMERCE from "../../ECOMMERCE.config";
import { authOptions } from "../api/auth/[...nextauth]";

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
export default function New() {
  let [data, setData] = useState({
    name: "",
    specification: "",
    price: 0,
    discount: 0,
    brand: "",
    catagorie: "",
    description: "",
    image: "",
    images: { img1: "", img2: "", img3: "", img4: "" },
  });
  let [isLoad, isDataLoad] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("shop")) {
      setData(JSON.parse(localStorage.getItem("shop") || ""));
    }
    isDataLoad(true);
  }, []);

  useEffect(() => {
    if (!isLoad) return;
    localStorage.setItem("shop", JSON.stringify(data));
  }, [data]);

  let r = useRouter();
  let handlePost = async (e: any) => {
    e.preventDefault();
    let res = await fetch("/api/products/product", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      localStorage.removeItem("shop");
      r.push("/shop/");
    }
  };
  return (
    <Container className="new">
      {/* <h1 className="text-2xl mb-6 text-gray-800 font-semibold">
        Create a product:
      </h1> */}
      <Form data={data} setData={setData} handle={handlePost} />
    </Container>
  );
}
