import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import moment from "moment";
import Title from "./Title";
import { temperature } from "./Orders";
import { tempObj } from "./Deposits";
// Generate Sales Data
function createData(date, Temperature) {
  return { date, Temperature };
}

let len = Object.keys(tempObj).length;
let averageTemp = [];
let dates = Object.keys(tempObj);
let start =  Math.max(0, len - 7);
for (let i = Math.max(0, len - 7); i < start + Math.min(len,7); i++) {
  let todayArr = tempObj[dates[i]];
  const sum = todayArr.reduce((a, b) => a + b, 0);
  const avg = sum / todayArr.length || 0;
  averageTemp.push(createData(dates[i].slice(0, 4), avg));
}
// if (Math.max(0, len - 7) ==0) averageTemp.shift();

export default function AverageChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Average Temperature by Day ({dates[start].slice(4)}-{dates[dates.length-1].slice(4)})</Title>
      <ResponsiveContainer>
        <LineChart
          data={averageTemp}
          margin={{
            top: 16,
            right: 16,
            bottom: 20,
            left: 24,
          }}
        >
          <XAxis dataKey={"date"} stroke={theme.palette.text.secondary}>
            <Label dy={20}>Day</Label>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Tempeature (°C)
            </Label>
          </YAxis>
          <Tooltip
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "black" }}
            formatter={(value, name) => {
              return `${value}°C`;
            }}
            labelFormatter={(value) => {
              return `Day: ${value}`;
            }}
          />
          <Line
            type="monotone"
            dataKey="Temperature"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
