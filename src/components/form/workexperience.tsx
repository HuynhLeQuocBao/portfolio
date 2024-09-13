import { FieldArrayWithId, UseFormRegister, FieldValues } from 'react-hook-form';
import { WorkExperience as WorkExperienceType } from '../../interfaces/index';

interface WorkExperienceProps {
  register:UseFormRegister<FieldValues>;
  appendWorkExperience: (value: Partial<WorkExperienceType>) => void;
  workExperienceFields: FieldArrayWithId<FieldValues, 'workExperience', 'id'>[];
}
const WorkExperience: React.FC<WorkExperienceProps> = ({ register, appendWorkExperience, workExperienceFields }) => {
    return (
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
    );
  };
  export default WorkExperience;