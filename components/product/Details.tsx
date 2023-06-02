import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import IProduct from "../../utils/productType";
import Profile from "./Profile";

export default function Details({ product }: { product: IProduct }) {
  let { carts, setCarts } = useContext(CartContext);
  let [image, setImage] = useState(product.image);
  let addACart = (d: IProduct) => {
    let newArr = [...carts];
    let ct = newArr.filter((c) => c.id == d._id)[0];
    if (ct) {
      ct.number++;
      setCarts(newArr);
      return;
    }
    newArr.push({
      id: d._id,
      name: d.name,
      isChecked: true,
      img: d.image,
      number: 1,
      discount: d.discount || 0,
      price: d.price,
    });
    setCarts(newArr);
  };
  let MinusANumber = (d: IProduct) => {
    let newArr = [...carts];
    let ct = newArr.filter((c) => c.id == d._id)[0];
    if (ct) {
      if (ct.number == 1) {
        newArr = newArr.filter((c) => c.id != d._id);
        setCarts(newArr);
        return;
      }
      ct.number--;
      setCarts(newArr);
      return;
    }
  };
  let changeImage = (u: string, e: any) => {
    setImage(u);
    document
      .querySelectorAll(".imgs > button")
      .forEach((l) => l.classList.remove("active"));
    console.log(u, e.target);
    e.target.parentNode.classList.add("active");
  };
  return (
    <main className="details w-full my-10">
      <header className="w-full flex justify-between items-start max-md:flex-col">
        <div className="flex w-full image flex-col gap-5">
          <img
            src={image}
            alt={"product image"}
            className="w-full object-cover object-center"
          />
          <div className="imgs flex gap-4">
            <button
              className="active"
              onClick={(e: any) => changeImage(product.image, e)}
            >
              <img src={product.image} alt={"product image"} />
            </button>
            {product.images.img1 && (
              <button onClick={(e: any) => changeImage(product.images.img1, e)}>
                <img src={product.images.img1} alt={"product image"} />
              </button>
            )}
            {product.images.img2 && (
              <button onClick={(e: any) => changeImage(product.images.img2, e)}>
                <img src={product.images.img2} alt={"product image"} />
              </button>
            )}
            {product.images.img3 && (
              <button onClick={(e: any) => changeImage(product.images.img3, e)}>
                <img src={product.images.img3} alt={"product image"} />
              </button>
            )}
          </div>
        </div>
        <div className="info pl-12 max-md:pl-0 max-md:mt-5 w-full flex flex-col gap-4">
          <h1>{product.name}</h1>
          <div className="stars flex justify-start items-center">
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <span className="text-gray-400 ml-2">(204)</span>
          </div>
          <div className="price mt-4">
            <div className="flex gap-3">
              <h3>${product.price}</h3>
              {product.discount != 0 && (
                <span>
                  $
                  {(
                    product.price -
                    (product.discount / 100) * product.price
                  ).toFixed(2)}
                </span>
              )}
            </div>
            {product.discount != 0 && (
              <h4 className="text-green-600 font-medium text-lg">
                disc.{product.discount}%
              </h4>
            )}
          </div>
          <div className="mt-7 get flex gap-4">
            <button className="min" onClick={() => MinusANumber(product)}>
              -
            </button>
            <span>
              {carts.filter((c: any) => c.id == product._id)[0]?.number || 0}
            </span>
            <button onClick={() => addACart(product)}>+</button>
          </div>
          <Profile />
        </div>
      </header>
      <div className="description mt-14">
        <h3>Desc</h3>
        {product.description}
        <h3>Specs</h3>
        <p>Bluetooth: Connectivity</p>
        <p>Product Dimensions: 59.4 x 35.2 x 104.8 mm (WxDxH)</p>
        <p>Operating System Compatibility:</p>
        <ul>
          <li>Wireless Mouse (Bluetooth 5.1)</li>
          <li>Sensor technology: Logitech High</li>
          <li>
            Precision Optical Tracking Dpi range: 1000-4000; nominal value 1000
          </li>
          <li>dpi 4 buttons Battery type: 1 x AA battery Main Unit</li>
        </ul>
        <h3>Etc</h3>
        <ul>
          <li>Wireless Mouse (Bluetooth 5.1)</li>
          <li>Sensor technology: Logitech High</li>
          <li>
            Precision Optical Tracking Dpi range: 1000-4000; nominal value 1000
          </li>
          <li>dpi 4 buttons Battery type: 1 x AA battery Main Unit</li>
        </ul>
        <h3 className="flex gap-4">
          Review
          <div className="stars text-base flex justify-start items-center">
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <svg
              width={16}
              height={15}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                fill="#F6A973"
              />
            </svg>
            <span className="text-gray-400 ml-2">(204)</span>
          </div>
        </h3>
        <div className="reviews mt-10">
          <div className="rev">
            <div className="date text-base text-gray-400">
              Mehdi, 13 May 2022
            </div>
            <p className="text-lg">
              Mini design, light weight, smooth trackball.
            </p>
            <div className="stars text-base flex justify-start items-center">
              <svg
                width={16}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                  fill="#F6A973"
                />
              </svg>
              <svg
                width={16}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                  fill="#F6A973"
                />
              </svg>
              <svg
                width={16}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                  fill="#F6A973"
                />
              </svg>
              <svg
                width={16}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                  fill="#F6A973"
                />
              </svg>
              <svg
                width={16}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
                  fill="#F6A973"
                />
              </svg>
              <span className="text-gray-400 ml-2">(204)</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
