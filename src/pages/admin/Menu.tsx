import Header from "../../components/dashboard/Header";
import { restaurants } from "../../data/restaurants";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading={"Menu"} className={"mb-8"} path="/" />
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(21rem,_1fr))] gap-[40px] mt-8">
          {restaurants.map((res, index) => (
            <Link to={`/menu/${res.id}`} key={index}>
              <li className="rounded-xl border list-none">
                <div>
                  <img
                    src={res.img}
                    className="rounded-t-xl w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-9 m-8">
                  <div>
                    <img src={res.logo} />
                  </div>
                  <div className="font-josefin">
                    <h1 className="text-base font-medium">{res.name}</h1>
                    <span className="text-xs text-[#ABABAB]">
                      {res.location}
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
