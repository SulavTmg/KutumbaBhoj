import { create } from "zustand";
import { ImgStore } from "../types/imgUploads";

const useImgUploadStore = create<ImgStore>(() => ({
  imgs: [],
}));

export default useImgUploadStore;
