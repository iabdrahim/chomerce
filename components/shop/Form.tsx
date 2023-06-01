import React from "react";

export default function Form({
  data,
  setData,
  handle,
}: {
  data: any;
  setData: any;
  handle: any;
}) {
  //upload a image to cloud
  let handleUpload = async (e: any, i: any) => {
    console.log(i);
    console.log(e.target);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ilmamcdn");
    let config: RequestInit = {
      method: "POST",
      body: data,
    };
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgvxswr30/image/upload",
      config
    );
    const file = await res.json();
    if (i == 0) {
      setData((prv: any) => ({ ...prv, image: file.secure_url }));
    }
    if (i == 1) {
      setData((prv: any) => ({
        ...prv,
        images: { ...prv.images, img1: file.secure_url },
      }));
    }
    if (i == 2) {
      setData((prv: any) => ({
        ...prv,
        images: { ...prv.images, img2: file.secure_url },
      }));
    }
    if (i == 3) {
      setData((prv: any) => ({
        ...prv,
        images: { ...prv.images, img3: file.secure_url },
      }));
    }
    if (i == 4) {
      setData((prv: any) => ({
        ...prv,
        images: { ...prv.images, img4: file.secure_url },
      }));
    }
  };
  return (
    <form
      onSubmit={handle}
      className="w-full flex justify-betwwen items-start flex-row max-md:flex-col gap-6 mt-4"
    >
      <div className="side w-full flex flex-col gap-6 ">
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Wireless Mouse HP Z3700 Black"
            value={data.name}
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="des">Product description</label>
          <textarea
            name="des"
            required
            value={data.description}
            placeholder="describe your product..."
            cols={30}
            onChange={(e: any) =>
              setData({ ...data, description: e.target.value })
            }
            id=""
          ></textarea>
        </div>
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="price">Product price</label>
          <div className="relative flex items-center">
            <span className="absolute left-3">$</span>
            <input
              type="number"
              minLength={0}
              required
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 number dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="price"
              value={data.price}
              onChange={(e: any) => setData({ ...data, price: e.target.value })}
              id=""
            />
          </div>
        </div>
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="discount">
            discount
            <span className="text-gray-600 opacity-90 text-sm inline-block">
              (optinal)
            </span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3">%</span>
            <input
              max={100}
              min={0}
              type="number"
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 number dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="discount"
              value={data.discount}
              onChange={(e: any) =>
                setData({ ...data, discount: e.target.value })
              }
              id=""
            />
          </div>
        </div>

        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="specification">brand </label>
          <input
            name="specification"
            value={data.brand}
            required
            placeholder="HP"
            onChange={(e: any) => setData({ ...data, brand: e.target.value })}
            id=""
          />
        </div>
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
          <label htmlFor="catagorie">catagorie</label>
          <input
            name="catagorie"
            value={data.catagorie}
            placeholder="mouse..."
            onChange={(e: any) =>
              setData({ ...data, catagorie: e.target.value })
            }
            id=""
          />
        </div>
        <div>
          <button type="submit">Post product</button>
        </div>
      </div>
      <div className="side w-3/5 max-md:w-full">
        <label>product images</label>

        <div
          className={data.image ? "img relative hide" : "img relative"}
          style={data.image ? { backgroundImage: `url("${data.image}")` } : {}}
        >
          <label
            htmlFor="dropzone-file"
            className="flex h-full flex-col items-center justify-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mx-auto text-gray-500 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
              Product Image
            </h2>

            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
              Upload or darg & drop your file SVG, PNG, JPG or GIF.{" "}
            </p>

            <input
              id="dropzone-file"
              onInput={(e) => handleUpload(e, 0)}
              type="file"
              className="opacity-0 absolute left-0 top-0 w-full h-full"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div
            className={data.images.img1 ? "img relative hide" : "img relative"}
            style={
              data.images.img1
                ? { backgroundImage: `url("${data.images.img1}")` }
                : {}
            }
          >
            <label
              htmlFor="dropzone-file"
              className="flex h-full flex-col items-center justify-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Product Sub Image
              </h2>

              <input
                id="dropzone-file"
                onInput={(e) => handleUpload(e, 1)}
                type="file"
                className="opacity-0 absolute left-0 top-0 w-full h-full"
              />
            </label>
          </div>
          <div
            className={data.images.img2 ? "img relative hide" : "img relative"}
          >
            <label
              htmlFor="dropzone-file"
              className="flex h-full flex-col items-center justify-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Product Sub-Image
              </h2>

              <input
                id="dropzone-file"
                onInput={(e) => handleUpload(e, 9)}
                type="file"
                className="opacity-0 absolute left-0 top-0"
              />
            </label>
          </div>
          <div
            className={data.images.img3 ? "img relative hide" : "img relative"}
            style={
              data.images.img3
                ? { backgroundImage: `url("${data.images.img3}")` }
                : {}
            }
          >
            <label
              htmlFor="dropzone-file"
              className="flex h-full flex-col items-center justify-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Product Sub-Image
              </h2>

              <input
                id="dropzone-file"
                type="file"
                onInput={(e) => handleUpload(e, 3)}
                className="opacity-0 absolute left-0 top-0"
              />
            </label>
          </div>
          <div
            className={data.images.img4 ? "img relative hide" : "img relative"}
            style={
              data.images.img4
                ? { backgroundImage: `url("${data.images.img4}")` }
                : {}
            }
          >
            <label
              htmlFor="dropzone-file"
              className="flex h-full flex-col items-center justify-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-gray-500 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Product Sub-Image
              </h2>

              <input
                id="dropzone-file"
                type="file"
                onInput={(e) => handleUpload(e, 4)}
                className="opacity-0 absolute left-0 top-0"
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
