import React from "react";

// import img
import Socials from "./Socials";
import yuuri from "../assets/img/Yuuri.webp";
import img_yuuri from "../assets/img/img_yuri.jpg";
const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 mt-10">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={img_yuuri}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-4 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Yuuri 優里
              </h2>
              <p className="mb-4 text-accent">
                Japanese singer-songwriter and YouTuber
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Born in Makuhari, Chiba Prefecture. A singer-songwriter with a
                powerful singing voice who sings all kinds of songs as "Yuri's
                world". <br /> <br />
                In June 2019, she posted her singing videos on Instagram,
                Twitter, and TikTok, and her singing videos were spread on SNS
                and YouTube, attracting her attention. he has been ranked high
                on his distribution site with “Hide and Seek” delivered on
                December 1, 2019.
              </p>
            </div>
            {/* <Socials /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
