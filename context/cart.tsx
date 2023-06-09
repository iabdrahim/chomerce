import { createContext, useState, useEffect } from "react";
let CartContext = createContext({
  carts: [
    {
      name: "",
      price: 0,
      discount: 0,
      img: "",
      number: 1,
      id: "",
      isChecked: true,
    },
  ],
  setCarts: (x: any) => x,
});

export default function CartProvider({ children }: { children: any }) {
  let [carts, setCarts] = useState([]);
  let [isLoad, isDataLoad] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("carts")) {
      setCarts(JSON.parse(localStorage.getItem("carts") || ""));
    }
    isDataLoad(true);
  }, []);

  useEffect(() => {
    if (!isLoad) return;
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}
export { CartContext };
