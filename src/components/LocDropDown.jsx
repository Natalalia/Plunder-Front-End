import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Select, InputLabel, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  form: {
    width: 100,
    height: 25
  },
  input: {
    "&:after": {
      borderBottomColor: "black"
    }
  }
});

const LocDropDown = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [setLang] = useState("English");
  const langObj = { en: "English", es: "Spanish" };
  return (
    <FormControl className={classes.form}>
      <InputLabel style={{ fontSize: "25px" }} focused={false}>
        {t("current-language")}
      </InputLabel>
      <Select
        className={classes.input}
        value={"lang"}
        onChange={e => {
          i18n.changeLanguage(e.target.value);
          setLang(langObj[e.target.value]);
        }}
      >
        <MenuItem value={"en"}>{t("English-lang")}</MenuItem>
        <MenuItem value={"es"}>{t("Spanish-lang")}</MenuItem>
        <MenuItem value={"it"}>{t("Italian-lang")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocDropDown;
