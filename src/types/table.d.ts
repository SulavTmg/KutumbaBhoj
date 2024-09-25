import { Customer } from "./customer";
import { Employee } from "./employee";
import { Restaurant } from "./restaurant";
import { Order } from "./order";

interface Column {
  header: string;
  accessor: string;
}
type Role =  {
  Id: number,
  roleSetName: string,
  permissions: string,
}

export type TableProps = {
  tableType: "Primary" | "Secondary";
  columns: Column[];
  data: Customer[] | Employee[] | Restaurant[] | Order[] | Role[];
  actions: boolean;
  type: string;
  nameId?: boolean;
};
