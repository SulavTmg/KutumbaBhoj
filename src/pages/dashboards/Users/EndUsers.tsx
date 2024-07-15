import Header from "../../../components/dashboard/Header";
import Table from "../../../components/table/Table";
import endUsers from "../../../data/endUsers.json";

const EndUsers = () => {
  const columns = ["Customer Name", "Contact", "Address", "Email"];
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading="End-Users" search={true} />
      </div>
      <Table actions={true} columns={columns} data={endUsers} />
    </div>
  );
};

export default EndUsers;
