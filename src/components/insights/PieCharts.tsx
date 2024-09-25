import ProgressBar from "./ProgressBar";

const PieCharts = () => {
  return (
    <>
      <div className="mx-7 mt-6">
        <h1 className="text-[#464255] font-bold text-2xl font-josefin">
          Pie Chart
        </h1>
      </div>
      <div className="flex justify-around py-4 px-4">
        <ProgressBar
          progress={81}
          trailColor="#FF5B5B26"
          pathColor="#FF5B5B"
          title="Total Orders"
        />
        <ProgressBar
          progress={21}
          trailColor="#00B07426"
          title="Customer Growth"
          pathColor="#00B074"
        />
        <ProgressBar
          progress={62}
          trailColor="#2D9CDB26"
          title="Total Revenue"
          pathColor="#2D9CDB"
        />
      </div>
    </>
  );
};

export default PieCharts;
