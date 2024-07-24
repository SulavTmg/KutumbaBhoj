import ReactApexChart from "react-apexcharts";
type ChartProps = {
  data: number[];
  color: string;
  title: string;
}

const RadialBarChart = ({data, color, title}: ChartProps) => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "28%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "18px",
            fontWeight: 600,
            offsetY: 5,
            color: "#000",
            fontFamily: "Josefin Sans , sans-serif",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      colors: color,
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
      },
    },
      
  };

  return (
    <div className="flex flex-col items-center">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={data}
          type="radialBar"
          height={300}
          width={200}
        />
      </div>
      <h2 className=" font-josefin font-semibold mb-5 text-gray-700">{title}</h2>
    </div>
  );
};

export default RadialBarChart;
