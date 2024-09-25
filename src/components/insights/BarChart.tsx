import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { barChartData } from "../../data";

const BarCharts = () => {
  return (
    <div className="font-josefin w-full h-full">
      <div className="p-4">
        <h3 className="text-xl font-medium">Daily Orders</h3>
        <h4 className="text-xs">Weekly Analysis of Orders</h4>
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            layout="vertical"
            data={barChartData}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom:80 ,
            }}
            barSize={12}
          >
            <XAxis
              type="number"
              fontSize="10px"
              domain={[0, 800]}
              ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              fontSize="10px"
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "none" }}
              contentStyle={{ borderRadius: "8px" }}
            />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar legendType="none" dataKey="orders" fill="#00B074" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
