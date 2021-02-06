import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
const createData = (date, time) => {
  return {
    date: new Date().toString().slice("0", "15"),
    t0: time[0],
    t1: time[1],
    t2: time[2],
    t3: time[3],
    t4: time[4],
    t5: time[5],
    t6: time[6],
    t7: time[7],
    t8: time[8],
    t9: time[9],
  };
};
const temperature = [24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

const rows = [
  createData(`${new Date()}`, temperature),
  // createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  // createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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
];

console.log(rows);

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
              Date
            </TableCell>
            {tempLabels.map((tempLabel) => (
              <TableCell style={{ fontWeight: "bold" }}>{tempLabel}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell>{row.t0}</TableCell>
              <TableCell>{row.t1}</TableCell>
              <TableCell>{row.t2}</TableCell>
              <TableCell>{row.t3}</TableCell>
              <TableCell>{row.t4}</TableCell>
              <TableCell>{row.t5}</TableCell>
              <TableCell>{row.t6}</TableCell>
              <TableCell>{row.t7}</TableCell>
              <TableCell>{row.t8}</TableCell>
              <TableCell>{row.t9}</TableCell>
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
