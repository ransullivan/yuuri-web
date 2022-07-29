import React from "react";

import banner from "../assets/img/banner_yuuri.jpg";

const Banner = () => {
  return (
    <section className="min-h-[146px] bg-zinc-100 ">
      <div className="items-center">
        <img className="items-center" src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
