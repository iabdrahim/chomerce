import Link from "next/link";
import React from "react";

export default function Profile({ isMake }: { isMake?: boolean }) {
  return (
    <div className="profile w-full flex justify-between mt-5 items-center gap-5">
      <Link href={"/shop/"}>
        <div className="flex gap-4 items-center justify-start">
          <img
            src={
              "https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
            className="rounded-full w-12 h-12"
            alt={"product image"}
          />
          <h5>Abderrahim Aneddam</h5>
        </div>
      </Link>
      <Link href={isMake ? "/shop/new" : "/shop"}>
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
          {isMake ? "new" : "shop"}
        </button>
      </Link>
    </div>
  );
}
