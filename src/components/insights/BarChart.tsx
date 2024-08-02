import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const options: ApexOptions = {
    series: [
      {
        name: "Orders",
        data: [200, 150, 580, 320, 280, 380, 280],
      },
    ],
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      min: 0,
      max: 800,
    },
    xaxis: {
      categories: ["Mon", "Wed", "Tue", "Thu", "Fri", "Sat", "Sun"],
    },
    title: {
      text: "Daily Orders",
      style: {
        fontFamily: "Josefin Sans , sans-serif",
        color: "#333843",
        fontSize: "20px",
        fontWeight: "600",
      },
    },
    subtitle: {
      text: "Revenue and Sales",
      style: {
        fontFamily: "Josefin Sans , sans-serif",
      },
    },
  };

  return (
    <div id="chart" className="p-5 ">
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
