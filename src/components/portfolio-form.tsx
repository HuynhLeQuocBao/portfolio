"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { FC, useRef } from "react";
import { MyFormData } from "../interfaces";
import * as FormDataUpload from 'form-data'
import axios from 'axios'; // Import axios for HTTP requests
const PortfolioForm: FC = () => {
  const { register, control, handleSubmit, setValue } = useForm<MyFormData>({
    defaultValues: {
      profile: {
        name: "",
        image: "",
        bio: "",
      },
      technicalSkills: [{ title: "", description: "" }],

      education: [{ schoolName: "", degree: "", major: "" }],
      workExperience: [
        { companyName: "", position: "", duration: "", description: "" },
      ],
      projects: [
        {
          projectName: "",
          technologies: "",
          demoLink: "",
          image: "",
        },
      ],
      awardsCertificates: [{ name: "", issuedBy: "", year: "" }],
      publicationsTalks: [{ title: "", link: "" }],
      contact: { email: "", phone: "", linkedin: "", github: "" },
    },
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: "education",
  });
  const { fields: technicalSkillsFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "technicalSkills"
  });
  const { fields: workExperienceFields, append: appendWorkExperience, remove: removeWorkExperience } = useFieldArray({
    control,
    name: "workExperience"
  });
  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: "projects"
  });
  const { fields: certificateFields, append: appendCertificate,  remove: removeCertificate } = useFieldArray({
    control,
    name: "awardsCertificates"
  });
  const onSubmit = async (data: MyFormData) => {
    try {
      console.log(data)
      await axios.post('/api/submit', data);
     // alert('Data saved successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      //alert('Failed to save data');
    }
  };
  const fileInput = useRef<HTMLInputElement>(null);
  const uploadFile = async (
    file: File|null, callback: (url: string)=> void
  )=> {
    if  (file === null)
      return;
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/upload", formData);

    console.log(response);
    callback(response.data.url)
  }
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
                <label className="block">
                    <span className="text-gray-700">Portfolio ID</span>
                    <input
                        type="text"
                        placeholder="Example: ldnam, hlqbao, mhphuc, dkhuyen,..."
                        {...register("portfolioId")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
            <h2 className="text-2xl font-bold">Profile</h2>
            <div className="space-y-2">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        {...register("profile.name")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Image URL</span>
                    <input
                    
                        type="file"
                        onChange ={  (e) => {
                          if (e !== null && e.target !== null &&e.target.files !== null && e.target.files?.length > 0){
                            uploadFile(e.target.files[0], (url)=>{
                              console.log(url)
                              setValue("profile.image", url)
                            })
                          }
                          
                        }}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                    <input
                    
                        type="hidden"
                        {...register("profile.image")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Bio</span>
                    <textarea
                        {...register("profile.bio")}
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
                            <span className="text-gray-700">Framework/Tool/Language</span>
                            <input
                                type="text"
                                {...register(`technicalSkills.${index}.title`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                            
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Description</span>
                            <input
                                type="text"
                                {...register(`technicalSkills.${index}.description`)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                            />
                        </label>
                         {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => removeSkill(index)} // Call removeSkill to remove the item at index
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                    </div>
                )
                )}
                <button
                    type="button"
                    onClick={() =>
                        appendSkill({ title: "", description: "" })
                    }
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                    Add Skill
                </button>
            </div>
        </div>
        <div>
        {/* Certificates */}
        <h2 className="text-2xl font-bold">Certificates</h2>
        <div className="space-y-4 mt-10">
          {certificateFields.map((item, index) => (
            <div
              key={item.id}
              className="space-y-2 border p-4 rounded-md shadow-sm"
            >
              <label className="block">
                <span className="text-gray-700">Certificate Name</span>
                <input
                  type="text"
                  {...register(`awardsCertificates.${index}.name`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Issued By</span>
                <input
                  type="text"
                  {...register(`awardsCertificates.${index}.issuedBy`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Year</span>
                <input
                  type="text"
                  {...register(`awardsCertificates.${index}.year`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              {/* Remove button */}
              <button
                          type="button"
                          onClick={() => removeCertificate(index)} // Call removeSkill to remove the item at index
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendCertificate({ name: "", issuedBy: "", year: "" })
            }
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Add Certificate
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
                         {/* Remove button */}
                         <button
                          type="button"
                          onClick={() => removeEducation(index)} // Call removeSkill to remove the item at index
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
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
        <div>
        {/* Work Experience */}
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="space-y-4 mt-10">
          {workExperienceFields.map((item, index) => (
            <div
              key={item.id}
              className="space-y-2 border p-4 rounded-md shadow-sm"
            >
              <label className="block">
                <span className="text-gray-700">Company Name</span>
                <input
                  type="text"
                  {...register(`workExperience.${index}.companyName`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Position</span>
                <input
                  type="text"
                  {...register(`workExperience.${index}.position`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Duration</span>
                <input
                  type="text"
                  {...register(`workExperience.${index}.duration`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                  {...register(`workExperience.${index}.description`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              {/* Remove button */}
              <button
                    type="button"
                    onClick={() => removeProject(index)} // Call removeSkill to remove the item at index
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendWorkExperience({ companyName: "", position: "", duration: "", description: "" })
            }
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Add Work Experience
          </button>
        </div>
      </div>
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
                    <span className="text-gray-700">Picture</span>
                    <input
                    
                        type="file"
                        onChange ={  (e) => {
                          if (e !== null && e.target !== null &&e.target.files !== null && e.target.files?.length > 0){
                            uploadFile(e.target.files[0], (url)=>{
                              console.log(url)
                              setValue(`projects.${index}.image`, url)
                            })
                          }
                          
                        }}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                    <input
                    
                        type="hidden"
                        {...register(`projects.${index}.image`)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                    />
                </label>
                {/* Remove button */}
                <button
                    type="button"
                    onClick={() => removeProject(index)} // Call removeSkill to remove the item at index
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendProject({ projectName: "", technologies: "", demoLink: "", image: "" })
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
