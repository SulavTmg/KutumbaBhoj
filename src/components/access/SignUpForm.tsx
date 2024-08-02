import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import assets from "../../assets/assets";
import Input from "../form_elements/Input";
import Button from "../Button";
import { authStore, globalStore } from "../../store";

type ToggleProps = {
  isActive?: boolean;
  toggleActive: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
};

const SignUpForm = ({ isActive, toggleActive }: ToggleProps) => {
  const {
    icons: { CloseIcon },
  } = assets;
  const [isVisible, setIsVisible] = useState(false);
  const {
    icons: { EyeOpen, EyeClose },
  } = assets;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      await authStore.getState().signUp(values);
      const error = globalStore.getState().error;
      if (error) {
        alert(error);
      }
    },
  });

  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    resetForm();
    toggleActive(e);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`left-0 right-0 top-0 bottom-0 fixed z-20 transition-all duration-300 ease-[cubic-bezier(0.39,0.575,0.565,1)] transform ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-[rgba(0,0,0,.8)]`}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-scroll z-20 top-0 right-0 w-[100vw] md:w-[50vw] fixed h-screen bg-white transition-all duration-300 ease-[cubic-bezier(0.39,0.575,0.565,1)] transform ${
          isActive
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col font-josefin">
          <header className="relative mt-[4rem]">
            <h1 className="text-[24px] md:text-[32px] p-[0_3.5rem_1.5rem] md:pl-[8.33vw] md:pr-[calc(8.33vw_+_2.5rem)] ">
              Sign Up
            </h1>
            <button
              className="absolute top-3 right-[8.33vw]"
              onClick={handleClose}
            >
              <img src={CloseIcon} />
            </button>
          </header>
          <form className="px-[8.33vw] pt-8 mb-[4rem]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-7">
              <div>
                <Input
                  label="NAME"
                  type="text"
                  name="name"
                  className="border-b-[2px] sm:border-b-[3px] border-[#0D693C] w-full h-8 sm:h-10"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMsg={
                    errors.name && touched.name ? `${errors.name}` : null
                  }
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
                    errors.address && touched.address
                      ? `${errors.address}`
                      : null
                  }
                />
              </div>
              <Button
                name="Signup"
                loadingSize="32"
                loadingStroke="5"
                className="border bg-[#0D693C] text-xs sm:text-base rounded-[10px] text-white font-medium h-9 sm:h-[56px] mt-4 w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
