import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PathNav({ name }: { name: string }) {
  let { query } = useRouter();
  return (
    <div className="w-full">
      <ul className="flex gap-4 max-md:text-xs justify-start text-gray-400 items-center uppercase">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <li>
          <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={32} height={32} rx={16} fill="#fff" />
            <g clipPath="url(#prefix__clip0_230_7768)">
              <path
                d="M17.233 16.354l.353-.354-.353-.354-3.36-3.358.354-.354L18.293 16l-4.066 4.066-.353-.353 3.359-3.36z"
                fill="#09121F"
                stroke="gray"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0_230_7768">
                <path
                  fill="#fff"
                  transform="translate(7 7)"
                  d="M0 0h18v18H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <Link href={"/" + query.catagorie}>
          <li>{query.catagorie}</li>
        </Link>
        <li>
          <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={32} height={32} rx={16} fill="#fff" />
            <g clipPath="url(#prefix__clip0_230_7768)">
              <path
                d="M17.233 16.354l.353-.354-.353-.354-3.36-3.358.354-.354L18.293 16l-4.066 4.066-.353-.353 3.359-3.36z"
                fill="#09121F"
                stroke="gray"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0_230_7768">
                <path
                  fill="#fff"
                  transform="translate(7 7)"
                  d="M0 0h18v18H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li>{name}</li>
      </ul>
    </div>
  );
}
