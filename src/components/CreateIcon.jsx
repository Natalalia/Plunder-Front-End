import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

const CreateIcon = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Fab
      size="small"
      variant="extended"
      aria-label="create"
      className={classes.fab}
    >
      {t("create")}
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
    },
    color: "white"
  },

  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default CreateIcon;
