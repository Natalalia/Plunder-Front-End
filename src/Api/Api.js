import axios from "axios";
import vision from "react-cloud-vision-api";
import felix from "felix";
const URL = "https://mongo-flask-api.herokuapp.com/";

export const getGames = () => {
  const gamesURL = `${URL}gameslist`;
  return axios
    .get(`${URL}gameslist`)
    .then(({ data }) => {
      const cache = felix.create(gamesURL);
      cache.put("gamesList", data);
      registerServiceWorker();
      return cache.get("gamesList");
    })
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      return error;
    });
};

export const submitGame = game => {
  return axios
    .post(`${URL}games`, game)
    .then(({ data: { game_id } }) => {
      return game_id;
    })
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      return error;
    });
};

export const classifyImage = base64Img => {
  vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });
  const req = new vision.Request({
    image: new vision.Image({
      base64: base64Img
    }),
    features: [new vision.Feature("LABEL_DETECTION", 10)]
  });

  return vision
    .annotate(req)
    .then(
      ({ responses }) => {
        const labels = responses[0].labelAnnotations.reduce((acc, curr) => {
          acc.push(curr.description);
          return acc;
        }, []);
        return labels;
      },
      googleError => {
        console.log("Error: ", googleError);
      }
    )
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      return error;
    });
};

export const getGame = game_id => {
  const gameURL = `${URL}/games?id=${game_id}`;
  const cachedGame = felix.get(gameURL);

  return cachedGame
    ? Promise.resolve(cachedGame.get(game_id))
    : axios
        .get(gameURL)
        .then(({ data }) => {
          let cache = felix.create(gameURL);
          cache.put(game_id, data);
          registerServiceWorker();
          return cache.get(game_id);
        })
        .catch(err => {
          if (!err.response) {
            const error = {
              message: "You are offline"
            };
            return error;
          }
          if (err.response.status) {
            const error = {
              message: "Game does not exist"
            };
            return error;
          }
        });
};

export const getLeaderBoard = game_id => {
  return axios
    .get(`${URL}/leaderboards?game_id=${game_id}`)
    .then(({ data: { leaderBoard } }) => {
      return leaderBoard;
    })
    .catch(err => console.log(err));
};

export const submitScore = score => {
  return axios
    .patch("https://mongo-flask-api.herokuapp.com/leaderboards", score)
    .catch(error => {
      console.log(error);
    });
};

export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../service-worker.js")
      .then(
        function(registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function(err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      )
      .catch(function(err) {
        console.log(err);
      });
  } else {
    console.log("service worker is not supported");
  }
};
