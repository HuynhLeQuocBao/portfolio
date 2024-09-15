"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const SkillImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={72} height={82} className="w-[72px] h-[82px]" />
);

const SkillTitle = ({ title }: { title: string }) => (
  <p className="text-[32px] my-4 leading-8 font-poppins font-semibold tracking-wide">
    {title}
  </p>
);

const SkillDescription = ({ description }: { description: string }) => (
  <p className="text-[19px] font-poppins font-normal tracking-wide">
    {description}
  </p>
);

const SkillComponent = ({title, description}:{title: string, description: string}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="flip-right"
      className="flex flex-col h-auto p-8 min-w-[20em] rounded-lg box-border max-w-xs bg-white border border-gray-500"
    >
      <SkillImage
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/96svfqy1wl8-1210%3A2793?alt=media&token=81d1c085-d19a-4ece-a14f-af90c485d8c3"
        alt="Not Found"
      />
      <SkillTitle title={title} />
      <SkillDescription description={description} />
    </div>
  );
};

export default SkillComponent;