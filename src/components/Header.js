import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",

  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
      float: "right",
    },
  nawidth: {
    width: "100%",
  },
}
}));

function Header({
  test
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="fixed" light style={{ backgroundColor: 'rgb(0, 0, 0, .9)' }} className={classes.nawidth}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
        <i class="fab fa-dashcube"> /</i>
           JDLeads
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home {test}
            </Link>
            <Link to="/form" className={classes.link}>
              Sign Up
            </Link>
            <Link to="/employee" className={classes.link}>
              Employee
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;