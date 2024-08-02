export type RestaurantDetails = {
  restaurantName: string;
  address: string;
  contact: string;
  restaurantOwner: string;
  ownerContactDetails: string;
  openingTime: string;
  closingTime: string;
  openingHours: string;
};
interface Image {
  Id: number;
  Name: string;
  Url: string;
}
interface Restaurant {
  Id: number;
  Name: string;
  Contact: string;
  OpeningHours: string;
  Address: string;
  Review: number;
  Joined: string;
  Images: Image[];
}
interface AddRestaurant {
  name: string;
  contact: string;
  openingHours: string;
  address: string;
  imageIds: number[];
}
export type Restaurant = {
  Id: number;
  Name: string;
  OpeningHours: string;
  Contact: string;
  Address: string;
  ImageIds: [];
};
export interface RestaurantStore {
  restaurants: Restaurant[];
  restaurant: Restaurant | null
  getRestaurants: () => Promise<void>;
  getRestaurant: (id: number) => Promise<void>;
  removeRestaurant: (id: number) => Promise< number | undefined>;
  addRestaurant: (restaurant: AddRestaurant) => Promise<unknown>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
