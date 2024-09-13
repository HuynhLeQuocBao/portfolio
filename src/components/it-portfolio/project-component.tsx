"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={500} height={250} className="w-full h-[250px] object-cover" />
);

const ProjectTitle = ({ title }: { title: string }) => (
  <p className="highlight-text my-3 font-poppins font-normal">
    {title}
  </p>
);

const ProjectDescription = ({ description }: { description: string }) => (
  <p className="border-[#000000ff] text-2xl font-poppins font-bold">
    {description}
  </p>
);

const ProjectComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-up" className="flex flex-col h-full p-5 rounded-lg shadow shadow-slate-500">
      <ProjectImage
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmb1ipi3ycl-3203%3A962?alt=media&token=01fbc310-b202-4c51-84eb-a97ff0df842a"
        alt="Not Found"
      />
      <ProjectTitle title="Web Design" />
      <ProjectDescription description="AirCalling Landing Page Design" />
    </div>
  );
};

export default ProjectComponent;