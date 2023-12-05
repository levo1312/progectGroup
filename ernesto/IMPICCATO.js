//variabili globali
var parSegreta="ingegni";  //parola prova della logica
let tentativi=[];   //traccia delle lettere inserite 
let vite=6;//parSegreta.length;   //conteggio vite


//logica del gioco
function indovina(lettera) {
    tentativi.push(lettera);  //traccia lettera inserita
    
    let parIndovinata='';   //traccia lettere indovinate
    //ciclo di controllo sulla lettera inserita
    for(let i=0; i<parSegreta.length;i++){
        if(tentativi.includes(parSegreta[i])){
            parIndovinata += parSegreta[i];
        }else{
            parIndovinata+='_';
        }
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

/*
da fare:
    - implementare punteggio
    - implementare controllo CE
    


//controlla che la lettera in input sia contenuta nella parola
function controllo() {
     
    if(parSegreta.includes(lettera)){
        mess = "complimenti lettera trovata";
    }else{
        vite--;
        mess = " la lettera scelta non è presente nella parola";
    }
}
*/


//gestione input/interazione
function game(){
    let lettera = document.getElementById("inputUtent").value;
    
    indovina(lettera);
    document.getElementById("inputUtent").value="";  //pulisce l'input ad ogni tentativo
}