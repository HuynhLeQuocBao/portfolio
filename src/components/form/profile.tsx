import { UseFormRegister, FieldValues } from 'react-hook-form';

interface ProfileFormProps {
  register:UseFormRegister<FieldValues>;
}

const ProfileForm: React.FC<ProfileFormProps> = ({register}) => {
    return (
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
    )
}
export default ProfileForm;