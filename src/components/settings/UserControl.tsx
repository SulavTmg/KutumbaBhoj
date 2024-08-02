// import Table from "../table/Table";
// import userControl from "../../data/userControl.json";
import Header from "../common/Header";
import Modal from "../Modal";
import { useState } from "react";
import Input from "../form_elements/Input";
import Button from "../Button";

const UserControl = () => {
  // const columns = ["User Name", "Email", "Contact Info", "Role"];
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading={"User Control"}
          subHeading={"Create and Edit User Login Information"}
          path="#"
          onClick={() => setOpen(true)}
        />
      </div>
      {/* 
          TODO: create type of user control and columns when available in the backend 
      */}
      {/* <Table columns={columns} data={userControl} actions={true} /> */}
      <Modal onClose={() => setOpen(false)} open={open}>
        <div className="w-[1100px]">
          <h1 className=" text-[#5C59E8] font-medium text-xl">
            Add User Details
          </h1>
          <form className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-8 mt-16">
            <Input
              name="firstName"
              type="text"
              placeholder="First Name"
              className=" w-full h-[56px] border rounded-[10px]"
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full h-[56px] border rounded-[10px]"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full h-[56px] border rounded-[10px]"
            />
            <Input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="w-full h-[56px] border rounded-[10px]"
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full h-[56px] border rounded-[10px]"
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full h-[56px] border rounded-[10px]"
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
        </div>
      </Modal>
    </div>
  );
};

export default UserControl;
