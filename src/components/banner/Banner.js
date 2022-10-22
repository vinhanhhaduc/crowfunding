import IconBagIcon from "components/icons/IconBagIcon";
import React from "react";
const Banner = () => {
  return (
    <div className="bg-secondary w-[92%] h-[120px] rounded-[10px] mx-auto my-10">
      <div className="left-[5%] top-[33%] relative">
        <div className="flex items-center justify-start">
          <span>
            <IconBagIcon></IconBagIcon>
          </span>
          <p className="font-bold text-2xl text-white ml-5">
            You will get 90% of total raised
          </p>
        </div>
      </div>
      <img
        src="./Union.svg"
        alt=""
        className="left-[65%] relative bottom-[32%]"
      />
    </div>
  );
};

export default Banner;
