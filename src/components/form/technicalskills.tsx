import { FieldArrayWithId, UseFormRegister, FieldValues } from 'react-hook-form';
import { TechnicalSkill as TechnicalSkill } from  '../../interfaces/index';

interface TechnicalSkillsProps {
  register: UseFormRegister<FieldValues>;
  appendSkill: (value: Partial<TechnicalSkill>) => void;
  technicalSkillsField: FieldArrayWithId<FieldValues, 'technicalSkills', 'id'>[];
}

const TechnicalSkills: React.FC<TechnicalSkillsProps>= ({ register, appendSkill, technicalSkillsField }) => {
    return (
        <div>
            {/* Technical Skills */}
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="space-y-2">
                {technicalSkillsField.map((item, index) => (
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
    )
}
export default TechnicalSkills;