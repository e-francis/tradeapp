import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { navbar } from "../../components/userDashboard";
import { leftbar } from "../../components/userDashboard";
import { theme } from "../../components/userDashboard";
import { feed } from "../../components/userDashboard";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default dashboard;
