//array id
let flippedCards = [];
let counterror = 0;

// array con le carte mescolate
let arrayCard = [];
for (let i = 1; i <= 12; i++) {
  arrayCard.push("div" + i);
}

// funzione che mescola le carte
function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    let newIndex = Math.floor(Math.random() * array.length);
    [array[i], array[newIndex]] = [array[newIndex], array[i]];
  }
}

shuffleArray(arrayCard);

// nuovi id per le immagini
for (let i = 0; i < arrayCard.length; i++) {
  let newId = document.getElementById(arrayCard[i]);
  document.getElementById("contenitore").appendChild(newId);
}

// logica del game memory
function flipCard(cardId) {
  let card = document.getElementById(cardId);
  let img = card.querySelector("img");

  if (!flippedCards.includes(cardId) && flippedCards.length < 2) {
    img.style.display = "block";
    flippedCards.push(cardId);

    if(flippedCards.length === 1){
        startTimer();
    }


    if (flippedCards.length === 2) {
      let img1 = document.getElementById(flippedCards[0]).querySelector("img");
      let img2 = document.getElementById(flippedCards[1]).querySelector("img");

      if (img1.src === img2.src) {
        // reset dell'array nel caso in cui tutte le carte combaciano
        flippedCards = [];
      } else {
        // caso in cui le carte non combaciano
        setTimeout(() => {
          img1.style.display = "none";
          img2.style.display = "none";
          flippedCards = [];
          counterror++;
          updateError();
        }, 1000);
      }
    }
  }
}

// aggiornamento errori
function updateError() {
  let elementError = document.getElementById("errore");
  elementError.textContent = "Errori commessi: " + counterror;
}

// ad ogni carta assegno un evento click che fara' girare le carte
for (let i = 1; i <= 12; i++) {
  let cardId = "div" + i;
  let card = document.getElementById(cardId);
  card.addEventListener("click", function () {
    flipCard(cardId);
  });
}

//resetta i dati
function resetGame() {
  flippedCards = [];
  counterror = 0;
  updateError();
  minutes = 0;
  seconds = 0;

  // reset carte
  for (let i = 1; i <= 12; i++) {
    let cardId = "div" + i;
    let img = document.getElementById(cardId).querySelector("img");
    img.style.display = "none";
  }
}


     //time
     let minutes = 0;
     let seconds = 0;
     let timerInterval;

     function updateTimer() {
         document.getElementById("timer").textContent =
             "Tempo di gioco: " + minutes + "m " + seconds + "s";
     }

     function startTimer() {
         timerInterval = setInterval(function () {
             seconds++;

             if (seconds === 60) {
                 seconds = 0;
                 minutes++;
             }

             updateTimer();
         }, 1000);
     }

     function stopTimer() {
         clearInterval(timerInterval);
     }

     function resetTimer() {
         minutes = 0;
         seconds = 0;
         updateTimer();
     }

  
     