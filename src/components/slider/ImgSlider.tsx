import { useEffect, useState } from "react";
import ImageURLS from "../../data/ImageURLS.json";

const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === ImageURLS.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-lg h-full">
      <div className="overflow-hidden relative h-full">
        <div
          style={{ transform: `translateX(-${index * 100}%)` }}
          className="flex transition-transform ease-out duration-500 "
        >
          {ImageURLS.map((s) => (
            <img src={s.url} className="h-full" />
          ))}
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {ImageURLS.map((_, i) => (
              <div
                className={`transition-all ease-out w-[6px] h-[6px] bg-slate-300 rounded-full ${
                  index === i ? "" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
