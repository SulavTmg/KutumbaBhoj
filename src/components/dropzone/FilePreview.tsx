import assets from "../../assets/assets";
import { FilePreviewProps } from "../../types/dropzone";
import Button from "../Button";
import { FileError } from "react-dropzone";

const FilePreview = ({
  rejected,
  files,
  removeFile,
  removeRejected,
  onSave,
}: FilePreviewProps) => {
  const {
    icons: { CloseIcon },
  } = assets;
  return (
    <div className="w-full mt-4">
      <ul className="px-3">
        {rejected.map(({ file, errors }) => (
          <li key={file.name}>
            <div className="bg-white w-fit p-3 rounded-md shadow-lg relative">
              <p>{file.name}</p>
              <ul>
                {errors.map((error: FileError) => (
                  <li key={error.code}>
                    <span className="text-red-500">{error.message}</span>
                  </li>
                ))}
              </ul>
              <img
                src={CloseIcon}
                className="absolute cursor-pointer size-4 -right-2 -top-2"
                onClick={() => removeRejected(file.name)}
              />
            </div>
          </li>
        ))}
        {files.map((file) => (
          <li key={file.name}>
            <div className="flex justify-between items-center">
              <div className="w-fit">
                <img
                  src={file.preview}
                  className="size-14 rounded-lg relative"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
                <span className="text-[10px]">{file.name}</span>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-white shadow-md border text-sm font-semibold w-[82px] h-[34px] rounded-md mr-4"
                  onClick={() => removeFile(file.name)}
                >
                  Cancel
                </button>
                <Button
                  type="button"
                  name="Save"
                  loadingSize="14"
                  loadingStroke="2"
                  className="bg-[#121BC6] text-white text-sm border shadow-md font-semibold w-[82px] h-[34px] rounded-md "
                  onClick={(e) => {
                    e.preventDefault();
                    onSave(file);
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilePreview;
