import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { FormikProps } from "formik";
import assets from "../../assets/assets";
import Exclamation from "../common/icon/Exclamation";

type DropzoneProps = {
  className: string;
  setFieldValue: FormikProps<unknown>["setFieldValue"];
  fieldName: string;
  errMsg: string | null;
  resetFile: boolean;
};

type FileWithPreview = File & { preview: string };

const Dropzone = ({
  className,
  setFieldValue,
  fieldName,
  errMsg,
  resetFile,
}: DropzoneProps) => {
  const {
    icons: { UploadIcon, CLoseIcon },
  } = assets;

  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles?.length) {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        );
        setFieldValue(fieldName, acceptedFiles);
      }
      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }
    },
    [fieldName, setFieldValue]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,

    accept: {
      "image/*": [".png", ".jpg", ".svg"],
    },
    maxFiles: 1,
  });

  useEffect(() => {
    if (resetFile) {
      setFiles([]);
      setRejected([]);
    }
  }, [resetFile]);

  return (
    <div className="flex flex-col w-full">
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <label
          htmlFor={fieldName}
          className="flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <img src={UploadIcon} />
            {isDragActive ? (
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Drop files here</span>
              </p>
            ) : (
              <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                  <span className="text-xs text-center text-gray-500 dark:text-gray-400 block">
                    SVG, PNG, JPG
                  </span>
                </p>
              </>
            )}
          </div>
          <input name={fieldName} {...getInputProps()} />
        </label>
      </div>
      <div className="w-full mt-4">
        <ul className="px-3">
          {rejected.map(({ file, errors }) => (
            <li key={file.name}>
              <div className="bg-white w-fit p-3 rounded-md shadow-lg relative">
                <p>{file.name}</p>
                <ul>
                  {errors.map((error) => (
                    <li key={error.code}>
                      <span className="text-red-500">{error.message}</span>
                    </li>
                  ))}
                </ul>
                <img
                  src={CLoseIcon}
                  className="absolute cursor-pointer size-4 -right-2 -top-2"
                  onClick={() => removeRejected(file.name)}
                />
              </div>
            </li>
          ))}
          {files.map((file) => (
            <li key={file.name}>
              <div className="w-fit relative">
                <img
                  src={file.preview}
                  className="size-14 rounded-lg relative"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
                <span className="text-[10px]">{file.name}</span>
                <img
                  className="absolute z-20 -right-3 -top-2 cursor-pointer"
                  src={CLoseIcon}
                  onClick={() => removeFile(file.name)}
                />
              </div>
            </li>
          ))}
          {errMsg ? (
            <div className="flex items-center text-[#CC3D3D] text-xs mt-1">
              <Exclamation
                fill="red"
                width="11px"
                className="mr-1 flex-shrink-0 border-[#CC3D3D]"
              />
              <span className="text-[#CC3D3D] text-[10px] mt-px leading-tight">
                {errMsg}
              </span>
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropzone;
