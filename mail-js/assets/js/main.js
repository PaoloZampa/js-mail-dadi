/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */

// Strummenti da utilizzare
// else if
//function
//if else
// dom manipulation
// array

//creo lista di mail accedere
const emailTrue = [
    "paolozampa@gmail.com",
    "mattiavolpe@gmail.com",
    "alexfioretti@gmail.com",
    "martinaderose@gmail.com",
    "fabiopacifici@gmail.com",
    "porcoddue@gmail.com",
    "vivalafesta@gmail.com",
    "lucapiacentini@gmail.com",
    "mariorossi@gmail.com",
    "bigioggiero@gmail.com",
    "alebert@gmail.com"];

//function for checking if email is equal
function emailCheck() {

    //creo costanti dall'html
    const emailUser = document.getElementById('email');
    const message = document.getElementById('final_message')
    const userEmail = emailUser.value;

    //uso if else
    if (emailTrue.includes(userEmail)) {
        message.innerHTML = `L' e-mail ${userEmail} è autorizzata`;
    } else {
        message.innerHTML = `L' e-mail ${userEmail} non è autorizzata`;
    }
}

//add button to check email
const checkButton = document.getElementById('check_button');
checkButton.addEventListener('click', emailCheck);