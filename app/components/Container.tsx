// import SEO from "@/components/Common/SEO";
import React from "react";
import ECOMMERCE from "../../ECOMMERCE.config";

function Container({
  children,
  fullWidth,
  customMeta,
  className,
}: {
  children: any;
  fullWidth?: boolean;
  customMeta?: {};
  className?: string;
}) {
  const meta = {
    title: ECOMMERCE.title,
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <main
        className={`m-auto flex-grow w-full transition-all flex h-full justify-start flex-col items-start ${
          !fullWidth ? "max-w-5xl px-4 mx-auto" : "px-4 md:px-24"
        } ${!className ? "" : className}`}
      >
        {children}
      </main>
    </>
  );
}
export default Container;
