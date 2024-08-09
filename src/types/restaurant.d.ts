export type RestaurantDetails = {
  restaurantName: string;
  address: string;
  contact: string;
  restaurantOwner: string;
  ownerContactDetails: string;
  openingTime: string;
  closingTime: string;
  openingHours: string;
  logoId: number | null;
  bannerId: number | null;
  imageIds: [];
};

export interface Image {
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
  imageIds?: (number | null)[];
}

export type UpdateRestaurant = {
  id: number;
  name: string;
  openingHours: string;
  contact: string;
  address: string;
  imageIds: (number | null)[];
};

export interface RestaurantStore {
  restaurants: Restaurant[];
  restaurant: Restaurant | null;
  getRestaurants: () => Promise<void>;
  getRestaurant: (id: number) => Promise<void>;
  removeRestaurant: (id: number) => Promise<number | undefined>;
  updateRestaurant: (restaurant: UpdateRestaurant) => Promise<unknown>;
  addRestaurant: (restaurant: AddRestaurant) => Promise<unknown>;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}
