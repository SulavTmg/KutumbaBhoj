import Header from "../../components/common/Header";
import Table from "../../components/table/Table";
import { customerStore } from "../../store";
import { customerRepository } from "../../providers/RepositoryProvider";

const EndUsers = () => {
  const { customers } = customerStore();
  const updateCustomersByQuery = (query: string) => {
    customerRepository.search(query);
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
        type="customer"
        actions={true}
        columns={columns}
        data={customers}
      />
    </div>
  );
};

export default EndUsers;
