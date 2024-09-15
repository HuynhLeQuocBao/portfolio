import { FieldArrayWithId, UseFormRegister, FieldValues, UseFieldArrayAppend } from 'react-hook-form';
import { IEducation as EducationType } from  '../../interfaces/index';

interface EducationProps {
  register: UseFormRegister<FieldValues>;
  appendEducation:  (value: Partial<EducationType>) => void;
  educationFields: FieldArrayWithId<FieldValues, 'education', 'id'>[];
}

const Education: React.FC<EducationProps> = ({ register, appendEducation, educationFields }) => {
    return (
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
                        appendEducation({ schoolName: "", degree: "" })
                    }
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                    Add Education
                </button>
            </div>
        </div>
    )
}
export default Education;