import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import SnapShotCam from "./SnapShotCam";
import CircularProgress from "@material-ui/core/CircularProgress";

const LevelInputButton = ({
  updateWinData,
  windata,
  wincondition,
  handleWinData,
  handleGPS,
  loading
}) => {
  const { t } = useTranslation();
  return (
    <Grid item xs>
      {wincondition === "string" && (
        <TextField
          value={windata}
          fullWidth
          InputLabelProps={{
            style: {
              color: "black"
            }
          }}
          label={t("Your answer")}
          onChange={e => updateWinData(e.target.value)}
        />
      )}
      {wincondition === "image" && <SnapShotCam handlePhoto={handleWinData} />}
      {wincondition === "gps" && (
        <Button variant="outlined" color="inherit" onClick={handleGPS}>
          {t("Send GPS")}
        </Button>
      )}
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
};

export default LevelInputButton;
