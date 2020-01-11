import React, { Component } from "react";
import chest from "../chest.png";
import test3 from "../test3.jpg";
import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { getLeaderBoard, submitScore } from "../Api/Api";
import { withTranslation } from "react-i18next";
import theme from "../theme";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "auto"
  },
  table: {
    maxWidth: 650
  },
  margin: {
    margin: theme.spacing(2.5)
  }
};

class LeaderBoard extends Component {
  state = {
    leaderBoard: [],
    username: null,
    enteredName: false
  };

  componentDidMount() {
    const { game_id } = this.props;
    getLeaderBoard(game_id).then((leaderBoard = []) => {
      this.setState({ leaderBoard });
    });
  }
  render() {
    const { classes, t } = this.props;
    return (
      <div>
        {!this.state.enteredName ? (
          <div>
            <Typography className={classes.margin} variant='h4' align='center'>
              {t("WelcomeLeaderboard")}
            </Typography>
            <Typography
              className={classes.margin}
              variant='body1'
              align='center'
            >
              {t("EnterNameLeaderBoard")}
            </Typography>
            <form
              className={`${classes.root} ${classes.form}`}
              onSubmit={this.submitScore}
            >
              <TextField
                InputLabelProps={{
                  style: {
                    color: "black"
                  }
                }}
                value={this.state.username ? this.state.username : ""}
                id='standard-name'
                label={t("Name")}
                className={classes.margin}
                onChange={e => {
                  this.handleInput(e.target.value);
                }}
              />
              <Button
                type='submit'
                variant='outlined'
                color='inherit'
                align='center'
                className={classes.margin}
                onClick={this.submitScore}
                disabled={
                  this.state.username && !this.state.enteredName ? false : true
                }
              >
                {t("Submit Score")}
              </Button>
            </form>
            <img
              src={chest}
              alt='treasure chest'
              style={{ maxWidth: "100vw", alignSelf: "center" }}
            />
          </div>
        ) : (
          <div>
            <Typography className={classes.margin} variant='h4' align='center'>
              {t("WelcomeLeaderboard")}
            </Typography>
            <Paper
              className={classes.root}
              style={{
                backgroundImage: `url(${test3})`,
                backgroundSize: "cover"
              }}
            >
              <Table
                style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
                className={classes.table}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>{t("Username")}</TableCell>
                    <TableCell align='right'>{t("Score")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.leaderBoard &&
                    this.state.leaderBoard
                      .sort((a, b) => {
                        return b.score - a.score;
                      })
                      .map((score, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell component='th' scope='row'>
                              {score.username}
                            </TableCell>
                            <TableCell align='right'>{score.score}</TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </Paper>
          </div>
        )}
      </div>
    );
  }

  handleInput = username => {
    this.setState({ username });
  };

  submitScore = e => {
    const { username } = this.state;
    const { score, game_id } = this.props;
    const highScore = { game_id, username, score };
    e.preventDefault();
    if (!this.state.username) {
      alert("Please enter a username");
    } else {
      submitScore(highScore);
      this.setState(prevState => {
        const leaderBoard = [highScore, ...prevState.leaderBoard];
        return { leaderBoard, username: "", enteredName: true };
      });
    }
  };
}

LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withTranslation()(withStyles(styles)(LeaderBoard));
