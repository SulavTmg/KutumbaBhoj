import { Order} from "../types/order";
import { FetchAPI } from "../api/FetchAPI";
import { BaseRepository } from "./BaseRepository";

export class OrderRepository extends BaseRepository<Order, number> {
  constructor(api: FetchAPI) {
    super(api, "/orders", "searchTerm");
  }
}
