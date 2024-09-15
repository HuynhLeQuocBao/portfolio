"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={500} height={250} className="w-full h-[250px] object-cover" />
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

const ProjectComponent = ({projectName, technologies, demoLink, image}: {projectName:string, technologies:string, demoLink:string, image:string}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-up" className="flex flex-col h-full p-5 rounded-lg shadow shadow-orange-500 relative bg-white">
      <ProjectImage
        src={"https://ldnam-staging.selab.edu.vn" + image}
        alt="Not Found"
      />
      <ProjectTitle title={technologies} />
      <ProjectDescription description={projectName} />
      <a className="absolute bottom-5 right-5 py-3 px-5 bg-orange-400 text-white rounded-lg hover:bg-orange-600" href={demoLink} target="_blank">Visit</a>
    </div>
  );
};

export default ProjectComponent;