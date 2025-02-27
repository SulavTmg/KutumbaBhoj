import { create } from "zustand";
import { globalStore } from ".";
import {
  AddRestaurant,
  Restaurant,
  RestaurantStore,
} from "../types/restaurant";
import { FetchAPI } from "../api/FetchAPI";

const api = new FetchAPI();

const restaurantStore = create<RestaurantStore>((set, get) => ({
  restaurants: [],
  searchQuery: "",

  getRestaurants: async () => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);

    const search = get().searchQuery;
    const response = await api.get<Restaurant[]>(
      `/restaurants${search ? `/search?searchTerm=${search}` : ""}`
    );
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      set({ restaurants: response.data || [] });
      globalState.setLoading(false);
    }
  },

  addRestaurant: async (restaurant: AddRestaurant) => {
    const globalState = globalStore.getState();
    globalState.setLoading(true);
    globalState.setError(null);
    const response = await api.post<AddRestaurant>("/restaurants", restaurant);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getRestaurants();
      return response.data;
    }
  },

  removeRestaurant: async (id: number) => {
    const globalState = globalStore.getState();
    globalState.setError(null);
    globalState.setLoading(true);
    const response = await api.delete(`/restaurants/${id}`);
    if (response.error) {
      globalState.setError(response.error.message);
      globalState.setLoading(false);
    } else {
      globalState.setLoading(false);
      get().getRestaurants();
      return response.data as number;
    }
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().getRestaurants();
  },
}));

export default restaurantStore;
