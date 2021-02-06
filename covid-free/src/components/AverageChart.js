import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import Title from './Title';
import { temperature } from './Orders';
import { tempObj } from './Deposits';
// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}

let len = tempObj.length;
let averageTemp = new Array(len);
let dates = Object.keys(tempObj);
for(let k of dates){
  let todayArr = tempObj[k];
  const sum = todayArr.reduce((a, b) => a + b, 0);
  const avg = sum / todayArr.length || 0;
  averageTemp.push(createData(k, avg));
}



// for(let i=0;i<len;i++){
//   averageTemp.push(createData(tempObj[], ));
//   // data.push(createData(i,temperature[i]));
// }

const data = [
  createData('1',temperature[0]),
  createData('2', temperature[1]),
  createData('3', temperature[2]),
  createData('4', temperature[3]),
  createData('5', temperature[4]),
  createData('6', temperature[5]),
  createData('7', temperature[6]),
  createData('8', temperature[7]),
  createData('9', temperature[8]),
  createData('10', temperature[9]),
];
console.log(data);
function formatXAxis(tickItem) {
  return moment(tickItem).format('MMM Do YYYY')
  }

export default function AverageChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Average Temperature by Date</Title>
      <ResponsiveContainer>
        <LineChart
          data={averageTemp}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="data" tickFormatter={formatXAxis} stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Tempeature (°C)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}