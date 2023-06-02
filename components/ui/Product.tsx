import Link from "next/link";
import IProduct from "../../utils/productType";

export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="product">
      <Link href={`/${product.catagorie}/${product._id}`}>
        <img
          src={product.image || "/image.png"}
          alt={"product image"}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </Link>
      <Link href={`/${product.catagorie}/${product._id}`}>
        <p className="">{product.name}</p>
      </Link>
      <Link href={`/${product.catagorie}/${product._id}`}>
        <div className="flex w-full gap-4 justify-start items-center max-md:gap-0 max-md:flex-col">
          <button className="buy">
            {product.price}$
            {product.discount != 0 && (
              <span>
                {(
                  product.price -
                  (product.discount / 100) * product.price
                ).toFixed(2)}
                $
              </span>
            )}
          </button>
          {product.discount != 0 && (
            <button className="text-green-600 font-medium">
              disc.{product.discount}%
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}
