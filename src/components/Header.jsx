import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Link } from "@reach/router";
import LocDropDown from "./LocDropDown";
import CreateIcon from "./CreateIcon";
import HomeIcon from "./HomeIcon";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar>
        {props.location.pathname !== "/" && (
          <img
            style={{ width: "40vw" }}
            alt="logo"
            src={require("../mainLogo.png")}
          />
        )}
        <div style={{ marginLeft: "auto" }}>
          <LocDropDown />
          {props.location.pathname === "/" ? (
            <Link className={classes.button} to="/create">
              <div style={{ display: "inline", paddingLeft: "10px" }}>
                <CreateIcon />
              </div>
            </Link>
          ) : (
            <Link className={classes.button} to="/">
              <HomeIcon />
            </Link>
          )}
        </div>
      </Toolbar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: "#283593",
    fontWeight: 600,
    textDecoration: "none"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default Header;
