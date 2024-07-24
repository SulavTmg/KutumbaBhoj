import LineChart from "../components/dashboard/insights/LineChart";
import TimeNav from "../components/dashboard/insights/TimeNav";
import Cards from "../components/dashboard/insights/Cards";
import RadialBarChart from "../components/dashboard/insights/RadialBarChart";
import BarChart from "../components/dashboard/insights/BarChart";
import DashHeader from "../components/dashboard/DashHeader";
import assets from "../assets/assets";

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
        <div className=" bg-white rounded-lg max-w[1010px] shadow-md">
          <LineChart />
        </div>
        <div className="flex flex-wrap gap-8">
          <div className=" md:basis-[60%] md:flex-grow bg-white rounded-lg shadow-md">
            <div className="mx-7 mt-6">
              <h1 className="text-[#464255] font-bold text-2xl font-josefin">
                Pie Chart
              </h1>
            </div>
            <div className="flex sm:flex-wrap justify-center items-center">
              <RadialBarChart
                data={[81]}
                color={"#FF5B5B"}
                title={"Total Orders"}
              />
              <RadialBarChart
                data={[22]}
                color={"#00B074"}
                title={"Customer Growth"}
              />
              <RadialBarChart
                data={[62]}
                color={"#2D9CDB"}
                title={"Total Revenue"}
              />
            </div>
          </div>
          <div className="bg-white flex-grow basis-80 rounded-md shadow-md w-full">
            <BarChart />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h1 className="text-[#464255] text-2xl font-josefin font-bold mb-14">
            Popular Dishes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
