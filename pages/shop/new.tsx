import React, { useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/shop/Form";

export default function New() {
  let [data, setData] = useState({
    name: "",
    brand: String,
    catagorie: String,
    specification: "",
    price: 0,
    discount: 0,
    description: "",
    image: "",
    imgs: { img1: "", img2: "", img3: "", img4: "" },
  });
  return (
    <Container>
      <h1>Create a product</h1>
      <Form data={data} setData={setData} />
      <div>
        <button>post</button>
      </div>
    </Container>
  );
}
