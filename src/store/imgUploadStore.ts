import { create } from "zustand";
import { ImgStore } from "../types/imgUploads";

const imgUploadStore = create<ImgStore>(() => ({
  imgs: [],
}));

export default imgUploadStore;
