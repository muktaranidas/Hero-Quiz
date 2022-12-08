import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="chart">
      <ResponsiveContainer width="95%" height={300}>
        <LineChart width={1000} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            strokewidth={2}
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
