import Header from "../common/Header";
import Button from "../Button";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import assets from "../../assets/assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { employeeSchema } from "../../schemas";
import { useGlobalStore } from "../../store";
import { useService } from "../../providers/ServiceProvider";
import { Employee } from "../../types/employee";

const AddEmployees = () => {
  const {
    icons: { BackArrow },
  } = assets;
  const navigate = useNavigate();
  const { employeeService } = useService();
  const initialvalues = {
    firstName: "",
    lastName: "",
    gender: "",
    contact: "",
    address: "",
    shift: "",
    employeeID: "",
    designation: "",
    role: "",
    vehicleType: "",
    vehicleNumber: "",
  };

  const {
    values,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: employeeSchema,
    onSubmit: async (values) => {
      const name = `${values.firstName}${
        values.lastName ? ` ${values.lastName}` : ""
      }`;

      const data: Employee = {
        Id: Number(values.employeeID),
        Name: name,
        Contact: values.contact,
        Gender: values.gender,
        Address: values.address,
        Shift: values.shift,
        Designation: values.designation,
        Role: values.role,
        VehicleType: values.vehicleType,
        VehicleNumber: values.vehicleNumber,
      };
      const response = await employeeService.addEmployee(data);
      const error = useGlobalStore.getState().error;
      if (response) {
        await employeeService.getEmployees();
        toast.success("Employee added successfully");
        navigate("/employees");
      } else {
        toast.error(error);
      }
    },
  });

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Add Employee"
          className="!text-[#5C59E8]"
          icon={BackArrow}
          path="/employees"
          btnName="Go Back"
        />
      </div>
      <div className="p-10">
        <form
          className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-7"
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              name="firstName"
              type="text"
              placeholder="First Name"
              className=" w-full h-[56px] border rounded-[10px]"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.firstName && touched.firstName
                  ? `${errors.firstName}`
                  : null
              }
            />
          </div>
          <div>
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.lastName && touched.lastName
                  ? `${errors.lastName}`
                  : null
              }
            />
          </div>
          <div>
            <Input
              name="employeeID"
              type="text"
              placeholder="Employee ID"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.employeeID}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.employeeID && touched.employeeID
                  ? `${errors.employeeID}`
                  : null
              }
            />
          </div>
          <div>
            <Input
              name="gender"
              type="text"
              placeholder="Gender"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.gender && touched.gender ? `${errors.gender}` : null
              }
            />
          </div>

          <div className="col-span-2">
            <Input
              name="address"
              type="text"
              placeholder="Address"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.address && touched.address ? `${errors.address}` : null
              }
            />
          </div>
          <div>
            <Input
              name="contact"
              type="text"
              placeholder="Contact"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.contact && touched.contact ? `${errors.contact}` : null
              }
            />
          </div>
          <div>
            <Select
              name="shift"
              placeholder="Shift"
              options={["Morning", "Day", "Evening", "Night"]}
              value={values.shift}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.shift && touched.shift ? `${errors.shift}` : null
              }
              className="w-full"
            />
          </div>
          <div>
            <Input
              name="designation"
              type="text"
              placeholder="Designation"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.designation && touched.designation
                  ? `${errors.designation}`
                  : null
              }
            />
          </div>
          <div>
            <Select
              name="role"
              placeholder="Role"
              options={["Admin", "Employee", "Manager", "Staff"]}
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={errors.role && touched.role ? `${errors.role}` : null}
              className="w-full"
            />
          </div>
          <Input
            name="vehicleType"
            type="text"
            placeholder="Vehicle Type (optional)"
            className="w-full h-[56px] border rounded-[10px]"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.vehicleType}
          />
          <Input
            name="vehicleNumber"
            type="text"
            placeholder="Vehicle Number (optional)"
            className="w-full h-[56px] border rounded-[10px]"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.vehicleNumber}
          />
          <div className="col-span-2">
            <div className="flex justify-end gap-3 mt-3">
              <Button
                type="button"
                onClick={() => resetForm()}
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
