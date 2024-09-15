"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { WorkExperience } from "@/interfaces";

const MyWorkExperience = ({
  experience,
}: {
  experience: WorkExperience[] | undefined;
}) => {
  const title = "My Work Experience";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="experience"
      className="overflow-x-hidden max-w-[1600px] mx-auto flex flex-col justify-center items-center px-4 py-10 md:p-10 xl:p-20 w-full h-auto bg-orange-50"
    >
      <div className="flex flex-col items-center w-full pb-10">
        <p
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-semibold font-poppins text-center"
        >
          {title}
        </p>
      </div>

      <div className={`grid grid-cols-1 gap-10 place-items-center ${(experience?.length ?? 0) > 1 && 'xl:grid-cols-2'}`}>
        {experience?.map((item, index) => {
          return (
            <div
              data-aos="flip-up"
              className="h-full flex flex-col gap-5 p-5 shadow shadow-orange-600 bg-white rounded-lg"
              key={index}
            >
              <div className="flex items-center justify-between">
                <p className="flex items-center justify-start text-xl xl:text-4xl mr-2 font-bold leading-none text-orange-500 w-2/3">
                  <img
                    src="/assets/images/company-logo.jpg"
                    className="w-10 h-10 object-cover mr-5"
                    alt=""
                  />
                  {item.companyName}
                </p>
                <p className="text-orange-500 leading-none font-medium flex items-center justify-end">
                  <img
                    src="/assets/images/time.jpg"
                    className="h-5 object-cover mr-2"
                    alt=""
                  />
                  {item.duration}
                </p>
              </div>

              <div className="block mt-3">
                <p className="text-2xl font-semibold">{item.position}</p>
                <p className="mt-5 text-justify">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorkExperience;
