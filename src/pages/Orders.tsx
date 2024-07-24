import Header from "../components/common/Header";
import Table from "../components/table/Table";
import { orderStore } from "../store";
const Orders = () => {
  const { orders, setSearchQuery } = orderStore();

  const columns = [
    {
      header: "Order Id",
      accessor: "Id",
    },
    {
      header: "Restaurant",
      accessor: "Restaurant",
    },
    {
      header: "Total",
      accessor: "Total",
    },
    {
      header: "Payment",
      accessor: "Payment",
    },
    {
      header: "Created",
      accessor: "CreatedAt",
    },
    {
      header: "Status",
      accessor: "Status",
    },
  ];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Orders"
          search={true}
          btnName="Filters"
          filter={true}
          onSearchChange={setSearchQuery}
        />
      </div>
      <Table columns={columns} data={orders} actions={false} />
    </div>
  );
};

export default Orders;
