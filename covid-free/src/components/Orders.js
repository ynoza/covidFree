import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { tempObj } from "./Dashboard";

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

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  let len = Object.keys(tempObj).length;
  let rows = [];
  let dates = Object.keys(tempObj);
  // console.log(dates);
  let start = Math.max(0, len - 7);
  for (let i = Math.max(0, len - 7); i < start + Math.min(len, 7); i++) {
    // console.log(dates[i]);
    let todayArr = tempObj[dates[i]];
    rows.push(createData(dates[i], todayArr));
  }
  return (
    <React.Fragment>
      <Title>Recent Temperatures (°C)</Title>
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
            {}
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
