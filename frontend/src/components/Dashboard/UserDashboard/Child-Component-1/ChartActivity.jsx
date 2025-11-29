import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "M", value: 3000 },
  { name: "T", value: 5000 },
  { name: "W", value: 9000 },
  { name: "T", value: 4000 },
  { name: "F", value: 9000 },
  { name: "S", value: 3000 },
  { name: "S", value: 5000 },
];

const ChartActivity = () => {
  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0 fw-bold">Learning Activity</h6>
        <small className="text-success">+3.4% from last period</small>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="url(#colorGradient)"
            radius={[10, 10, 0, 0]}
            barSize={25}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#003973" />
              <stop offset="100%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartActivity;
