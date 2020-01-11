import React from "react";
import { Link as ReachLink } from "@reach/router";
import { Link, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import theme from "../theme";

const useStyles = makeStyles({
  card: {
    width: 500,
    heightMin: 175,
    ["@media (min-width:300px)"]: {
      width: 300
    },
    padding: 12,
    bgcolor: "background.paper",
    borderColor: "text.primary",
    borderRadius: 16,
    border: "100 px",
    margin: theme.spacing(1)
  },
  title: {
    marginBottom: 10,
    color: "black"
  },
  text: {
    marginTop: 10,
    color: "black"
  },
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
});

const GameLink = React.forwardRef((props, ref) => (
  <ReachLink innerRef={ref} {...props} />
));

const GameCard = props => {
  const classes = useStyles();

  const { t } = useTranslation();

  const { game } = props;
  return (
    <Link className={classes.link} to={`/play/${game.id}`} component={GameLink}>
      <Button
        variant='outlined'
        className={classes.card}
        key={game.game_id}
        style={{ borderWidth: "3px" }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            {game.title}
          </Typography>
          <Typography variant='body1' className={classes.text}>
            {game.description}
          </Typography>
          <Typography variant='body2' className={classes.text}>
            {t("levels")} {game.levels.length}
          </Typography>
        </div>
      </Button>
    </Link>
  );
};

export default GameCard;
