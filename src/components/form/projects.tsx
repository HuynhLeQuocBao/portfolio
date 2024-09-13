import { FieldArrayWithId, UseFormRegister, FieldValues } from 'react-hook-form';
import { Project as ProjectType } from  '../../interfaces/index';

interface ProjectsProps {
  register: UseFormRegister<FieldValues>;
  appendProject: (value: Partial<ProjectType>) => void;
  projectFields: FieldArrayWithId<FieldValues, 'projects', 'id'>[];
}
const Projects: React.FC<ProjectsProps> = ({ register, appendProject, projectFields }) => {
    return (
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
    );
  };
  export default Projects;
  