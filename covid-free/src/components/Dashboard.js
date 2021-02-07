import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./ListItem";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import AverageChart from "./AverageChart";
import { Icon } from "@material-ui/core";
import db from "../firebase";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://devpost.com/software/covidfree-2021">
        covidFree 2021
      </Link>
    </Typography>
  );
}

export let user = "Jane";
// const drawerWidth = 240;

export let tempObj = {};
const getCollection = async (user) => {
  // date should be: Month Day, year (i.e. Feb 06, 2021)
  const docRef = db.collection(user).doc("date");
  const doc = await docRef.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    // data processing
    // console.log("Document data:", doc.data());
    let result = doc.data();
    // console.log("result:", result);
    // console.log("Day:", result["Mon Feb 01, 2021"]);
    let days = Object.keys(result);
    // console.log(days);
    days.sort(function (a, b) {
      return new Date(a) - new Date(b);
    });
    // console.log(days);
    days.forEach((day) => {
      let times = [];
      let t = Object.keys(result[day]);
      t.forEach((time) => {
        times.push(result[day][time].temperature);
      });
      tempObj[day] = times;
    });

    console.log(tempObj);
  }
};
getCollection(user);

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    width: "100%",
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  // drawerPaper: {
  //   position: "relative",
  //   whiteSpace: "nowrap",
  //   width: drawerWidth,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, true && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Icon>
            <LocalHospitalIcon />
          </Icon>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            covidFree
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={69} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* AverageChart */}
            <Grid item xs={12} md={8} lg={12}>
              <Paper className={fixedHeightPaper}>
                <AverageChart />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
