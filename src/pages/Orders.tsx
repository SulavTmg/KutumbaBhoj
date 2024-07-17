import Header from "../components/dashboard/Header";
import Table from "../components/table/Table";
import orders from  "../data/orders.json";

const Orders = () => {
  const columns = [
    "OrderID",
    "Restaurant",
    "Total",
    "Payment",
    "Created",
    "Status",
  ];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Orders"
          search={true}
          btnName="Filters"
          filter = {true}
        />
      </div>
      <Table columns={columns} data={orders} actions={false} />
    </div>
  );
};

export default Orders;
