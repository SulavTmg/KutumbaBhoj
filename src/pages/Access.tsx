import Input from "../components/form/Input";
import Button from "../components/form/Button";
import ImgSlider from "../components/slider/ImgSlider";
import Logo from "../assets/logo/kutumba bhoj 1.png";
import CheckBox from "../components/form/CheckBox";
import { singnInSchema } from "../schemas";
import { useFormik } from "formik";

const Access = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: singnInSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="flex w-full h-screen items-start">
      <ImgSlider />
      <div className="w-1/2 h-full">
        <div className="px-[120px]">
          <div className="mt-8">
            <img src={Logo} alt="kutumba-bhoj-logo" className=" w-60 " />
          </div>
          <div className="flex flex-grow" />
          <div className="max-w-[445px] max-h-[425px] mt-12">
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
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMsg={
                    errors.email && touched.email ? `${errors.email}` : null
                  }
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMsg={
                    errors.password && touched.password
                      ? `${errors.password}`
                      : null
                  }
                />
              </div>
              <div className="flex justify-between items-center mt-7">
                <CheckBox />
                <a className="text-sm">Forget Password?</a>
              </div>
              <div className="my-[30px]">
                <Button name="Login" />
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
  );
};

export default Access;
