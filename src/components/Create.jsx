import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  CssBaseline,
  Container
} from "@material-ui/core";
import CreateLevel from "./CreateLevel";
import { submitGame, registerServiceWorker } from "../Api/Api";
import { navigate } from "@reach/router";
import { withTranslation } from "react-i18next";

class Create extends Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
    const { t } = this.props;
    const { title, description, completion, levels } = this.state;
    return (
      <Grid container>
        <Container
          style={{ marginBottom: "10px" }}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />

          <div style={{ padding: 24 }}>
            <Typography component="h1" variant="h5">
              {t("Create Your Game")}
            </Typography>
          </div>

          <Typography>{t("Create game header")}</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{
                  style: {
                    color: "black"
                  }
                }}
                label={t("Title")}
                onChange={e => this.handleChange("title", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                InputLabelProps={{
                  style: {
                    color: "black"
                  }
                }}
                label={t("Description")}
                onChange={e => this.handleChange("description", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                InputLabelProps={{
                  style: {
                    color: "black"
                  }
                }}
                label={t("Game completion message")}
                onChange={e => this.handleChange("completion", e.target.value)}
              />
            </Grid>
          </Grid>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Grid container justify="center">
            <CreateLevel handleLevel={this.handleLevel} />

            {
              <Button
                variant="outlined"
                color="inherit"
                style={{ margin: "24px" }}
                disabled={
                  !title || !description || !completion || !levels.length
                }
                onClick={this.handleSubmit}
              >
                {t("Submit Game")}
              </Button>
            }
          </Grid>
        </Container>
      </Grid>
    );
  }
  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };
  handleLevel = level => {
    const { levels } = this.state;
    this.setState({ levels: [...levels, level] });
  };
  handleSubmit = () => {
    const game = this.state;
    submitGame(game).then(game_id => {
      navigate(`/play/${game_id}`);
    });
  };
  componentDidMount = () => {
    registerServiceWorker();
  };
}

export default withTranslation()(Create);
