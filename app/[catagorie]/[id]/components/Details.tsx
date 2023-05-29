import React from "react";
import { RiChat1Fill } from "react-icons/ri";

export default function Details() {
  return (
    <main className="details w-full my-10">
      <header className="w-full flex justify-between items-start max-md:flex-col">
        <div className="flex w-full image flex-col gap-5">
          <img
            src={
              "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            }
            alt={"product image"}
            className="w-full object-cover object-center"
          />
          <div className="imgs flex gap-4">
            <button className="active">
              <img
                src={
                  "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                alt={"product image"}
              />
            </button>
            <button>
              <img
                src={
                  "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                alt={"product image"}
              />
            </button>
            <button>
              <img
                src={
                  "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                alt={"product image"}
              />
            </button>
          </div>
        </div>
        <div className="info pl-12 max-md:pl-0 max-md:mt-5 w-full flex flex-col gap-4">
          <h1>LOGITECH Pop Mouse</h1>
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
              <h3>$24.29</h3>
              <span>$14.29</span>
            </div>
            <h4 className="text-green-600 font-medium text-lg">disc.6%</h4>
          </div>
          <div className="mt-7 get flex gap-4">
            <button className="min">-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="buyer flex justify-between mt-5 itemes-center">
            <div className="flex gap-4 items-center">
              <img
                src={
                  "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                className="rounded-full w-12 h-12"
                alt={"product image"}
              />
              <h5>Abderrahim aneddam</h5>
            </div>
            <button className="chat flex gap-1 items-center justify-center">
              <svg
                width={19}
                height={19}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#prefix__clip0_1446_1355)">
                  <path
                    d="M5.333 12h6.825l1.175.923V6H14a.667.667 0 01.667.667v9l-2.97-2.334H6a.667.667 0 01-.667-.666V12zm-1.696-1.333L.667 13V2.667A.667.667 0 011.333 2h10a.667.667 0 01.667.667v8H3.637z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0_1446_1355">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              Chat
            </button>
          </div>
        </div>
      </header>
      <div className="description mt-14">
        <h3>Desc</h3>
        <ul>
          <li>Wireless Mouse (Bluetooth 5.1)</li>
          <li>Sensor technology: Logitech High</li>
          <li>
            Precision Optical Tracking Dpi range: 1000-4000; nominal value 1000
          </li>
          <li>dpi 4 buttons Battery type: 1 x AA battery Main Unit</li>
        </ul>
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
