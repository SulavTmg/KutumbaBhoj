interface Column {
  header: string;
  accessor: string;
}

export type TableProps = {
  columns: Column[];
  data: TableData[];
  actions: boolean;
  nameId?: boolean;
};
