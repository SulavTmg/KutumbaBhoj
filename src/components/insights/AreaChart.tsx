import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CustomLegend } from "../../utils";
import { areaChartData } from "../../data";

const AreaCharts = () => {
  return (
    <>
      <div className="font-josefin font-medium ml-6">
        <h3 className="text-lg text-[#333843]">Statistics</h3>
        <h4 className="text-sm text-[#667085]">Revenue and Sales</h4>
      </div>
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={areaChartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
        >
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00B074" stopOpacity={0.2} />
              <stop offset="75%" stopColor="#00B074" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F29319" stopOpacity={0.2} />
              <stop offset="75%" stopColor="#F29319" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            tick={{
              fontSize: "12px",
              fill: "#667085",
              fontWeight: 500,
            }}
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 1400]}
            ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
            tickFormatter={(value: number) => {
              if (value >= 1000) {
                return "$" + value / 1000 + "K";
              } else if (value === 0) {
                return value.toString();
              } else {
                return "$" + value;
              }
            }}
            tick={{
              fontSize: 12,
              fill: "#667085",
              fontWeight: 500,
            }}
            axisLine={false}
            tickLine={false}
          />
          <Legend verticalAlign="top" height={32} content={<CustomLegend />} />
          <Tooltip contentStyle={{ borderRadius: "8px" }} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#00B074"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#revenue)"
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#F29319"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#sales)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaCharts;
