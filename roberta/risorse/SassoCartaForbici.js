
const choicesArray = ['Sasso', 'Carta', 'Forbici', 'Lucertola', 'Spock'];


let playButton = document.getElementById('play');
let choices = document.getElementsByName('choice');

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function() {
        playButton.disabled = false;
    });
}

let resultDisplay = document.getElementById('result');
const userChoice = document.getElementById('user-choice');

playButton.addEventListener('click', (e) => {
    console.log("button");
    let buttonsArray = Array.from(choices);

    let selected = buttonsArray.filter((i) => i.checked);

    //inserisce il testo del valore scelto
    addTextToSpan(userChoice, selected[0].id);


    let randChoice = generateComputerChoice();
    
    showResult(selected[0].id, randChoice);

    //Abilita il pulsante "Gioca" dopo aver preso il valore checkato
    e.target.disabled = true;

    choices.forEach((b) => {
        b.checked = false;
    })
})

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text;
}



let computerChoice = document.getElementById('computer-choice');

function generateComputerChoice() {
    let randomItem = Math.floor(Math.random() * choicesArray.length);
    let compChoice = choicesArray[randomItem];
    addTextToSpan(computerChoice, choicesArray[randomItem]);
    return compChoice;
}



//Compara le scelte e stampa i risultati
function showResult(userChoice, computerChoice) {
    console.log("ciao2");
    switch (userChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    addTextToSpan(resultDisplay, "Pareggio!"); 
                    console.log("ciao");
                    break;        
                case 'paper':
                    addTextToSpan(resultDisplay, "Hai perso... Carta avvolge sasso");
                    console.log("ciao");
                    break;
                case 'scissors':
                    addTextToSpan(resultDisplay, "Hai vinto! Sasso rompe forbici");
                    console.log("ciao");
                    break;
                case 'lizard':
                    addTextToSpan(resultDisplay, "Hai vinto! Sasso schiaccia lucertola");
                    console.log("ciao");
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai perso... Spock vaporizza sasso");
                    console.log("ciao");
                    break;
                default:
                    return "Scelta non valida";
            }
            break;

        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta avvolge sasso");
                    break;
                case 'paper':
                    addTextToSpan(resultDisplay, "Pareggio!");
                    break;
                case 'scissors':
                    addTextToSpan(resultDisplay, "Hai perso... Forbici tagliano carta");
                    break;
                case 'lizard':
                    addTextToSpan(resultDisplay, "Hai perso... Lucertola mangia carta");
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta disintegra Spock");
                    break;

                default:
                    return "Scelta non valida";
            }
            break;

        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    addTextToSpan(resultDisplay, "Hai perso... Sasso schiaccia forbici");
                    break;
                case 'paper':
                    addTextToSpan(resultDisplay, "Hai vinto! Forbici tagliano carta");
                    break;
                case 'scissors':
                    addTextToSpan(resultDisplay, "Pareggio!");
                    break;
                case 'lizard':
                    addTextToSpan(resultDisplay, "Hai vinto! Forbici decapitano lucertola");
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta disintegra Spock");
                    break;

                default:
                    return "Scelta non valida";
            }
            break;

            case 'lizard':
                switch (computerChoice) {
                    case 'rock':
                        addTextToSpan(resultDisplay, "Hai perso... Sasso schiaccia lucertola");
                        break;
                    case 'paper':
                        addTextToSpan(resultDisplay, "Hai vinto! Lucertola mangia carta");
                        break;
                    case 'scissors':
                        addTextToSpan(resultDisplay, "Hai perso... Forbici decapitano lucertola");
                        break;
                    case 'lizard':
                        addTextToSpan(resultDisplay, "Pareggio!");
                        break;
                    case 'spock':
                        addTextToSpan(resultDisplay, "Hai vinto! Lucertola avvelena Spock");
                        break;                    
                    
                    default:
                        return "Scelta non valida";
                }
                break;

                case 'spock':
                    switch (computerChoice) {
                        case 'rock':
                            addTextToSpan(resultDisplay, "Hai vinto! Spock vaporizza il sasso");
                            break;
                        case 'paper':
                            addTextToSpan(resultDisplay, "Hai perso... Carta disintegra Spock");
                            break;
                        case 'scissors':
                            addTextToSpan(resultDisplay, "Hai perso... Spock frantuma forbici");
                            break;
                        case 'lizard':
                            addTextToSpan(resultDisplay, "Hai perso... Lucertola avvelena Spock");
                            break;
                        case 'spock':
                            addTextToSpan(resultDisplay, "Pareggio!");
                            break; 

                        default:
                            return "Scelta non valida";
                    }
                    break;

        default:
            return "Scelta non valida";
    }
}
