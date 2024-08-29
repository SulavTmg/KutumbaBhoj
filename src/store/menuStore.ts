import { create } from "zustand";
import { MenuStore } from "../types/menu";

const menuStore = create<MenuStore>(() => ({
  menu: null,
  item: null,
}));

export default menuStore;
