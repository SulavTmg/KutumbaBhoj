import AreaChart from "../components/insights/AreaChart";
import TimeNav from "../components/insights/TimeNav";
import Cards from "../components/insights/Cards";
import BarChart from "../components/insights/BarChart";
import DashHeader from "../components/header/DashHeader";
import assets from "../assets/assets";
import PieCharts from "../components/insights/PieCharts";

const Dashboard = () => {
  const {
    imgs: { FishBurger, Pizza, Ramen },
    Ratings,
  } = assets;
  return (
    <>
      <DashHeader />
      <div className="min-h-screen h-full w-full flex flex-col gap-8">
        <TimeNav />
        <Cards />
        <div className=" bg-white rounded-lg py-6 h-[375px] max-w[1010px] shadow-md">
          <AreaChart />
        </div>
        <div className="grid grid-cols-1 auto-rows-[230px] sm:grid-cols-3 gap-y-8 sm:gap-8 sm:auto-rows-[320px]">
          <div className="col-span-2 bg-white rounded-md shadow-md">
            <PieCharts />
          </div>
          <div className="bg-white rounded-md shadow-md w-full">
            <BarChart />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-[#464255] text-2xl font-josefin font-bold mb-14">
            Popular Dishes
          </h1>
          <div className="grid gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <img src={FishBurger} />
              <div className="font-josefin mt-6">
                <img src={Ratings} />
                <h2 className="text-lg">Fish Burger</h2>
                <h1 className="font-bold text-2xl text-[#F8B602]">Rs 250</h1>
                <span className="text-lg text-[#A098AE]">Solti Resturant</span>
              </div>
              <div className="bg-[#EB5757] text-white w-fit px-[5px] py-[2px] rounded-md mt-1">
                <span>50 orders</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={Pizza} />
              <div className="font-josefin  mt-6">
                <img src={Ratings} />
                <h2 className="text-lg">Meat Lover’s Pizza</h2>
                <h1 className="font-bold text-2xl text-[#F8B602]">Rs 550</h1>
                <span className="text-lg text-[#A098AE]">Pepe Pizza</span>
              </div>
              <div className="bg-[#EB5757] text-white w-fit px-[5px] py-[2px] rounded-md  mt-1">
                <span>30 orders</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={Ramen} />
              <div className="font-josefin  mt-6">
                <img src={Ratings} />
                <h2 className="text-lg">Ichiran Ramen</h2>
                <h1 className="font-bold text-2xl text-[#F8B602]">Rs 350</h1>
                <span className="text-lg text-[#A098AE]">
                  Ichiran Restaurant
                </span>
              </div>
              <div className="bg-[#EB5757] text-white w-fit px-[5px] py-[2px] rounded-md  mt-1">
                <span>25 orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
