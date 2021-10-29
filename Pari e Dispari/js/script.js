/* 
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userEvendOdd = 'pari'; //inserire prompt
const userNumber = 2; //Inserire promt 
const pcNumber = randomNumber(1, 5);
console.log(pcNumber);


// Funzione che genera un numero random da X a Y compresi
function randomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)+ from);
}


