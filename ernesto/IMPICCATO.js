//variabili globali
var parSegreta="ingegni";  //parola prova della logica
let tentativi=[];   //traccia delle lettere inserite 
let vite=6;//parSegreta.length;   //conteggio vite


//logica del gioco
function indovina(lettera) {
    tentativi.push(lettera);  //traccia lettera inserita

    /*
    //controllo sul input per vedere se è contenuta nella parola
    let mess = '';
    if(parSegreta.includes(lettera)){
        //console.log(" hai trovato una lettera ",lettera, "è presente nella parola");
        
    } else{
        vite--;
        //console.log('"', lettera, '" non presente nella porola');
    }
    */
   if(parSegreta.includes(lettera)){
        mess = "complimenti lettera trovata";
   }else{
    vite--;
    
   }
    
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


//gestione input/interazione
function game(){
    let lettera = document.getElementById("inputUtent").value;
    indovina(lettera);
    document.getElementById("inputUtent").value="";  //pulisce l'input ad ogni tentativo
}