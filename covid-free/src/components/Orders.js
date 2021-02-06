import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { tempObj, dateArr } from "./Deposits";

// Generate Order Data
const createData = (date, temp) => {
  return {
    date: date,
    t0: temp[0],
    t1: temp[1],
    t2: temp[2],
    t3: temp[3],
    t4: temp[4],
    t5: temp[5],
    t6: temp[6],
    t7: temp[7],
    t8: temp[8],
    t9: temp[9],
    avg_val: temp.reduce((a, b) => a + b, 0) / temp.length || 0,
    min_val: Math.min(...temp),
    max_val: Math.max(...temp),
  };
};

let len = Object.keys(tempObj).length;
let rows = [];
let dates = Object.keys(tempObj);
// console.log(dates);
for (let i = Math.max(0, len - 7); i < Math.max(len+1,8); i++) {
  // console.log(dates[i]);
  let todayArr = tempObj[dates[i]];
  rows.push(createData(dates[i], todayArr));
}

// let temperature = tempObj[dateArr[dateArr.length - 1]];

// const rows = [
//   createData(`${new Date()}`, temperature),
// createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
// createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
// createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
// createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
// createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];
// const min_val = Math.min(...temperature);
// const max_val = Math.max(...temperature);
// const sum = (arr) => {
//     arr.reduce((a, b) => a + b, 0);
// }
// const sum =
// const avg_val = sum / temperature.length || 0;

const tempLabels = [
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "T8",
  "T9",
  "T10",
  "Average",
  "Low",
  "High",
];

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Temperatures</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} align="left">
              Time Instance
            </TableCell>
            {tempLabels.map((tempLabel) => (
              <TableCell style={{ fontWeight: "bold" }} align="center">
                {tempLabel}
              </TableCell>
            ))}
            {/* <TableCell style={{ fontWeight: "bold" }} align="right">
              Average
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              Low
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">
              High
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="center">{row.t0}</TableCell>
              <TableCell align="center">{row.t1}</TableCell>
              <TableCell align="center">{row.t2}</TableCell>
              <TableCell align="center">{row.t3}</TableCell>
              <TableCell align="center">{row.t4}</TableCell>
              <TableCell align="center">{row.t5}</TableCell>
              <TableCell align="center">{row.t6}</TableCell>
              <TableCell align="center">{row.t7}</TableCell>
              <TableCell align="center">{row.t8}</TableCell>
              <TableCell align="center">{row.t9}</TableCell>
              <TableCell align="right">{row.avg_val.toFixed(1)}</TableCell>
              <TableCell align="right">{row.min_val}</TableCell>
              <TableCell align="right">{row.max_val}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}> */}
      {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link> */}
      {/* </div> */}
    </React.Fragment>
  );
}
