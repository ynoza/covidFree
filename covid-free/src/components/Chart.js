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
import Title from "./Title";
import { tempObj } from "./Dashboard";
// import { dateArr } from './Deposits';
// Generate Sales Data
function createData(time, Temperature) {
  return { time, Temperature };
}

// var len = 10;
// var data = new Array(len);
// for(var i=0;i<len;i++){
//   data.push(createData('1',5));
//   // data.push(createData(i,temperature[i]));
// }
// most recent day's temperature

export default function Chart() {
  const theme = useTheme();
  let keys = Object.keys(tempObj);
  let temperature = tempObj[keys[keys.length - 1]];
  let data = [
    createData("1", temperature[0]),
    createData("2", temperature[1]),
    createData("3", temperature[2]),
    createData("4", temperature[3]),
    createData("5", temperature[4]),
    createData("6", temperature[5]),
    createData("7", temperature[6]),
    createData("8", temperature[7]),
    createData("9", temperature[8]),
    createData("10", temperature[9]),
  ];

  return (
    <React.Fragment>
      <Title>{keys[keys.length - 1]} (Today)</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 20,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
            <Label
              // angle={270}
              dy={20}
              position="middle"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Time Instance (10 min span)
            </Label>
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
              return `Instance: ${value}`;
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
