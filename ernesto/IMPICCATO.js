var parSegreta="ingegni";
let tentativi=[];
let vite=parSegreta.length;



//acquisizione input 
function input() {
    //chiedere all utente una lettera da confrontare con la parola
    let utentInput = document.getElementById("inputU").value;
    return utentInput; 
}


//logica del gioco
function indovina(lettera) {
    tentativi.push(lettera);  //traccia lettera inserita

    //
    if(parSegreta.includes(lettera)){
        console.log(" hai trovato una lettera ",lettera, "è presente nella parola");
    } else{
        vite--;
        console.log('"', lettera, '" non presente nella porola');
    }

    var parIndovinata='';
    for(let i=0; i<parSegreta.length;i++){
        if(tentativi.includes(parSegreta[i])){
            parIndovinata += parSegreta[i];
        }else{
            parIndovinata+='_';
        }
    }

    if(vite==0){ //vite esaurite
        console.log("GAME OVER hai esaurito i tentativi, la porola da indovinare era:", parSegreta);

    }else if(parIndovinata === parSegreta){  //successo
        console.log(" COMPLIMENTI HAI INDOVINATO LA PAROLA", parSegreta);
    
    }else{  //svolgimento parola 
        console.log("Parola Segreta: ", parIndovinata);
    }
}



//input
for(let i=0; i<=vite;i++){
    let lettera = prompt("inserisci lettera:");
    indovina(lettera);
}