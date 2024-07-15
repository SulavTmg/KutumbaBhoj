import assets from "../../assets/assets";
import profile from "../../assets/profile/Pp.png";

const Dashboard = () => {
  const { MsgIcon, BellIcon, SearchIcon } = assets;
  return (
    <>
      <header className="bg-white flex justify-between items-center px-10 py-4 -mx-3 -my-3">
        <div>
          <h1 className="text-[#CE1B22] font-bold text-[28px]">Welcome</h1>
          <span className="text-[#808080] font-josefin">
            Your dahboard is ready
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <div className="relative">
                <button className="absolute left-5 top-[14.5px]">
                  <img src={SearchIcon} />
                </button>
                <input
                  placeholder="Search for something"
                  className="border rounded-[40px] outline-none pl-14 w-[280px] h-[48px]"
                />
              </div>
            </li>
            <li>
              <div className="bg-[#F5F7FA] rounded-full">
                <img src={MsgIcon} className="py-3 px-3" />
              </div>
            </li>
            <li>
              <div className="bg-[#F5F7FA] rounded-full">
                <img src={BellIcon} className="py-3 px-3" />
              </div>
            </li>
            <li>
              <div>
                <img
                  src={profile}
                  className="size-[48px] border rounded-full cursor-pointer"
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Dashboard;
