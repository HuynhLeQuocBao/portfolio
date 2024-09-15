"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectComponent from "./project-component";
import { Project } from "@/interfaces";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center w-full pb-10">
    <p data-aos="fade-up" className="text-5xl md:text-6xl font-semibold font-poppins text-center">{title}</p>
    <p data-aos="fade-down" className="text-lg font-normal font-poppins text-center tracking-wide mt-4">
      {description}
    </p>
  </div>
);

const ProjectList = ({ projects }: { projects: Project[]|undefined }) => (
  <div className="w-full flex items-end justify-center gap-5 flex-wrap ">
    {projects?.map((item, index) => (
      <ProjectComponent key={index} projectName={item.projectName} technologies={item.technologies} demoLink={item.demoLink} image={item.image} />
    ))}
  </div>
);

const Projects = ({projects}:{projects: Project[]|undefined}) => {
  const title = "My Projects";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <div
      id="projects"
      className="max-w-[1600px] mx-auto flex flex-col justify-start items-start px-4 py-10 md:p-10 xl:p-20 w-full h-auto bg-white"
    >
      <SectionTitle title={title} description={""} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
