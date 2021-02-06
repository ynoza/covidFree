import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  center: {
    margin: 'auto',
  }
});
export const dateArr = [
  "Sun Jan 31 2021",
  "Mon Feb 01 2021",
  "Tues Feb 02 2021",
  "Wed Feb 03 2021",
  "Thurs Feb 04 2021",
  "Fri Feb 05 2021",
  "Sat Feb 06 2021",
];

export const tempObj = {
  "Sun Jan 31 2021": [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
  "Mon Feb 01 2021": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
  "Tues Feb 02 2021": [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
  "Wed Feb 03 2021": [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  "Thurs Feb 04 2021": [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
  "Fri Feb 05 2021": [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
  "Sat Feb 06 2021": [25, 21, 25, 25, 25, 25, 25, 25, 25, 29],
};

const averageTemp = (dateArr, tempObj) => {
  let todayArr = tempObj[dateArr[dateArr.length - 1]];
  let yesterdayArr = tempObj[dateArr[dateArr.length - 2]];
  let combinedArr = todayArr.concat(yesterdayArr);
  const sum = combinedArr.reduce((a, b) => a + b, 0);
  const avg = sum / combinedArr.length || 0;
  return avg;
};

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div class={classes.center}>
      <Title>Average Temperature</Title>
      <Typography component="p" variant="h4" >
        {averageTemp(dateArr, tempObj)} °C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {`${dateArr[dateArr.length - 2]} - ${dateArr[dateArr.length - 1]}`}
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
