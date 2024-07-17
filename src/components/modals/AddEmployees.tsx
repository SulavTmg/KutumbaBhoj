import Header from "../dashboard/Header";
import Button from "../Button";
import Input from "../form/Input";
import Select from "../form/Select";

const AddEmployees = () => {
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading="Add Employee" className="!text-[#5C59E8]" />
      </div>
      <div className="p-10">
        <form className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-6">
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
            name="employeeID"
            type="text"
            placeholder="Employee ID"
            className="w-full h-[56px] border rounded-[10px]"
          />
          <Input
            name="gender"
            type="text"
            placeholder="Gender"
            className="w-full h-[56px] border rounded-[10px]"
          />
          <div className="col-span-2">
            <Input
              name="address"
              type="text"
              placeholder="Address"
              className="w-full h-[56px] border rounded-[10px]"
            />
          </div>
          <Input
            name="contact"
            type="number"
            placeholder="Contact"
            className="w-full h-[56px] border rounded-[10px]"
          />
          <Select
            name="shift"
            options={["Shift", "Morning", "Day", "Evening", "Night"]}
          />
          <Input
            name="designation"
            type="text"
            placeholder="Designation"
            className="w-full h-[56px] border rounded-[10px]"
          />
          <Select
            name="shift"
            options={["Role", "Admin", "Employee", "Manager", "Staff"]}
          />
          <Input
            name="vehicleType"
            type="text"
            placeholder="Vehicle Type (optional)"
            className="w-full h-[56px] border rounded-[10px]"
          />
          <Input
            name="vehicleNumber"
            type="text"
            placeholder="Vehicle Number (optional)"
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
    </div>
  );
};

export default AddEmployees;
