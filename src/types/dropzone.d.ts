export type DropzoneProps = {
  className: string;
  // setFieldValue: FormikProps<unknown>["setFieldValue"];
  fieldName: string;
  resetFile: boolean;
  setImageId: (id: number) => void;
};

export type FileWithPreview = File & { preview: string };

export type FilePreviewProps = {
  rejected: FileRejection[];
  files: FileWithPreview[];
  removeFile: (string) => void;
  removeRejected: (string) => void;
  onSave: (file: File) => void;
};
