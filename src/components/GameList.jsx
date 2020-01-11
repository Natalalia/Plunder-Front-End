import React, { Component } from "react";
import GameCard from "./GameCard";
import { withStyles } from "@material-ui/styles";

const styles = {
  gameCard: {
    padding: "20px"
  }
};

class GameList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.games &&
            this.props.games.map(game => {
              return <GameCard key={game.id} game={game} />;
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GameList);
