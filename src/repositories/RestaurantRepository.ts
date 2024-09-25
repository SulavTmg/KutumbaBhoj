import { FetchAPI } from "../api/FetchAPI";
import { Restaurant} from "../types/restaurant";
import { BaseRepository } from "./BaseRepository";

export class RestaurantRepository extends BaseRepository<Restaurant, number> {
  constructor(api: FetchAPI) {
    super(api, "/restaurants","searchTerm");
  }
}
