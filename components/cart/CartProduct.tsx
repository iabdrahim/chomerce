import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

export default function CartProduct({ product }: { product: any }) {
  let { carts, setCarts } = useContext(CartContext);

  let addACart = (d: any) => {
    let newArr = [...carts];
    let ct = newArr.filter((c) => c.id == d.id)[0];
    if (ct) {
      console.log("++");
      ct.number++;
      setCarts(newArr);
      return;
    }
  };
  let MinusANumber = (d: any) => {
    let newArr = [...carts];
    let ct = newArr.filter((c) => c.id == d.id)[0];
    if (ct) {
      console.log("--");
      if (ct.number == 1) {
        newArr = newArr.filter((c) => c.id != d.id);
        setCarts(newArr);
        return;
      }
      ct.number--;
      setCarts(newArr);
      return;
    }
  };
  return (
    <div className="flex justify-start items-center gap-6">
      <input
        type="checkbox"
        name=""
        id=""
        checked={product.isChecked}
        onClick={() =>
          setCarts(
            carts.map((c: any) =>
              c.id == product.id ? { ...c, isChecked: !c.isChecked } : c
            )
          )
        }
      />
      <img src={product.img} className="" alt={"product image"} />
      <div className="info">
        <h3>{product.name}</h3>
        <div className="flex gap-3 mt-7 justify-start items-center">
          <h4 className="font-medium">{product.price}$</h4>
          <div className="get flex gap-4">
            <button className="min" onClick={() => MinusANumber(product)}>
              -
            </button>
            <span>{product.number}</span>
            <button onClick={() => addACart(product)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
