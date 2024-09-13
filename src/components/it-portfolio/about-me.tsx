"use client"

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TextSection = () => (
  <div className="flex flex-col items-center md:w-1/2 xl:w-2/3 box-border">
    <div className="flex flex-col w-full h-auto box-border">
      <div className="flex flex-col w-full h-auto box-border">
        <p data-aos="fade-down" className="text-2xl font-semibold tracking-wider font-poppins">
          Hi I am
        </p>
        <p data-aos="fade-down" className="mt-2 highlight-text text-[32px] leading-8 font-semibold tracking-wide font-poppins">
          [Name]
        </p>
        <p data-aos="fade-up" className="text-6xl xl:text-[100px] xl:leading-[120%] font-bold tracking-wider font-poppins">
          Software
        </p>
        <p data-aos="fade-up" className="md:ml-40 text-6xl xl:text-[100px] xl:leading-[120%] font-bold tracking-wide font-poppins">
          Engineer
        </p>
      </div>
    </div>
    <p data-aos="fade-up" data-aos-duration="2000" className="mt-6 md:text-xl leading-6 font-normal tracking-wide font-poppins">
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
      lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
      pharetra.
    </p>
  </div>
);

const ImageSection = () => (
  <div data-aos="flip-left" className="flex flex-col items-center mt-10 md:mt-0">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/eopjsl8i9fb-1%3A236?alt=media&token=7b3a3aed-f77e-4bd1-9e28-b2c451e00e6b"
      alt="Not Found"
      className="w-full h-auto"
      loading="eager"
    />
    <div className="flex justify-center w-full mt-4">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/eopjsl8i9fb-1%3A242?alt=media&token=f2114610-e1ed-4aa1-ac3b-00d3c49994ea"
        alt="Not Found"
        className="w-[205px] h-[32px]"
      />
    </div>
  </div>
);

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className="mt-20 md:mt-10 p-4 md:p-10 xl:p-20 w-full h-auto">
      <div className="flex flex-col w-full pb-px box-border">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto pb-px box-border">
          <TextSection />
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
