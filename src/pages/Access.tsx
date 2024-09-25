import ImgSlider from "../components/slider/ImgSlider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "../components/access/LoginForm";
import SignUpForm from "../components/access/SignUpForm";

const Access = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    !token && (
      <div className="flex w-full h-screen items-start">
        <div className="invisible hidden md:visible md:block w-1/2 h-full overflow-hidden relative ">
          <ImgSlider />
        </div>
        <div className="w-full md:w-1/2 h-full relative">
          <div className="h-full w-full flex justify-center items-center">
            <LoginForm toggleActive={toggleActive} />
          </div>
        </div>
        <SignUpForm isActive={isActive} toggleActive={toggleActive} />
      </div>
    )
  );
};

export default Access;
