import Header from "../../components/common/Header";
import Table from "../../components/table/Table";
import { employeeStore } from "../../store";

const Employees = () => {
  const { employees, setSearchQuery } = employeeStore();

  const columns = [
    {
      header: "Employee Name",
      accessor: "Name",
    },
    {
      header: "Contact",
      accessor: "Contact",
    },
    {
      header: "Gender",
      accessor: "Gender",
    },
    {
      header: "Designation",
      accessor: "Designation",
    },
    {
      header: "Shift",
      accessor: "Shift",
    },
    {
      header: "Joined",
      accessor: "Joined",
    },
  ];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="All Employees"
          path="/employees/add-employee"
          search={true}
          onSearchChange={setSearchQuery}
        />
      </div>
      <Table type="employee" actions={true} columns={columns} data={employees} nameId={true} />
    </div>
  );
};

export default Employees;
