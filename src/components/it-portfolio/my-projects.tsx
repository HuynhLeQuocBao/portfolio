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
    <p data-aos="fade-down" className="text-5xl md:text-6xl font-semibold font-poppins text-center">{title}</p>
    <p data-aos="fade-up" className="text-lg font-normal font-poppins text-center tracking-wide mt-4">
      {description}
    </p>
  </div>
);

const ProjectList = ({ projects }: { projects: Project[]|undefined }) => (
  <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3 w-full">
    {projects?.map((item, index) => (
      <ProjectComponent key={index} projectName={item.projectName} technologies={item.technologies} demoLink={item.demoLink} image={item.image} />
    ))}
  </div>
);

const Projects = ({projects}:{projects: Project[]|undefined}) => {
  const title = "My Projects";
  const description =
    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <div
      id="projects"
      className="flex flex-col justify-start items-start p-4 md:p-10 xl:p-20 w-full h-auto bg-white"
    >
      <SectionTitle title={title} description={""} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
