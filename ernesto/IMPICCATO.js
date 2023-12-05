//variabili globali
var arrparSegreta=["ingegni", "cocacola", "cane", "fiori", "cioccolato"];  //parola prova della logica
let parSegreta = arrparSegreta[Math.floor(Math.random()*arrparSegreta.length)];
//let parSegreta = "ingegni";
let tentativi=[];   //traccia delle lettere inserite 
let vite=6;//parSegreta.length;   //conteggio vite


//logica del gioco
function indovina(lettera) {
    tentativi.push(lettera);  //traccia lettera inserita
    let mess = '';

    let parIndovinata='';   //traccia lettere indovinate
    let letteEsis = false;
    //ciclo di controllo sulla lettera inserita
    for(let i=0; i<parSegreta.length;i++){
        if(tentativi.includes(parSegreta[i])){
            parIndovinata += parSegreta[i];
            if(parSegreta[i] === lettera){
                letteEsis=true;
            }
        }else{
            parIndovinata+='_';
        }
    }

    // riduci il numero di vite se la lettera non esiste nella parola segreta
    if (!letteEsis) {
        vite--;
        mess = "lettera non presente nella parola";
    }
    

    if(vite==0){ //vite esaurite
        mess = "GAME OVER hai esaurito i tentativi per trovare la parola segreta:"+ parSegreta;
    }else if(parIndovinata === parSegreta){  //successo
        mess = "HAI INDOVINATO la parola segreta:"+ parSegreta;
    
    }else{  //svolgimento parola 
        mess = "Parola Secreta: " + parIndovinata;
    }


    document.getElementById("misteryWord").innerHTML = mess;
}


//gestione input/interazione
function game(){
    let lettera = document.getElementById("inputUtent").value;
    indovina(lettera);
    document.getElementById("inputUtent").value="";  //pulisce l'input ad ogni tentativo
}

/*
da fare:
    - implementare punteggio
    - implementare controllo CE
*/