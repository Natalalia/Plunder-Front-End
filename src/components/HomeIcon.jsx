import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

const HomeIcon = () => {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color="primary"
      variant="round"
      aria-label="home"
      className={classes.fab}
    >
      <SvgIcon>
        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </SvgIcon>
    </Fab>
  );
};

const useStyles = makeStyles(theme => ({
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
    margin: theme.spacing(1),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#DE0404"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default HomeIcon;
