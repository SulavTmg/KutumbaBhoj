import { useState } from "react";
import Header from "../../common/Header";
import Table from "../../table/Table";
import accessPolicies from "../../../data/accessControl.json";
import Modal from "../../Modal";
import Input from "../../form/Input";
import Button from "../../Button";

const AccessControl = () => {
  const columns = ["Role Set Name", "Permissions"];
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading={"Access Control"}
          subHeading={"Manage Data Access and Role Policies"}
          path="#"
          onClick={() => setOpen(true)}
        />
      </div>
      <Table columns={columns} data={accessPolicies} actions={true} />
      <Modal onClose={() => setOpen(false)} open={open}>
        <h1 className=" text-[#5C59E8] font-medium text-xl">
          Add Role Details
        </h1>
        <form className="flex flex-col gap-8 mt-16 w-full">
          <Input
            name="roleName"
            type="text"
            placeholder="Role Name"
            className=" w-full h-[56px] border rounded-[10px] "
          />
          <textarea
            placeholder="Description"
            className="w-full h-28 outline-none p-4 border rounded-[10px]"
          />

          <div className="col-span-2">
            <div className="flex justify-end gap-3 mt-3">
              <Button
                name="Cancel"
                className="!bg-white !text-[#16151C] border h-[50px] w-24 font-light rounded-[10px]"
              />
              <Button
                name="Save"
                className="!bg-[#121BC6] text-white h-[50px] w-24 font-light rounded-[10px]"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AccessControl;
