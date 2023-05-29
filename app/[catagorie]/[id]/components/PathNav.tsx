"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PathNav() {
  const params = useParams();
  return (
    <div className="w-full">
      <ul
        className="flex ga
      p-4 justify-start text-gray-400 items-center uppercase"
      >
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
        <Link href={"/" + params.catagorie}>
          <li>{params.catagorie}</li>
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
        <li>{params.id}</li>
      </ul>
    </div>
  );
}
