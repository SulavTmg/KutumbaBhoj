import Header from "../common/Header";
import Button from "../Button";
import Input from "../form_elements/Input";
import assets from "../../assets/assets";
import Select from "../form_elements/Select";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { editEmployeeSchema } from "../../schemas";
import { employeeStore, globalStore } from "../../store";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditEmployee = () => {
  const { id } = useParams();
  const Id = Number(id);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await employeeStore.getState().getEmployee(Id);
    })();
  }, [Id]);

  const { employee } = employeeStore();

  const {
    icons: { BackArrow },
  } = assets;

  const initialvalues = {
    firstName: employee?.Name ? employee.Name.split(" ")[0] : "",
    lastName: employee?.Name ? employee.Name.split(" ").slice(1).join(" ") : "",
    gender: employee?.Gender || "",
    contact: employee?.Contact || "",
    shift: employee?.Shift || "",
    designation: employee?.Designation || "",
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
    enableReinitialize: true,
    validationSchema: editEmployeeSchema,
    onSubmit: async (values) => {
      const name = `${values.firstName}${
        values.lastName ? ` ${values.lastName}` : ""
      }`;

      const data = {
        Id: Id,
        Name: name,
        Contact: values.contact,
        Gender: values.gender,
        Shift: values.shift,
        Designation: values.designation,
      };
      const response = await employeeStore.getState().updateEmployee(data);
      const error = globalStore.getState().error;
      if (response) {
        toast.success("Employee updated successfully");
        navigate("/employees");
      } else {
        toast.error(error);
      }
    },
  });

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Edit Employee"
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

export default EditEmployee;
