import Header from "../../components/dashboard/Header";
import Table from "../../components/table/Table";
import { employeeStore } from "../../store";

const Employees = () => {

  const employees = employeeStore((store) => store.employees);

  const columns = [
    "Id",
    "Contact",
    "Gender",
    "Designation",
    "Shift",
    "Joined",
  ];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="All Employees"
          path="/employees/add-employees"
          search={true}
        />
      </div>
      <Table actions={true} columns={columns} data={employees} />
    </div>
  );
};

export default Employees;
