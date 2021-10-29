/* 
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('inserisci una parola')
let palindromo = (checkPalindrome(userWord));


let result = '';
if (palindromo === true) {
  result = `La parola è palindroma`;
} else {
  result = `La parola non è palindroma`;
}


const output = document.getElementById('parola');
output.innerHTML = `
La parola inserita è: ${userWord} <br>
${result}
`;


// Funzione che controlla se la parola inserità è palindroma
// Output generato è true o false
function checkPalindrome(word){
  let lengthWord = Math.floor(word.lengthWord /2);
  for(let i = 0; i < lengthWord; i++){
    if(word[i] !== str[word.length -1 -i]){
      return false;
    }
  }
  return true;
}