/* 
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userEvendOdd = 'pari'; //inserire prompt
const userNumber = 5; //Inserire promt 
console.log('Numero scelto utente:', userNumber);
const pcNumber = randomNumber(1, 5);
console.log('Numero casuale pc:', pcNumber);

const sumNumber = userNumber + pcNumber;
console.log('Somma tra numero utente e pc', sumNumber);

const win = evenOdd(sumNumber);
console.log('Il vincitore è:', win);



// Funzione che genera se un numero è pari o dispari
function evenOdd (numero) {

  let even = true;
  let result = 'pari';

  if (numero % 2 !== 0) {
    even = false;
    result = 'dispari';
  } 

  return result;
}

// Funzione che genera un numero random da X a Y compresi
function randomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)+ from);
}


