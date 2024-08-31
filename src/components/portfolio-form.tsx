"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { FC } from "react";
import { FormData } from "../interfaces";

const ProfileForm: FC = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      profile: {
        title: "",
        image: "",
        summary: "",
      },
      technicalSkills: {
        programmingLanguages: [""],
        frameworksLibraries: [""],
        tools: [""],
        others: [""],
      },
      education: [{ schoolName: "", degree: "", major: "" }],
      workExperience: [
        { companyName: "", position: "", duration: "", description: "" },
      ],
      projects: [
        {
          projectName: "",
          description: "",
          technologies: [""],
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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 space-y-4 w-full"
    >
      <h2 className="text-2xl font-bold">Profile</h2>
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            {...register("profile.title")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Image URL</span>
          <input
            type="text"
            {...register("profile.image")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Summary</span>
          <textarea
            {...register("profile.summary")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none h-32"
          />
        </label>
      </div>

      {/* Technical Skills */}
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-700">Programming Languages</span>
          <input
            type="text"
            {...register("technicalSkills.programmingLanguages.0")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Frameworks/Libraries</span>
          <input
            type="text"
            {...register("technicalSkills.frameworksLibraries.0")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Tools</span>
          <input
            type="text"
            {...register("technicalSkills.tools.0")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Others</span>
          <input
            type="text"
            {...register("technicalSkills.others.0")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
          />
        </label>
      </div>

      {/* Education */}
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="space-y-4">
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

      {/* Work Experience */}
      <h2 className="text-2xl font-bold">Work Experience</h2>
      {/* Similar structure to Education */}

      {/* Projects */}
      <h2 className="text-2xl font-bold">Projects</h2>
      {/* Similar structure to Education */}

      {/* Awards & Certificates */}
      <h2 className="text-2xl font-bold">Awards & Certificates</h2>
      {/* Similar structure to Education */}

      {/* Publications & Talks */}
      <h2 className="text-2xl font-bold">Publications & Talks</h2>
      {/* Similar structure to Education */}

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

export default ProfileForm;
