"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IEducation } from "@/interfaces";
import Image from "next/image";

type Props = {
  education: IEducation[] | undefined;
};

const EducationItem = ({ item, image }: { item: string, image: string }) => {
  return (
    <div data-aos="flip-right" className="flex flex-col items-center w-full justify-center shadow shadow-orange-500 rounded-lg p-5 bg-white">
      <div className="text-3xl text-orange-400 mb-4">{item}</div>
      <Image
        src={image}
        alt={item}
        width={200}
        height={200}
        className="w-full h-[200px] object-cover"
      />
    </div>
  )
}

const Education = ({ education }: Props) => {
  const title = "My Education";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="education"
      className="max-w-[1600px] mx-auto flex flex-col justify-center items-center px-4 py-10 md:p-10 xl:p-20 w-full h-auto bg-orange-50"
    >
      <div className="flex flex-col items-center w-full pb-10">
        <p
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-semibold font-poppins text-center"
        >
          {title}
        </p>
      </div>

      {education?.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
            <EducationItem item={item.schoolName} image="/assets/images/university.jpg" />
            <EducationItem item={item.degree + ' Degree'} image="/assets/images/degree.png" />
          </div>
        );
      })}
    </div>
  );
};

export default Education;
