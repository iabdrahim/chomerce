"use client";

export default function Product({ Discount }: { Discount?: number }) {
  return (
    <div className="product">
      <img
        src={
          "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        }
        alt={"product image"}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
      <p className="">PS4 OP Stick Bonus USB Charge Cable White</p>
      <div className="flex w-full gap-4 justify-start items-center">
        <button className="buy">
          29$
          {Discount && <span>{((Discount / 100) * 12).toFixed(2)}$</span>}
        </button>
        {Discount && (
          <button className="text-green-600 font-medium">
            disc.{Discount}%
          </button>
        )}
      </div>
    </div>
  );
}
