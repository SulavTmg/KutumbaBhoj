import { useEffect, useState } from "react";
import assets from "../../assets/assets";

const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  const {Dish1, Dish2, Dish3} = assets;
  const ImageURLS = [Dish1, Dish2, Dish3];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currIndex) =>
        currIndex === ImageURLS.length - 1 ? 0 : currIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [ImageURLS.length]);
  return (
    <div className="w-1/2 h-full overflow-hidden relative ">
      <div
        style={{ transform: `translateX(-${index * 100}%)` }}
        className="flex h-full transition-transform ease-[cubic-bezier(0.19,1,0.22,1)] duration-[1200ms] "
      >

        {ImageURLS.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className=" bg-cover bg-center flex-[0_0_100%]"
          ></div>
        ))}
      </div>
      <div className="absolute bottom-8 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {ImageURLS.map((_, i) => (
            <div
            key={i}
              className={`transition-all ease-out w-[6px] h-[6px] bg-slate-300 rounded-full ${
                index === i ? "" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
