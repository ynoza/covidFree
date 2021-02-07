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
