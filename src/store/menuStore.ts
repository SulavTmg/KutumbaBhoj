import { create } from "zustand";
import { globalStore } from ".";
import { FetchAPI } from "../api/FetchAPI";
import { AddCategory, Menu, MenuStore } from "../types/menu";
const api = new FetchAPI();

const menuStore = create<MenuStore>((set) => ({
  menu: null,
  
  getMenu: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.get<Menu[]>(`/restaurantmenu/${id}`);
    if (response.error) {
      globalState.setLoading(false);
      globalState.setError(response.error.message);
    } else {
      set({ menu: response.data?.length ? response.data[0] : null });
      globalState.setLoading(false);
    }
  },

  addCategory: async(data: AddCategory) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.post<AddCategory>("/menus", data);
    if (response.error) {
      globalState.setLoading(false);
      globalState.setError(response.error.message);
    } else {
      globalState.setLoading(false);
      return response.data;
    }
  },

  removeItem: async(id : number) => {
      const globalState = globalStore.getState();
      globalState.setLoading(true);
      globalState.setError(null);
      const response = await api.delete(`/menus/${id}`);
      if(response.error){
        globalState.setError(response.error.message);
        globalState.setLoading(false);
      }else{
        globalState.setLoading(false);
        return response.data as number ;
      }
  }


}));

export default menuStore;
