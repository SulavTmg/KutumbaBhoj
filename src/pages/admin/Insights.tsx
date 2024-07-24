import TimeNav from "../../components/dashboard/insights/TimeNav";
import Cards from "../../components/dashboard/insights/Cards";
import LineChart from "../../components/dashboard/insights/LineChart";
import RadialBarChart from "../../components/dashboard/insights/RadialBarChart";
import BarChart from "../../components/dashboard/insights/BarChart";
import Header from "../../components/common/Header";
import ProgressBar from "../../components/common/ProgressBar";
import assets from "../../assets/assets";
import RankingList from "../../components/dashboard/insights/RankingList";

const Insights = () => {
  const {
    logos: { Sesame, DajuBhaiSmall, Falcha },
  } = assets;
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col gap-8 px-3">
        <Header heading="Insights" />
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
        <div className="flex flex-wrap gap-8 font-josefin">
          <div className="bg-white flex-grow rounded-3xl px-8 py-5">
            <div className="mb-7">
              <h1 className=" text-[#000] opacity-50">
                Most Ordered Restaurants
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-3">
                <img src={DajuBhaiSmall} />
                <div className="flex-grow">
                  <h2 className="text-sm font-semibold mb-1">
                    Daju Bhai Sweets
                  </h2>
                  <div className="flex items-center gap-3">
                    <ProgressBar
                      from="#7FDD53"
                      to="#2FEA9B"
                      base="#DBFAE6"
                      value={150}
                      max={200}
                    />
                    <span>150</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <img src={Sesame} />
                <div className="flex-grow">
                  <h2 className="text-sm font-semibold mb-1">Sesame</h2>
                  <div className="flex items-center gap-3">
                    <ProgressBar
                      from="#7FDD53"
                      to="#2FEA9B"
                      base="#DBFAE6"
                      value={100}
                      max={200}
                    />
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mb-8">
                <img src={Falcha} />
                <div className="flex-grow">
                  <h2 className="text-sm font-semibold mb-1">Falcha Eatery</h2>
                  <div className="flex items-center gap-3">
                    <ProgressBar
                      from="#7FDD53"
                      to="#2FEA9B"
                      base="#DBFAE6"
                      value={30}
                      max={200}
                    />
                    <span>30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow bg-white rounded-3xl px-8 py-5">
            <div className="mb-7">
              <h1 className=" text-[#000] opacity-50">
                Most Ordered Food Item
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex-grow px-6">
                <h2 className="text-sm font-semibold mb-1">Buff Steam Momo </h2>
                <div className="flex items-center gap-3">
                  <ProgressBar
                    from="#FFBF1A"
                    to="#FF4080"
                    base="#FFE4DD"
                    value={140}
                    max={200}
                  />
                  <span>140</span>
                </div>
              </div>
              <div className="flex-grow px-6">
                <h2 className="text-sm font-semibold mb-1">Rice Bowl</h2>
                <div className="flex items-center gap-3">
                  <ProgressBar
                    from="#FFBF1A"
                    to="#FF4080"
                    base="#FFE4DD"
                    value={110}
                    max={200}
                  />
                  <span>110</span>
                </div>
              </div>
              <div className="flex-grow px-6">
                <h2 className="text-sm font-semibold mb-1">Keema Noodle</h2>
                <div className="flex items-center gap-3">
                  <ProgressBar
                    from="#FFBF1A"
                    to="#FF4080"
                    base="#FFE4DD"
                    value={40}
                    max={200}
                  />
                  <span>40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RankingList/>
      </div>
    </>
  );
};

export default Insights;
