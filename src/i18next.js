import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "current-language": "English",
      "Create New Game": "Create Game",
      "English-lang": "English",
      "Spanish-lang": "Spanish",
      "Italian-lang": "Italian",
      "Create Your Game": "Create Your Game:",
      "Create game header":
        "Give your new game a name and add a short description.",
      "Submit Game": "Submit Game",
      Title: "Title:",
      Description: "Description:",
      "Game completion message": "Game completion message:",
      levels: "Levels:",
      "introduction paragraph":
        "Welcome to TheHunt, where you can challenge your friends to hunt pretty much whatever you want! Set some clues(as hard or as easy as you like), find some objects, beat your friends! Can you find everything without using any clues??Pick one of the games, or create your own!",
      "Create new level": "Create level:",
      "Main clue": "Main clue:",
      "Second clue": "Second clue:",
      "Third clue": "Third clue:",
      "Select win condition": "Select a win condition:",
      Text: "Text",
      Image: "Image",
      "Send GPS": "Send GPS",
      "Level completion message": "Level completion message:",
      "Add Level": "Add Level",
      create: "create",
      Level: "Level",
      Task: "Task:",
      "Clue 1": "1st Clue:",
      "Clue 2": "2nd Clue:",
      Submit: "Submit",
      "Check GPS": "Check GPS",
      "take pic": "take pic",
      "Next Level": "Next Level",
      Home: "Home",
      "Your answer": "Your answer:",
      Finish: "Finish!",
      "Skip Level": "Skip Level?",
      "Skip to Finish": "Skip to Finish?",
      "initial distance msg": "You are about",
      "end distance msg": "m away!",
      Username: "Username",
      "High Scores": "High Scores",
      Score: "Score",
      EnterNameLeaderBoard:
        "Please enter your name to add your score to the leaderboard!",
      WelcomeLeaderboard: "Welcome to the leaderboard!",
      Name: "Name",
      "Submit Score": "Submit Score!"
    }
  },
  es: {
    translation: {
      "current-language": "Español",
      "Create New Game": "Crear Juego",
      "English-lang": "Inglés",
      "Spanish-lang": "Español",
      "Italian-lang": "Italiano",
      "Create Your Game": "Crea Tu Juego:",
      "Create game header":
        "Dale un nombre a tu juego y añade una breve descripción.",
      "Submit Game": "Enviar Juego",
      Title: "Nombre:",
      Description: "Descripción:",
      "Game completion message": "Mensaje final de juego:",
      levels: "Niveles:",
      "introduction paragraph":
        "Bienvenido a TheHunt, ¡dónde tú puedes retar a tus amigos a lo que sea! Pon algunas pistas (tan difíciles o fáciles como tú quieras), encuentra objetos, ¡machácales! ¿Eres capaz de encontrar todo sin necesitar ninguna pista? ¡Elige uno de los juegos, o crea el tuyo propio!",
      "Create new level": "Crear Nivel:",
      "Main clue": "Primera pista:",
      "Second clue": "Segunda pista:",
      "Third clue": "Tercera pista:",
      "Select win condition": "Elige como tiene que ser la respuesta:",
      Text: "Texto",
      Image: "Imagen",
      "Send GPS": "Enviar GPS",
      "Level completion message": "Mensaje al pasar de nivel:",
      "Add Level": "Añadir Nivel",
      create: "Crear Juego",
      Level: "Nivel",
      Task: "Misión:",
      "Clue 1": "1ª pista:",
      "Clue 2": "2ª pista:",
      Submit: "Enviar",
      "Check GPS": "Comprobar GPS",
      "take pic": "hacer foto",
      "Next Level": "Siguiente Nivel",
      Home: "Página Principal",
      "Your answer": "Respuesta esperada:",
      Finish: "Acabaste!",
      "Skip Level": "¿Saltar Nivel?",
      "Skip to Finish": "Ir al final?",
      "initial distance msg": "Estás a",
      "end distance msg": "m de distancia!",
      "High Scores": "Mejores puntuaciones",
      Username: "Jugador",
      Score: "Puntuación",
      EnterNameLeaderBoard:
        "Por favor, introduce tu nombre para la clasificación",
      WelcomeLeaderboard: "¡Bienvenido a las clasificaciones!",
      Name: "Nombre",
      "Submit Score": "¡Añade tu puntuación!"
    }
  },
  it: {
    translation: {
      "current-language": "Italiano",
      "Create New Game": "Crea Gioco",
      "English-lang": "Inglese",
      "Spanish-lang": "Spagnolo",
      "Italian-lang": "Italiano",
      "Create Your Game": "Crea Partita:",
      "Create game header":
        "Dai un nome alla tua partita e aggiungi una breve descrizione.",
      "Submit Game": "Invia Partita",
      Title: "Titolo:",
      Description: "Descrizione:",
      "Game completion message": "Messaggio di fine partita:",
      levels: "Livelli:",
      "introduction paragraph":
        "Benvenuto a TheHunt, dove puoi sfidare i tuoi amici a cercare tutto quello che vuoi! Stabilisci alcuni indizi (facili o difficili, come preferisci), trova alcuni oggetti, batti i tuoi amici! Riuscirai a trovare tutto senza usare alcun indizio? Seleziona una tra le partite gia' fatte o crea una personalizzata!",
      "Create new level": "Crea livello:",
      "Main clue": "Indizio principale:",
      "Second clue": "Secondo indizio:",
      "Third clue": "Terzo indizio:",
      "Select win condition": "Scegli la condizione di vittoria:",
      Text: "Testo",
      Image: "Immagine",
      "Level completion message": "Messaggio di fine livello:",
      "Add Level": "Aggiungi livello",
      create: "Crea Gioco",
      Level: "Livello",
      Task: "Compito:",
      "Clue 1": "Indizio 1:",
      "Clue 2": "Indizio 2:",
      Submit: "Invia",
      "Check GPS": "Controlla Posizione",
      "take pic": "Scatta foto",
      "Next Level": "Prossimo livello",
      Home: "Menu Principale",
      "Your answer": "La tua risposta:",
      "Send GPS": "Invia posizione",
      Finish: "Acabaste!",
      "Skip Level": "¿Saltar Nivel?",
      "Skip to Finish": "Ir al final?",
      "initial distance msg": "Estás a",
      "end distance msg": "m de distancia!",
      "High Scores": "Mejores puntuaciones",
      Username: "Jugador",
      Score: "Puntuación",
      EnterNameLeaderBoard:
        "Por favor, introduce tu nombre para la clasificación",
      WelcomeLeaderboard: "¡Bienvenido a las clasificaciones!",
      Name: "Nombre",
      "Submit Score": "¡Añade tu puntuación!"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
