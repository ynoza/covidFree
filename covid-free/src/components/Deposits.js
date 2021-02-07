import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { tempObj } from "./Dashboard";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  center: {
    margin: "auto",
  },
});

// export const obj = getCollection('Jane');
// console.log(obj);
// export const tempObj = {
//   // "Fri Jan 29 2021": [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
//   // "Sat Jan 30 2021": [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
//   "Sun Jan 31 2021": [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
//   "Mon Feb 01 2021": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
//   "Tues Feb 02 2021": [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
//   "Wed Feb 03 2021": [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
//   "Thurs Feb 04 2021": [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
//   "Fri Feb 05 2021": [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
//   "Sat Feb 06 2021": [24, 21, 24, 2, 24, 28, 24, 21, 18, 21],
// };

const averageTemp = (tempObj) => {
  let keys = Object.keys(tempObj);
  let todayArr = tempObj[keys[keys.length - 1]];
  let yesterdayArr = tempObj[keys[keys.length - 2]];
  let combinedArr = todayArr.concat(yesterdayArr);
  const sum = combinedArr.reduce((a, b) => a + b, 0);
  const avg = sum / combinedArr.length || 0;
  return avg.toFixed(1);
};

export default function Deposits() {
  const classes = useStyles();
  let keys = Object.keys(tempObj);
  return (
    <React.Fragment>
      <div class={classes.center}>
        <Title>Average Temperature</Title>
        <Typography component="p" variant="h4">
          {averageTemp(tempObj)}°C
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          {`${keys[keys.length - 2].slice(4)} - ${keys[keys.length - 1].slice(
            4
          )}`}
        </Typography>
        <div>
          {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
        </div>
      </div>
    </React.Fragment>
  );
}
