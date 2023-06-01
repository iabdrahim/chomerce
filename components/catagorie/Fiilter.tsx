import React from "react";
import IProduct from "../../utils/productType";

import MainProducts from "../../components/MainProducts";

export default function Filter({
  data,
  isLoading,
}: {
  data: any;
  isLoading?: boolean;
}) {
  return (
    <>
      <div className="flex justify-between max-md:flex-col mt-7 items-start relative w-full">
        <div className="filter w-full h-12 absolute right-0 top-0 flex justify-end items-center gap-4">
          Sort By
          <button className="flex justify-center gap-2 items-center">
            Newest
            <svg
              width={18}
              height={11}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.419 9.207c-.834.963-1.251 1.445-1.747 1.622-.434.155-.91.155-1.344 0-.496-.177-.913-.659-1.747-1.622L3.193 5.295C1.735 3.612 1.007 2.77.986 2.057A2 2 0 011.72.452C2.272 0 3.385 0 5.612 0h6.776c2.227 0 3.34 0 3.892.452a2 2 0 01.734 1.605c-.02.713-.75 1.555-2.207 3.238l-3.388 3.912z"
                fill="#B3B3B3"
              />
            </svg>
          </button>
        </div>
        <aside className="w-60 sticky max-md:static flex flex-col justify-start items-start gap-4">
          <h3>Brand</h3>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              name="check"
              className="accent-orange-400 w-4 h-4"
              id="checkit"
            />
            <label htmlFor="checkit">dell</label>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              name="check"
              className="accent-orange-400 w-4 h-4"
              id="checkit"
            />
            <label htmlFor="checkit">appel</label>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              name="check"
              className="accent-orange-400 w-4 h-4"
              id="checkit"
            />
            <label htmlFor="checkit">hp</label>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              name="check"
              className="accent-orange-400 w-4 h-4"
              id="checkit"
            />
            <label htmlFor="checkit">microsoft</label>
          </div>
        </aside>
        <MainProducts isGrid3={true} products={data} isLoading={isLoading} />
      </div>
    </>
  );
}
