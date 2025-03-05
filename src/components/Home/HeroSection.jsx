import React from "react";
import backgroundbanner from "/assets/mainbanner.png";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <Link to="/products">
        <img
          src={backgroundbanner}
          alt="Background Banner"
          className="w-full object-cover cursor-pointer"
        />
      </Link>
    </>
  );
};

export default HeroSection;
