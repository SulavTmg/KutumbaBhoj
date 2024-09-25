import { create } from "zustand";
import { MenuStore } from "../types/menu";

const useMenuStore = create<MenuStore>(() => ({
  menu: null,
  item: null,
}));

export default useMenuStore;
