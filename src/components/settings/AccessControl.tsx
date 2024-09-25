import Header from "../common/Header";
import Table from "../table/Table";
import accessPolicies from "../../data/accessControl.json";
import { Role } from "../../types/table";
import AddNewRole from "../modals/AddNewRole";
import { useState } from "react";
import Modal from "../Modal";

const AccessControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      header: "Role Set Name",
      accessor: "roleSetName",
    },
    {
      header: "Permisions",
      accessor: "permissions",
    },
  ];
  const data: Role[] = accessPolicies;
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading={"Access Control"}
          subHeading={"Manage Data Access and Role Policies"}
          path="#"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      {/* 
          TODO: create type of access control and columns when available in the backend 
          */}
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <AddNewRole />
      </Modal>
      <Table
        columns={columns}
        type="Role"
        tableType="Secondary"
        data={data}
        actions={true}
      />
    </div>
  );
};

export default AccessControl;
