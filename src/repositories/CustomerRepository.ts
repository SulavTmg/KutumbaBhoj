import { BaseRepository } from "./BaseRepository";
import { Customer } from "../types/customer";
import { FetchAPI } from "../api/FetchAPI";

export class CustomerRepository extends BaseRepository<Customer, number> {
  constructor(api: FetchAPI) {
    super(api, "/customers", "search");
  }
}
