import TimeNav from "../../components/insights/TimeNav";
import Cards from "../../components/insights/Cards";
import AreaChart from "../../components/insights/AreaChart";
import PieCharts from "../../components/insights/PieCharts";
import BarChart from "../../components/insights/BarChart";
import Header from "../../components/common/Header";
import ProgressBar from "../../components/common/ProgressBar";
import assets from "../../assets/assets";
import RankingList from "../../components/insights/RankingList";

const Insights = () => {
  const {
    logos: { Sesame, DajuBhai, Falcha },
  } = assets;
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col gap-8 px-3">
        <Header heading="Insights" />
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
        <div className="flex flex-wrap gap-8 font-josefin">
          <div className="bg-white flex-grow rounded-3xl px-8 py-5 shadow-md">
            <div className="mb-7">
              <h1 className=" text-[#000] opacity-50">
                Most Ordered Restaurants
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-3">
                <img src={DajuBhai} />
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
          <div className="flex-grow bg-white rounded-3xl px-8 py-5 shadow-md">
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
        <RankingList />
      </div>
    </>
  );
};

export default Insights;
