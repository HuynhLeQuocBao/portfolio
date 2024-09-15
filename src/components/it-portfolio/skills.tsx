"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillComponent from "./skill-component";
import { TechnicalSkill } from "@/interfaces";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center w-full pb-10">
    <p data-aos="fade-up" className="text-5xl xl:text-6xl font-semibold font-poppins text-center">{title}</p>
    <p data-aos="fade-down" className="text-lg font-normal font-poppins text-center tracking-wide mt-4">
      {description}
    </p>
  </div>
);

const SkillList = ({ skills }: { skills: TechnicalSkill[]|undefined }) => (
  <div className="w-full flex justify-center gap-5 flex-wrap">
    {skills?.map((item, index) => (
      <SkillComponent key={index} title={item.title} description={item.description}/>
    ))}
  </div>
);

const Skills = ({technicalSkills} : {technicalSkills: TechnicalSkill[]|undefined}) => {

  const title = "Skills";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center px-4 py-10 md:p-10 xl:p-20 w-full h-auto bg-white"
    >
      <SectionTitle title={title} description={''} />
      <SkillList skills={technicalSkills} />
    </div>
  );
};

export default Skills;
