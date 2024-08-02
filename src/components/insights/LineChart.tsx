import { ApexOptions } from "apexcharts";
import chartData from "../../data/lineChartData.json";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const series = chartData.datasets.map((dataset) => ({
    name: dataset.label,
    data: dataset.data,
  }));

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      foreColor: "#667085",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: chartData.labels,
      labels: {
        style: {
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 1400,
      labels: {
        formatter: function (value: number) {
          if (value >= 1000) {
            return "$" + value / 1000 + "K";
          } else if (value == 0) {
            return value.toString();
          } else {
            return "$" + value;
          }
        },
        style: {
          fontWeight: "bold",
        },
      },
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
    fill: {
      opacity: 0.5,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      floating: true,
    },
    grid: {
      padding: {
        left: 10,
        top: 50,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    title: {
      text: "Statistics",
      style: {
        fontFamily: "Josefin Sans , sans-serif",
        color: "#333843",
        fontSize: "18px",
        fontWeight: "500",
      },
      margin: 15,
    },
    subtitle: {
      text: "Revenue and Sales",
      style: {
        fontFamily: "Josefin Sans , sans-serif",
      },
    },
  };

  return (
    <div id="chart" className="p-5">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={354}
      />
    </div>
  );
};

export default AreaChart;
