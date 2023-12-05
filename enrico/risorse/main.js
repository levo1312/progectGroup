// selezione dei dati per il controllo del dom
// qui c`è la documentazione per la querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

const mainMenu = document.querySelector(".main-menu");
const clickableArea = document.querySelector(".clickable-area");
const message = document.querySelector(".clickable-area .message");
const endScreen = document.querySelector(".end-screen");
const reactionTimeText = document.querySelector(
  ".end-screen .reaction-time-text"
);
const playAgainBtn = document.querySelector(".end-screen .play-again-btn");

// inizializzo e posiziono in alto tutte le variabili globali che userò, inizializzo una funzione che mi inizializzerà tutte queste variabili con il valore che mi serve 

let timer;
let greenDisplayed;
let timeNow;
let waitingForStart;
let waitingForGreen;
let scores;

const init = () => {
  greenDisplayed = false;
  waitingForStart = false;
  waitingForGreen = false;
  scores = [];
};

init();

// qui creo le mie funzioni per creare e controllare il gioco
// dal green screen che da il via
const setGreenColor = () => {
  clickableArea.style.backgroundColor = "#32cd32";
  message.innerHTML = "Via!";
  message.style.color = "#111";
  greenDisplayed = true;
  timeNow = Date.now();
};
// un countdown da rivedere e renderlo interattivo...
const startGame = () => {
  clickableArea.style.backgroundColor = "#c1121f";
  message.innerHTML = "3, 2, ..., 1";
  message.style.color = "#fff";

  let randomNumber = Math.floor(Math.random() * 4000 + 3000);
  timer = setTimeout(setGreenColor, randomNumber);

  waitingForStart = false;
  waitingForGreen = true;
};
// al controllo dell'evento del click 
mainMenu.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  startGame();
});

// Qui c`è la scala del punteggio

const calcolaPunteggio = (mediaTempoReazione) => {
  const scalaPunteggio = [
    { limiteSuperiore: 200, punteggio: 100 },
    { limiteSuperiore: 300, punteggio: 90 },
    { limiteSuperiore: 400, punteggio: 80 },
    { limiteSuperiore: 500, punteggio: 70 },
    { limiteSuperiore: 600, punteggio: 60 },
    { limiteSuperiore: 700, punteggio: 50 },
    // Aggiungi altre regole se necessario
  ];
  // con il controllo per dare il punteggio in base alla media dei tempi di reazione
  for (const regola of scalaPunteggio) {
    if (mediaTempoReazione <= regola.limiteSuperiore) {
      return regola.punteggio;
    }
  }

  return 40;
};

// la fine del gioco che ritorna la media dei tempi di reazione e il punteggio totalizzato
const endGame = () => {
  endScreen.classList.add("active");
  clearTimeout(timer);

  let total = 0;

  scores.forEach((s) => {
    total += s;
  });

  let averageScore = Math.round(total / scores.length);
  let punteggioFinale = calcolaPunteggio(averageScore);

  reactionTimeText.innerHTML = `La tua media del tempo di reazione è ${averageScore} ms<br>Punteggio: ${punteggioFinale}`;
};

//con displayReactionTime mostro il tempo di reazione al click
const displayReactionTime = (rt) => {
  clickableArea.style.backgroundColor = "#faf0ca";
  message.innerHTML = `<div class='reaction-time-text'>${rt} ms</div>Click per continuare.`;
  greenDisplayed = false;
  waitingForStart = true;
  scores.push(rt);

  if (scores.length >= 3) {
    endGame();
  }
};

// mostro all`utente un messaggio di spiegazione se non rispetta il tempo

const displayTooSoon = () => {
  clickableArea.style.backgroundColor = "#faf0ca";
  message.innerHTML = "Devi aspettare il verde Melo";
  message.style.color = "#111";
  waitingForStart = true;
  clearTimeout(timer);
};

// eventListener per far ricominciare il gioco

clickableArea.addEventListener("click", () => {
  if (greenDisplayed) {
    let clickTime = Date.now();
    let reactionTime = clickTime - timeNow;
    displayReactionTime(reactionTime);
    return;
  }

  if (waitingForStart) {
    startGame();
    return;
  }

  if (waitingForGreen) {
    displayTooSoon();
  }
});

playAgainBtn.addEventListener("click", () => {
  endScreen.classList.remove("active");
  init();
  startGame();
});
