import CheckBox from "../form_elements/CheckBox";
import Input from "../form_elements/Input";
import Button from "../Button";
import { singnInSchema } from "../../schemas";
import { useFormik } from "formik";
import { useGlobalStore } from "../../store";
import assets from "../../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useService } from "../../providers/ServiceProvider";

type toggleProps = {
  toggleActive: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoginForm = (props: toggleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { authService } = useService();
  const navigate = useNavigate();

  const {
    logos: { Logo },
    icons: { EyeOpen, EyeClose },
  } = assets;

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: singnInSchema,
    onSubmit: async (values) => {
      await authService.login(values);
      const error = useGlobalStore.getState().error;
      if (error) {
        toast.error(error);
      } else {
        navigate("/");
        resetForm();
      }
    },
  });
  return (
    <div className=" md:max-w-[445px] md:w-full md:mx-12">
      <div className="">
        <img
          src={Logo}
          alt="kutumba-bhoj-logo"
          className="w-[9rem] mb-5 md:w-56"
        />
      </div>
      <header className="mb-[46px]">
        <h1 className="font-sans text-lg md:text-3xl md:mb-1 leading-10 font-semibold ">
          Welecome Back
        </h1>
        <span className="font-thin text-[10px] md:text-base text-[#A2A1A8]">
          Please enter your email and password to continue
        </span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div>
            <Input
              label="Email Address"
              name="email"
              type="email"
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
              label="Password"
              name="password"
              type={isVisible ? "text" : "password"}
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
              type="button"
              className="absolute right-[0.5px] top-[18px] h-[50px] w-7"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              {isVisible ? (
                <img src={EyeOpen} className="size-4 sm:size-6" />
              ) : (
                <img src={EyeClose} className="size-4 sm:size-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-7">
          <CheckBox label={true} />
          <a className="text-[10px] sm:text-sm">Forget Password?</a>
        </div>
        <div className="my-6 sm:my-[30px]">
          <Button
            name="Login"
            loadingSize="32"
            loadingStroke="5"
            className="border bg-[#0D693C] text-xs sm:text-base rounded-[10px] text-white font-medium h-9 sm:h-[56px] mt-4 w-full"
          />
        </div>
        <div className="text-center text-[10px] sm:text-base">
          <p className="font-light">
            Dont have an Account?{" "}
            <button
              type="button"
              onClick={(e) => {
                props.toggleActive(e);
              }}
              className="font-semibold"
            >
              Sign-Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
