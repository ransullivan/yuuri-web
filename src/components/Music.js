import React from "react";
import MusicSlider from "./MusicSlider";

const Music = () => {
  return (
    <section id="music" className="section bg-tertiary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Music
          </h2>
        </div>
        <br />
        <br />
        <MusicSlider />
      </div>
    </section>
  );
};

export default Music;
