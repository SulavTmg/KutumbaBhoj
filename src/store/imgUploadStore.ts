import { create } from "zustand";
import { globalStore } from ".";
import { FetchAPI } from "../api/FetchAPI";
import { Img, ImgStore } from "../types/imgUploads";

const api = new FetchAPI();

const imgUploadStore = create<ImgStore>((set) => ({
  imgs: [],

  uploadImage: async (formData: FormData) => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.post<Img>("/ImgUploads", formData);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      return response.data;
    }
  },

  getImages: async () => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.get<Img[]>("/ImgUploads");
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      set({imgs: response.data})
    }
  },

}));

export default imgUploadStore;
