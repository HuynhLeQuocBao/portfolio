"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { FC } from "react";
import { FormData } from "../interfaces";
import  ProfileForm  from "./form/profile";
import  TechnicalSkills  from "./form/technicalskills";
import  Education  from "./form/education";
import  WorkExperience  from "./form/workexperience";
import Projects from "./form/projects";
import Certificates from "./form/certificates";
const PortfolioForm: FC = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      profile: {
        title: "",
        image: "",
        summary: "",
      },
      technicalSkills: [{ skill: 0, description: "", subname: "" }],

      education: [{ schoolName: "", degree: "", major: "" }],
      workExperience: [
        { companyName: "", position: "", duration: "", description: "" },
      ],
      projects: [
        {
          projectName: "",
          description: "",
          technologies: "",
          demoLink: "",
          achievements: "",
        },
      ],
      awardsCertificates: [{ name: "", issuedBy: "", year: "" }],
      publicationsTalks: [{ title: "", link: "" }],
      contact: { email: "", phone: "", linkedin: "", github: "" },
    },
  });

  const { fields: educationFields, append: appendEducation } = useFieldArray({
    control,
    name: "education",
  });
  const { fields: technicalSkillsFields, append: appendSkill } = useFieldArray({
    control,
    name: "technicalSkills"
  });
  const { fields: workExperienceFields, append: appendWorkExperience } = useFieldArray({
    control,
    name: "workExperience"
  });
  const { fields: projectFields, append: appendProject } = useFieldArray({
    control,
    name: "projects"
  });
  const { fields: certificateFields, append: appendCertificate } = useFieldArray({
    control,
    name: "awardsCertificates"
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 space-y-4 w-full"
    >
      {/* <ProfileForm register = {register} />

      <TechnicalSkills register={register} appendSkill={appendSkill} technicalSkillsField={technicalSkillsFields} />

      <Education register={register} appendEducation={appendEducation} educationFields={educationFields} />

      <WorkExperience register={register} appendWorkExperience={appendWorkExperience} workExperienceFields={workExperienceFields}/>

      <Projects register={register} appendProject={appendProject} projectFields={projectFields} />
      <Certificates register={register} appendCertificate={appendCertificate} certificateFields={certificateFields} /> */}
       <div>
            <h2 className="text-2xl font-bold">Profile</h2>
            <div className="space-y-2">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        {...register("profile.title")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Image URL</span>
                    <input
                        type="file"
                        {...register("profile.image")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Bio</span>
                    <textarea
                        {...register("profile.summary")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none h-32"
                    />
                </label>
            </div>
        </div>
        <div>
            {/* Technical Skills */}
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="space-y-2">
                {technicalSkillsFields.map((item, index) => (
                    <div
                        key={item.id}
                        className="space-y-2 border p-4 rounded-md shadow-sm"
                    >
                        <label className="block">
                            <span className="text-gray-700">Skill</span>

                            <select {...register(`technicalSkills.${index}.skill`)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none">
                                <option>Programming Languages</option>
                                <option>JavaScript</option>
                                <option>Python</option>
                                <option>Java</option>
                                <option>C#</option>
                                <option>PHP</option>
                                <option>Ruby</option>
                                <option>Swift</option>
                                <option>Kotlin</option>
                                <option>Go</option>
                                <option>Scala</option>
                                <option>Rust</option>
                                <option>Perl</option>
                                <option>Objective-C</option>
                                <option>SQL</option>
                                <option>HTML</option>
                                <option>CSS</option>
                                <option>Other</option>
                            </select>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Description</span>
                            <input
                                type="text"
                                {...register(`technicalSkills.${index}.description`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Subname</span>
                            <input
                                type="text"
                                {...register(`technicalSkills.${index}.subname`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                    </div>
                )
                )}
                <button
                    type="button"
                    onClick={() =>
                        appendSkill({ skill: 0, description: "", subname: "" })
                    }
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                    Add Skill
                </button>
            </div>
        </div>
        <div>
            {/* Education */}
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="space-y-4 mt-10 ">
                {educationFields.map((item, index) => (
                    <div
                        key={item.id}
                        className="space-y-2 border p-4 rounded-md shadow-sm"
                    >
                        <label className="block">
                            <span className="text-gray-700">School Name</span>
                            <input
                                type="text"
                                {...register(`education.${index}.schoolName`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Degree</span>
                            <input
                                type="text"
                                {...register(`education.${index}.degree`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Major</span>
                            <input
                                type="text"
                                {...register(`education.${index}.major`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        appendEducation({ schoolName: "", degree: "", major: "" })
                    }
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                    Add Education
                </button>
            </div>
        </div>
        <div>
        {/* Projects */}
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="space-y-4 mt-10">
          {projectFields.map((item, index) => (
            <div
              key={item.id}
              className="space-y-2 border p-4 rounded-md shadow-sm"
            >
              <label className="block">
                <span className="text-gray-700">Project Name</span>
                <input
                  type="text"
                  {...register(`projects.${index}.projectName`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                  {...register(`projects.${index}.description`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Technologies</span>
                <input
                  type="text"
                  {...register(`projects.${index}.technologies`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Demo Link</span>
                <input
                  type="text"
                  {...register(`projects.${index}.demoLink`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Achievements</span>
                <textarea
                  {...register(`projects.${index}.achievements`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendProject({ projectName: "", description: "", technologies: "", demoLink: "", achievements: "" })
            }
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Add Project
          </button>
        </div>
      </div>
      {/* Contact */}
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            {...register("contact.email")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone</span>
          <input
            type="tel"
            {...register("contact.phone")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">LinkedIn</span>
          <input
            type="text"
            {...register("contact.linkedin")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">GitHub</span>
          <input
            type="text"
            {...register("contact.github")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default PortfolioForm;
