export type DropzoneProps = {
  className: string;
  fieldName: string;
  resetFile: boolean;
  previewUrl?: string;
  errorMsg?: string,
  setImageId: (id: number | null) => void;
};

export type FileWithPreview = File & { preview: string };

export type FilePreviewProps = {
  rejected: FileRejection[];
  files: FileWithPreview[];
  removeFile: (string) => void;
  removeRejected: (string) => void;
  onSave: (file: File) => void;
};
