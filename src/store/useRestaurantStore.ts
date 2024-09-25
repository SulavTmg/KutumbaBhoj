import { create } from "zustand";
import { RestaurantStore } from "../types/restaurant";

const useRestaurantStore = create<RestaurantStore>((set) => ({
  restaurants: [],
  restaurant: null,
  searchQuery: "",
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));

export default useRestaurantStore;
