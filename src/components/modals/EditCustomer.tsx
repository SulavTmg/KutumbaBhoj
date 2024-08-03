import { useEffect, useState } from "react";
import Header from "../common/Header";
import Button from "../Button";
import Input from "../form_elements/Input";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import assets from "../../assets/assets";
import { useParams } from "react-router-dom";
import { customerStore, globalStore } from "../../store";
import toast from "react-hot-toast";

const EditEndUser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();
  const Id = Number(id);
  useEffect(() => {
    (async () => {
      await customerStore.getState().getCustomer(Id);
    })();
  }, [Id]);

  const { customer } = customerStore();

  const {
    icons: { BackArrow, EyeOpen, EyeClose },
  } = assets;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const initialvalues = {
    name: customer?.Name || "",
    email: customer?.Email || "",
    password: customer?.Password || "",
    phone: customer?.Phone || "",
    address: customer?.Address || "",
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
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const data = {
        Id: Id,
        Name: values.name,
        Email: values.email,
        Password: values.password,
        Address: values.address,
        Phone: values.phone,
      };
      const response = await customerStore.getState().updateCustomers(data);
      const error = globalStore.getState().error;
      if (response) {
        await customerStore.getState().getCustomer(Id);
        toast.success("Successfully updated");
      } else {
        toast.error(error);
      }
    },
  });

  if (globalStore.getState().loading) return <div>Loading...</div>;

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Edit End-User"
          className="!text-[#5C59E8]"
          icon={BackArrow}
          path="/end-user"
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
              label="NAME"
              type="text"
              name="name"
              className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={errors.name && touched.name ? `${errors.name}` : null}
            />
          </div>

          <div>
            <Input
              label="EMAIL"
              type="email"
              name="email"
              className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.email && touched.email ? `${errors.email}` : null
              }
            />
          </div>

          <div className="relative">
            <Input
              label="PASSWORD"
              type={`${isVisible ? "text" : "password"}`}
              name="password"
              className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.password && touched.password
                  ? `${errors.password}`
                  : null
              }
            />
            <button
              className="absolute right-[0.5px] top-4 h-[50px]"
              onClick={(e) => {
                e.preventDefault();
                toggleVisibility();
              }}
            >
              {isVisible ? (
                <img src={EyeOpen} className="size-4 sm:size-6" />
              ) : (
                <img src={EyeClose} className="size-4 sm:size-6" />
              )}
            </button>
          </div>
          <div>
            <Input
              label="PHONE"
              type="text"
              name="phone"
              className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.phone && touched.phone ? `${errors.phone}` : null
              }
            />
          </div>

          <div>
            <Input
              label="ADDRESS"
              type="text"
              name="address"
              className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.address && touched.address ? `${errors.address}` : null
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

export default EditEndUser;
