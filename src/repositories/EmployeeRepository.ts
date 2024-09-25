import { FetchAPI } from "../api/FetchAPI";
import { Employee} from "../types/employee";
import { BaseRepository } from "./BaseRepository";

export class EmployeeRepository extends BaseRepository<Employee, number> {
   constructor(api: FetchAPI) {
    super(api, "/employee", "searchTerm");
  }
}