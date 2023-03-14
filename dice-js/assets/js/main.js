
/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


//faccio costanti
const player1 = "PLAYER 1";
const player2 = "PLAYER 2";
const result_1 = document.getElementById('result1')
const result_2 = document.getElementById('result2')
/* const rollTheDice = document.getElementById('check_button'); */

//faccio funzione
function rollDice() {

    //genero numeri random
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    console.log(random1, random2)

    result_1.innerHTML = random1
    result_2.innerHTML = random2

    if (random1 === random2) {
        document.querySelector("h1").innerHTML = "PAREGGIO SCHIAPPE!";
    }

    else if (random1 < random2) {
        document.querySelector("h1").innerHTML
            = (player2 + " VINCE PORCODDUE!");
    }

    else {
        document.querySelector("h1").innerHTML
            = (player1 + " VINCE PORCODDUE!");
    }

}

//pulsante per iniziare un random
check_button.addEventListener('click', rollDice);