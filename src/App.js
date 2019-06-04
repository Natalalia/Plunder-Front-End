import React from "react";
import "./style.css";
import { Router, Location } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Play from "./components/Play";
import Axios from "axios";
import Paper from "@material-ui/core/Paper";
import PirateFont from "./PirateFont.ttf";
import test3 from "./test3.jpg";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const styles = {
  paperContainer: {
    backgroundImage: `url(${test3})`,
    width: "100%",
    margin: "0px"
  }
};

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    Axios.get("https://mongo-flask-api.herokuapp.com/gameslist").then(
      ({ data }) => {
        this.setState({ games: data });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Paper style={styles.paperContainer}>
          <Location>
            {({ location }) => <Header location={location} />}
          </Location>
          <Router>
            <Home path="/" games={this.state.games} />
            <Create path="/create" />
            <Play path="/play/:gameid" />
          </Router>
        </Paper>
      </div>
    );
  }
}

export default App;
