import { useEffect } from "react";
import Header from "../../components/common/Header";
import { useMenuStore, useRestaurantStore } from "../../store";
import { Link } from "react-router-dom";

const Menu = () => {
  const restaurants = useRestaurantStore((state) => state.restaurants);

  useEffect(() => {
    useMenuStore.getState().menu = null;
  }, []); 

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading={"Menu"} className={``} path="/" />
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-[40px] mt-8">
          {restaurants.map((res) => (
            <Link to={`/menu/${res.Id}`} key={res.Id}>
              <li className="rounded-xl border list-none">
                <div>
                  <img
                    src={`https://admin.kutumbabazar.com/foodapi/${
                      res.Images?.[1]?.Url || res.Images?.[0]?.Url
                    }`}
                    alt={`${res.Name} main`}
                    className="rounded-t-xl h-[133px] w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-9 m-6">
                  <div>
                    <img
                      src={`https://admin.kutumbabazar.com/foodapi/${res.Images?.[0]?.Url}`}
                      alt={`${res.Name} logo`}
                      className="h-[53px]"
                    />
                  </div>
                  <div className="font-josefin">
                    <h1 className="text-base font-medium">{res.Name}</h1>
                    <span className="text-xs text-[#ABABAB]">
                      {res.Address}
                    </span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
