import React, { Component } from "react";
import LevelInputButton from "./LevelInputButton";

import {
  TextField,
  Button,
  Grid,
  Typography,
  CssBaseline
} from "@material-ui/core";
import vision from "react-cloud-vision-api";
import CameraIcon from "./CameraIcon";
import GPSIcon from "./GPSIcon";
import TextIcon from "./TextIcon";
import { withTranslation } from "react-i18next";
import { classifyImage } from "../Api/Api";

vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });

class CreateLevel extends Component {
  state = {
    wincondition: "string",
    mainclue: "",
    clue2: "",
    clue3: "",
    wintext: "",
    windata: "",
    loading: null
  };
  render() {
    const { t } = this.props;
    const {
      wincondition,
      mainclue,
      clue2,
      clue3,
      wintext,
      windata
    } = this.state;

    return (
      <div>
        <CssBaseline />

        <div style={{ padding: 8 }}>
          <Typography component="h1" variant="h5">
            {t("Create new level")}
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                style: {
                  color: "black"
                }
              }}
              fullWidth
              value={mainclue}
              label={t("Main clue")}
              onChange={e => this.handleChange("mainclue", e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                style: {
                  color: "black"
                }
              }}
              fullWidth
              value={clue2}
              label={t("Second clue")}
              onChange={e => this.handleChange("clue2", e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                style: {
                  color: "black"
                }
              }}
              fullWidth
              value={clue3}
              label={t("Third clue")}
              onChange={e => this.handleChange("clue3", e.target.value)}
            />
          </Grid>

          <Typography variant="h5">{t("Select win condition")}</Typography>

          <div style={{ padding: 24 }}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <div
                data-cy="text-condition-button"
                onClick={e => this.handleCheck("string")}
              >
                <TextIcon clicked={this.state.wincondition === "string"} />
                {t("Text")}
              </div>

              <div
                data-cy="img-condition-button"
                onClick={e => this.handleCheck("image")}
              >
                <CameraIcon clicked={this.state.wincondition === "image"} />
                {t("Image")}
              </div>

              <div
                data-cy="gps-condition-button"
                onClick={e => this.handleCheck("gps")}
              >
                <GPSIcon clicked={this.state.wincondition === "gps"} />
                {t("GPS")}
              </div>
            </Grid>
          </div>
          <Grid item xs={12}>
            <LevelInputButton
              windata={windata}
              updateWinData={this.updateWinData}
              wincondition={wincondition}
              handleWinData={this.handleWinData}
              handleGPS={this.handleGPS}
              loading={this.state.loading}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                style: {
                  color: "black"
                }
              }}
              fullWidth
              value={wintext}
              label={t("Level completion message")}
              onChange={e => this.handleChange("wintext", e.target.value)}
            />
          </Grid>
        </Grid>

        {wincondition && mainclue && clue2 && clue3 && wintext && windata && (
          <Button
            onClick={() => {
              this.props.handleLevel(this.state);
              this.setState({
                wincondition: "string",
                mainclue: "",
                clue2: "",
                clue3: "",
                wintext: "",
                windata: ""
              });
            }}
            color="black"
            aria-label="Add"
            variant="outlined"
            style={{ margin: "24px" }}
          >
            {t("Add Level")}
          </Button>
        )}
      </div>
    );
  }

  handleCheck = winCon => {
    this.setState({ wincondition: winCon });
  };

  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };

  updateWinData = value => {
    this.setState({ windata: value });
  };

  handleWinData = value => {
    const { wincondition } = this.state;
    if (wincondition === "string") {
      this.setState({ windata: value, loading: false, answerValue: "" });
    }
    if (wincondition === "image") {
      this.setState({ loading: true });
      return classifyImage(value).then(labels => {
        this.setState({ windata: labels, loading: false });
      });
    }
    if (wincondition === "gps") {
      this.setState({ windata: value, loading: false });
    }
  };

  handleGPS = e => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(4);
      const long = position.coords.longitude.toFixed(4);
      this.setState({ loading: true });
      this.handleWinData(`${lat},${long}`);
    });
  };
}

export default withTranslation()(CreateLevel);
