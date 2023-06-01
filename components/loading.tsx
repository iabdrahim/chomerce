import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = (props: any) => {
  return (
    <ContentLoader
      backgroundColor="#4d4d4d"
      backgroundOpacity={0.2}
      foregroundOpacity={0.2}
      viewBox="0 0 260 390"
      {...props}
    >
      {/* image */}
      <rect x="0" y="0" rx="5" ry="5" width="250" height="300" />
      {/* title */}
      <rect x="0" y="310" rx="4" ry="4" width="200" height="20" />
      {/* button */}
      <rect x="0" y="350" rx="14" ry="14" width="80" height="35" />
    </ContentLoader>
  );
};

const FullProductLoader = ({ ...rest }) => (
  <ContentLoader
    viewBox="0 0 261 431"
    backgroundColor="#4d4d4d"
    backgroundOpacity={0.2}
    foregroundOpacity={0.2}
    rtl
    {...rest}
  >
    {/* Title */}
    <rect x="0" y="0" rx="5" ry="5" width="250" height="10" />
    {/* Sub-info 1 */}
    <rect x="0" y="20" rx="2" ry="2" width="90" height="3" />
    {/* ser */}
    <rect x="0" y="27" rx="4" ry="4" width="200" height="19" />
    {/* image */}
    {/* <rect x="0" y="47" rx="2" ry="2" width="350" height="65" /> */}
    {/* Body */}
    <rect x="0" y="50" rx="4" ry="4" width="260" height="450" />
  </ContentLoader>
);

export default ProductLoader;
export { FullProductLoader };
