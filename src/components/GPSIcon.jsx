import React from "react";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

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
    },
    "&:focus": {
      backgroundColor: "#DE0404"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function GPSIcon(props) {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color={props.clicked ? "secondary" : "primary"}
      variant="round"
      aria-label="GPS"
      className={classes.fab}
    >
      <SvgIcon>
        <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z" />
      </SvgIcon>
    </Fab>
  );
}

export default GPSIcon;
