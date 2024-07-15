import Header from "../../../components/dashboard/Header";
import Table from "../../../components/table/Table";
import employees from "../../../data/employees.json";

const Employees = () => {
  const columns = [
    "employee name",
    "contact",
    "gender",
    "designation",
    "shift",
    "joined",
  ];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading="All Employees" path="/employees/add-employees" search = {true} />
      </div>
      <Table actions = {true} columns={columns} data={employees} />
    </div>
  );
};

export default Employees;
