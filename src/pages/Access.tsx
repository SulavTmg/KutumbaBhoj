import Input from "../components/form/Input";
import Button from "../components/Button";
import ImgSlider from "../components/slider/ImgSlider";
import CheckBox from "../components/form/CheckBox";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { singnInSchema } from "../schemas";
import { useFormik } from "formik";
import { authStore, globalStore } from "../store";
import { useEffect, useState } from "react";

const Access = () => {
  const [isVisible, setIsVisible] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const {
    logos: { Logo },
    icons: { EyeOpen, EyeClose },
  } = assets;
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: singnInSchema,
      onSubmit: async (values) => {
        await authStore.getState().login(values);
        const error = globalStore.getState().error;
        console.log(error)
        if (error) {
          alert(error);
        }
      },
    });

  return (
    !token && (
      <div className="flex w-full h-screen items-start">
        <ImgSlider />
        <div className="w-1/2 h-full relative">
          <div className="md:px-[120px]">
            <div className=" md:max-w-[445px] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className=" mb-16">
                <img src={Logo} alt="kutumba-bhoj-logo" />
              </div>
              <header className="mb-[46px]">
                <h1 className=" font-sans text-3xl leading-10 font-semibold mb-[5px]">
                  Welecome Back
                </h1>
                <span className="font-thin text-[#A2A1A8]">
                  Please enter your email and password to continue
                </span>
              </header>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="relative">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      className="border-b-[3px] border-[#0D693C] w-full h-10"
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
                      className="border-b-[3px] border-[#0D693C] w-full h-10"
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
                      className="absolute right-[0.5px] top-[18px] h-[50px] w-7"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVisible(!isVisible);
                      }}
                    >
                      {isVisible ? (
                        <img src={EyeOpen} />
                      ) : (
                        <img src={EyeClose} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <CheckBox />
                  <a className="text-sm">Forget Password?</a>
                </div>
                <div className="my-[30px]">
                  <Button
                    name="Login"
                    className="border bg-[#0D693C] text-base rounded-[10px] text-white font-medium h-[56px] mt-4 w-full"
                  />
                </div>
                <div className="text-center">
                  <span className="font-light">
                    Dont have an Account?{" "}
                    <a className="font-semibold cursor-pointer">Sign-Up</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Access;
