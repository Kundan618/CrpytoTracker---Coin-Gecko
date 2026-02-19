import React from "react";
import bannerImage from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-100 relative">
        <img src={bannerImage} alt="Banner" className="w-full h-full" />
        <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-5xl text-white">
              Crypto Tracker
            </div>
            <div className="font-semibold text-am text-white text-center">
              Get all info regarding cryptocurrencies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
