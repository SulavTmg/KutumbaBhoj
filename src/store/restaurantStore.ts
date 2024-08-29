import { create } from "zustand";
import { RestaurantStore } from "../types/restaurant";

const restaurantStore = create<RestaurantStore>((set) => ({
  restaurants: [],
  restaurant: null,
  searchQuery: "",
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));

export default restaurantStore;
