import React from "react";

export default function Form({ data, setData }: { data: any; setData: any }) {
  return (
    <div className="w-full flex justify-betwwen items-start">
      <div className="side w-full flex flex-col">
        <div className="flex justify-between items-center">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name">Product description:</label>
          <textarea
            name=""
            value={data.description}
            onChange={(e: any) =>
              setData({ ...data, description: e.target.value })
            }
            id=""
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="name">Product Name:</label>
          <input
            type="number"
            name=""
            value={data.price}
            onChange={(e: any) => setData({ ...data, price: e.target.value })}
            id=""
          />
        </div>
      </div>
      <div className="side w-full">
        <h3 className="text-xl text-gray-700">image</h3>
      </div>
    </div>
  );
}
