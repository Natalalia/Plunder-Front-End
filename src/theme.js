import { createMuiTheme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&:after": {
          borderBottomColor: "black"
        }
      }
    }
  },
  palette: {
    secondary: grey
  },
  typography: {
    fontFamily: "IM Fell English SC",
    fontSize: 16,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    textfieldColor: {
      color: "red",
      "&:focus": {
        color: "#DE0404"
      }
    }
  }
});
