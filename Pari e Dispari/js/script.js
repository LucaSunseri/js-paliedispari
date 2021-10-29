/* 
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Facciamo scegliere all'utente pari o dispari
let userEvendOdd = prompt('Inserisci pari o dispari');

// Creiamo un ciclo in modo tale che fino a quando l'utente non inserisce in modo corretto pari o dispari non può andare avanti!
while ((userEvendOdd !== 'pari') && (userEvendOdd !== 'dispari')) {
  userEvendOdd = prompt('Attenzione scrivere pari o dispari in modo corretto!');
}
// console.log('Utente ha scelto:', userEvendOdd);


// Facciamo scegliere all'utente un numero tra 1 e 5
let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

// Creiamo un ciclo in modo tale che fino a quando l'utente non inserisce un numero tra 1 e 5 non può andare avanti!
while ((isNaN(userNumber)) || (userNumber <= 0) || (userNumber > 5)) {
  userNumber = parseInt(prompt('Attenzione inserire un numero corretto tra 1 a 5!'));
}
// console.log('Numero scelto utente:', userNumber);


// Estraiamo un numero casuale per il tra 1 e 5
const pcNumber = randomNumber(1, 5);
// console.log('Numero casuale pc:', pcNumber);


// Facciamo la somma tra i 2 numeri
const sumNumber = userNumber + pcNumber;
// console.log('Somma tra numero utente e pc', sumNumber);


// Stabilia se il vincitore sarà pari o dispari
const result = evenOdd(sumNumber);
// console.log('Il vincitore è:', win);

let win = '';

// Decretiamo il vincitore
if (result === userEvendOdd) {
  win = ` Complimenti hai vinto`;
  // console.log('Utente è il vincitore');
} else {
  win = `Il pc ha vinto`;
  // console.log('Pc è il vincitore');
}

// Inseriamo il tutto nell HTML 
const output = document.getElementById('gioco');

output.innerHTML = `
  Hai scelto ${userEvendOdd} <br>
  Il numero da te scelto è ${userNumber} e quello del pc è ${pcNumber} <br>
  La somma dei due numeri è ${sumNumber} quindi è ${result} <br>
  ${win} 
`;


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


