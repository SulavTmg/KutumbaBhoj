import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { FileWithPreview, DropzoneProps } from "../../types/dropzone";
import { useGlobalStore, useImgUploadStore } from "../../store";
import Exclamation from "../common/icon/Exclamation";
import assets from "../../assets/assets";
import Modal from "../Modal";
import FilePreview from "./FilePreview";
import toast from "react-hot-toast";
import { useService } from "../../providers/ServiceProvider";

const Dropzone = ({
  className,
  fieldName,
  resetFile,
  previewUrl,
  setImageId,
  errorMsg,
}: DropzoneProps) => {
  const {
    icons: { UploadIcon },
  } = assets;
  const { imgService } = useService();
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);
  const [url, setUrl] = useState<string | null>(null);
  const [imgName, setImgName] = useState<string | null>(null);
  const error = useGlobalStore((state) => state.error);
  const { imgs } = useImgUploadStore();

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
      }
      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg"],
    },
    maxFiles: 1,
  });

  useEffect(() => {
    if (resetFile) {
      setFiles([]);
      setRejected([]);
      setUrl(null);
    }
  }, [resetFile]);

  const handleImageSelect = (id: number, url: string, name: string) => {
    setImageId(id);
    setUrl(url);
    setImgName(name);
    setOpen(false);
  };

  const handleSave = async (file: File) => {
    const formData = new FormData();
    formData.append("name", file.name.split(".")[0]);
    formData.append("Images", file);

    try {
      await imgService.uploadImage(formData);
      if (!error) {
        toast.success("Image successfully uploaded!");
        setFiles([]);
      } else {
        toast.error(error);
      }
    } catch (uploadError) {
      toast.error("Image upload failed");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <label
          htmlFor={fieldName}
          className="flex items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  <span className="font-semibold">
                    Click to upload{" "}
                    <span className="text-[#126837] font-bold">
                      {fieldName}
                    </span>
                  </span>{" "}
                  or drag and drop
                  <span className="text-xs text-center text-gray-500 dark:text-gray-400 block">
                    PNG, JPG
                  </span>
                </p>
              </>
            )}
          </div>
          <input name={fieldName} {...getInputProps()} />
        </label>
      </div>
      <div className="mt-2">
        <button
          type="button"
          onClick={async () => {
            setOpen(true);
            await imgService.getImages();
          }}
          className="flex flex-start border w-fit px-2 py-1 rounded-md text-sm shadow-md mb-2"
        >
          Choose Images
        </button>
        <Modal onClose={() => setOpen(false)} open={open}>
          <div className=" px-4 w-[480px] h-[400px] overflow-y-scroll -mx-6 -my-3">
            <ul className="grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-[40px] mt-8">
              {imgs.map((img, index) => (
                <li
                  key={index}
                  className=" cursor-pointer"
                  onClick={() => {
                    handleImageSelect(img.id, img.url, img.name!);
                  }}
                >
                  <img
                    src={`https://admin.kutumbabazar.com/foodapi${img.url}`}
                    alt={`${img.name}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Modal>
        {url ? (
          <div className="flex justify-between items-center">
            <div className="w-fit">
              <img
                src={`https://admin.kutumbabazar.com/foodapi${url}`}
                alt={`${imgName} main`}
                className="size-14 rounded-lg relative"
              />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-white shadow-md border text-sm font-semibold w-[82px] h-[34px] rounded-md mr-4"
                onClick={() => {
                  setUrl(null);
                  setImageId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : previewUrl ? (
          <div className="flex justify-between items-center">
            <div className="w-fit">
              <img
                src={`https://admin.kutumbabazar.com/foodapi${previewUrl}`}
                className="size-14 rounded-lg relative"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <FilePreview
        rejected={rejected}
        files={files}
        removeFile={removeFile}
        removeRejected={removeRejected}
        onSave={handleSave}
      />
      {errorMsg && (
        <div className="flex items-center text-[#CC3D3D] text-xs mt-1">
          <Exclamation
            fill="red"
            width="11px"
            className="mr-1 flex-shrink-0 border-[#CC3D3D]"
          />
          <span className="text-[#CC3D3D] text-[10px] mt-px leading-tight">
            {errorMsg}
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
