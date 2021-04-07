// Il programma chiede all’utente quanti secondi 
// mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()

var pastaSeconds = parseInt(prompt("Tra quanti secondi devi buttare la pasta?"));
// console.log(pastaSeconds);
var pastaMilliseconds = pastaSeconds * 1000;
// console.log(pastaMilliseconds);

// setTimeout con una funzione che avvisa che è ora di buttare la pasta
// dopo tot millisecondi (in base all'input dell'utente)

// Se si vuole usare una funzione anonima
setTimeout(function() {
    alert("E' ora di buttare la pasta! Buon appetito!");
}, pastaMilliseconds);

// Se si vuole usare una funzione con nome
// setTimeout( sayPasta, pastaMilliseconds );
// function sayPasta() {
//     alert("E' ora di buttare la pasta! Buon appetito!");
// }
