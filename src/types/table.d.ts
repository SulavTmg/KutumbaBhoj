import { Customer } from "./customer";
import { Employee } from "./employee";
import { Restaurant } from "./restaurant";
import { Order } from "./order";

interface Column {
  header: string;
  accessor: string;
}

export type TableProps = {
  columns: Column[];
  data: Customer[] | Employee[] | Restaurant[] | Order[];
  actions: boolean;
  type: string;
  nameId?: boolean;
};
