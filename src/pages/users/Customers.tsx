import Header from "../../components/common/Header";
import Table from "../../components/table/Table";
import { useCustomerStore } from "../../store";
import { useService } from "../../providers/ServiceProvider";

const EndUsers = () => {
  const { customerService } = useService();
  const customers = useCustomerStore((state) => state.customers);
  const updateCustomersByQuery = async (query: string) => {
    await customerService.searchCustomer(query);
  };
  const columns = [
    { header: "Customer Name", accessor: "Name" },
    { header: "Contact", accessor: "Phone" },
    { header: "Address", accessor: "Address" },
    { header: "Email", accessor: "Email" },
  ];

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="End-Users"
          search={true}
          onSearchChange={updateCustomersByQuery}
        />
      </div>
      <Table
        tableType="Primary"
        type="customer"
        actions={true}
        columns={columns}
        data={customers}
      />
    </div>
  );
};

export default EndUsers;
