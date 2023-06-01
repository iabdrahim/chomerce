import React, { useContext, useEffect, useState } from "react";
import CartProduct from "../../components/cart/CartProduct";
import Container from "../../components/Container";
import { CartContext } from "../../context/cart";
export default function Page() {
  let { carts, setCarts } = useContext(CartContext);
  let [sum, setSum] = useState(0);

  useEffect(() => {
    let sum = 0;
    carts.forEach((c) => {
      if (!c.isChecked) return;
      sum += (c.price - (c.discount / 100) * c.price) * c.number;
    });
    setSum(sum);
  }, [carts]);

  return (
    <Container className="cart">
      <h3 className="text-gray-700 w-full font-medium text-2xl my-4">
        Shop cart
      </h3>
      <div className="w-full flex max-md:flex-col justify-between gap-5">
        <main className=" w-full flex flex-col gap-4 mt-5 justify-start items-center">
          {carts.map((p: any) => (
            <CartProduct key={p.id} product={p} />
          ))}
        </main>
        <div className="w-full flex justify-end items-center ">
          <div className="pay max-md:min-w-full">
            <h3>Summery price</h3>
            <h4>
              {sum}$ <span>tax:2$</span>
            </h4>
            <button>Pay {sum}$</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
