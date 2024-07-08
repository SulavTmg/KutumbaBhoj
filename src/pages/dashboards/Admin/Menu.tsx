import Header from "../../../components/dashboard/Header";
import {resturants} from "../../../data/resturants";
const Menu = () => {
  return (
    <div className="rounded-lg mx-3 my-3 shadow-[rgba(0,0,0,0.1)_0px_0px_10px] relative flex flex-col break-words bg-white bg-clip-border border-[rgba(0,0,.125)]">
      <div className="px-6 py-3">
        <Header heading={"Menu"} />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(21rem,_1fr))] gap-[40px]">
          {resturants.map((res) => (
            <div className="rounded-lg h-60 w-[336px] border">
              <div>
                <img src={res.img} className="rounded-t-lg" />
              </div>
              <div className="flex">
                <div>
                  <img src={res.logo} />
                </div>
                <div>
                  <h1>{res.name}</h1>
                  <span>{res.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
