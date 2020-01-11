import React from "react";
import theme from "../theme.js";
import { Container } from "@material-ui/core";
import LevelDisplay from "./LevelDisplay";
import { withTranslation } from "react-i18next";
import { getGame } from "../Api/Api";
class Play extends React.Component {
  state = {
    game: {},
    curLevel: 0,
    attempts: 0,
    changeLevelButton: false,
    answer: "",
    score: null,
    distanceAway: null
  };

  componentDidMount() {
    const { gameid } = this.props;
    getGame(gameid).then(game => {
      const score = game.levels.length * 3;
      this.setState({ game, score });
    });
  }

  render() {
    return (
      <Container theme={theme}>
        {this.state.game.levels ? (
          <LevelDisplay
            gameLevel={this.state.game.levels[this.state.curLevel]}
            curLevel={this.state.curLevel}
            changeLevel={this.changeLevel}
            attempts={this.state.attempts}
            checkAnswer={this.checkAnswer}
            checkPhotoAnswer={this.checkPhotoAnswer}
            checkGPSAnswer={this.checkGPSAnswer}
            changeLevelButton={this.state.changeLevelButton}
            title={this.state.game.title}
            numLevels={this.state.game.levels.length}
            winCondition={
              this.state.game.levels[this.state.curLevel] &&
              this.state.game.levels[this.state.curLevel].wincondition
            }
            completionMes={this.state.game.completion}
            game_id={this.props.gameid}
            score={this.state.score}
            distanceAway={this.state.distanceAway}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    );
  }

  checkAnswer = answer => {
    if (
      this.state.game.levels[this.state.curLevel].windata.toLowerCase() ===
      answer.toLowerCase()
    ) {
      this.setState(prevState => {
        return { changeLevelButton: true };
      });
    } else {
      this.setState(prevState => {
        return { attempts: prevState.attempts + 1, score: prevState.score - 1 };
      });
    }
  };

  checkGPSAnswer = answer => {
    let answerXcoord = answer.split(",")[0];
    let answerYcoord = answer.split(",")[1];
    let dataXcoord = this.state.game.levels[this.state.curLevel].windata.split(
      ","
    )[0];
    let dataYcoord = this.state.game.levels[this.state.curLevel].windata.split(
      ","
    )[1];
    let distanceX = Math.abs(answerXcoord - dataXcoord);
    let distanceY = Math.abs(answerYcoord - dataYcoord);

    let metersX = distanceX * 100000;
    let metersY = distanceY * 100000;
    let sqrt = Math.sqrt(metersX * metersY).toFixed(0);

    if (distanceX < 0.0005 && distanceY < 0.0005) {
      this.setState(prevState => {
        return { changeLevelButton: true };
      });
    } else {
      this.setState(prevState => {
        return {
          attempts: prevState.attempts + 1,
          score: prevState.score - 1,
          distanceAway: sqrt
        };
      });
    }
  };

  checkPhotoAnswer = inputArray => {
    let windata = this.state.game.levels[this.state.curLevel].windata;

    let total = [...inputArray, ...windata];
    let comparison = new Set([...windata, ...inputArray]);
    let comparisonArray = [...comparison];

    if (comparisonArray.length < total.length) {
      this.setState({ changeLevelButton: true });
    } else {
      this.setState(prevState => {
        return { attempts: prevState.attempts + 1, score: prevState.score - 1 };
      });
    }
  };

  changeLevel = prevState => {
    this.setState(prevState => {
      return {
        curLevel: prevState.curLevel + 1,
        changeLevelButton: false,
        attempts: 0
      };
    });
  };
}

export default withTranslation()(Play);
