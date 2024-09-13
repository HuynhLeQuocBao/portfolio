import { FieldArrayWithId, UseFormRegister, FieldValues } from 'react-hook-form';
import { AwardCertificate as CertificateType } from  '../../interfaces/index';

interface CertificatesProps {
  register: UseFormRegister<FieldValues>;
  appendCertificate: (value: Partial<CertificateType>) => void;
  certificateFields: FieldArrayWithId<FieldValues, 'certificates', 'id'>[];
}

const Certificates: React.FC<CertificatesProps> = ({ register, appendCertificate, certificateFields }) => {
    return (
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
                  {...register(`certificates.${index}.name`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Issued By</span>
                <input
                  type="text"
                  {...register(`certificates.${index}.issuedBy`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Year</span>
                <input
                  type="text"
                  {...register(`certificates.${index}.year`)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 outline-none"
                />
              </label>
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
    );
  };
  export default Certificates;
  