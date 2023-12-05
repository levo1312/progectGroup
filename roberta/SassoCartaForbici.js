const choicesArray = ['sasso', 'carta', 'forbici', 'lucertola', 'spock'];


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

    show.classList.add("show-choises");
})

//Scrive su span
function addTextToSpan(spanControl, text) {
    spanControl.textContent = text;
}


let computerChoice = document.getElementById('computer-choice');

function generateComputerChoice() {
    let randomItem = Math.floor(Math.random() * choicesArray.length);
    let compChoice = choicesArray[randomItem];
    addTextToSpan(computerChoice, compChoice);
    return compChoice;
}


//Compara le scelte e stampa i risultati
function showResult(userChoice, computerChoice) {
    switch (userChoice) {
        case 'sasso':
            switch (computerChoice) {
                case 'sasso':
                    addTextToSpan(resultDisplay, "Pareggio!"); 
                    break;        
                case 'carta':
                    addTextToSpan(resultDisplay, "Hai perso... Carta avvolge sasso");
                    break;
                case 'forbici':
                    addTextToSpan(resultDisplay, "Hai vinto! Sasso rompe forbici");
                    addToScore();
                    break;
                case 'lucertola':
                    addTextToSpan(resultDisplay, "Hai vinto! Sasso schiaccia lucertola");
                    addToScore();
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai perso... Spock vaporizza sasso");
                    break;
                default:
                    return "Scelta non valida";
            }

            break;

        case 'carta':
            switch (computerChoice) {
                case 'sasso':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta avvolge sasso");
                    addToScore();
                    break;
                case 'carta':
                    addTextToSpan(resultDisplay, "Pareggio!");
                    break;
                case 'forbici':
                    addTextToSpan(resultDisplay, "Hai perso... Forbici tagliano carta");
                    break;
                case 'lucertola':
                    addTextToSpan(resultDisplay, "Hai perso... Lucertola mangia carta");
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta confuta Spock");
                    addToScore();
                    break;

                default:
                    return "Scelta non valida";
            }
            break;

        case 'forbici':
            switch (computerChoice) {
                case 'sasso':
                    addTextToSpan(resultDisplay, "Hai perso... Sasso rompe forbici");
                    break;
                case 'carta':
                    addTextToSpan(resultDisplay, "Hai vinto! Forbici tagliano carta");
                    addToScore();
                    break;
                case 'forbici':
                    addTextToSpan(resultDisplay, "Pareggio!");
                    break;
                case 'lucertola':
                    addTextToSpan(resultDisplay, "Hai vinto! Forbici decapitano lucertola");
                    addToScore();
                    break;
                case 'spock':
                    addTextToSpan(resultDisplay, "Hai vinto! Carta disintegra Spock");
                    addToScore();
                    break;

                default:
                    return "Scelta non valida";
            }
            break;

            case 'lucertola':
                switch (computerChoice) {
                    case 'sasso':
                        addTextToSpan(resultDisplay, "Hai perso... Sasso schiaccia lucertola");
                        break;
                    case 'carta':
                        addTextToSpan(resultDisplay, "Hai vinto! Lucertola mangia carta");
                        addToScore();
                        break;
                    case 'forbici':
                        addTextToSpan(resultDisplay, "Hai perso... Forbici decapitano lucertola");
                        addToScore();
                        break;
                    case 'lucertola':
                        addTextToSpan(resultDisplay, "Pareggio!");
                        break;
                    case 'spock':
                        addTextToSpan(resultDisplay, "Hai vinto! Lucertola avvelena Spock");
                        addToScore();
                        break;                   
                    
                    default:
                        return "Scelta non valida";
                }
                break;

                case 'spock':
                    switch (computerChoice) {
                        case 'sasso':
                            addTextToSpan(resultDisplay, "Hai vinto! Spock vaporizza il sasso");
                            addToScore();
                            break;
                        case 'carta':
                            addTextToSpan(resultDisplay, "Hai perso... Carta confuta Spock");
                            break;
                        case 'forbici':
                            addTextToSpan(resultDisplay, "Hai vinto! Spock frantuma forbici");
                            addToScore();
                            break;
                        case 'lucertola':
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

let score = 0;
let userScore = document.getElementById('score');

function addToScore(){
    score++;
    console.log(score);
    userScore.textContent = score;
}

