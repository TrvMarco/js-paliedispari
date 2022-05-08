// 1. Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola");
// 2. Creare una funzione per capire se la parola inserita è palindroma

// function palindromeword (str){
//     let splitString = str.split("");
//     let reverseStr = splitString.reverse().joinArray('');
//     console.log(reverseStr);
// }

// palindromeword(userWord)
// console.log(palindromeword)

// let parolaInvertita = "";

// function palidnrome (){
//     return palidnromeWord
// }

let parolaInvertita = "";
let palidnromeWord = false

for( i = userWord.length - 1; i >= 0; i--){
    parolaInvertita += userWord[i];
}
if(userWord == parolaInvertita){
    palidnromeWord = true
}


function isPalindrome (){
    let parolaInvertita = "";
    let palidnromeWord = false

    for( i = userWord.length - 1; i >= 0; i--){
        parolaInvertita += userWord[i];
    }
    if(userWord == parolaInvertita){
        palidnromeWord = true
    }

    return palidnromeWord
}

isPalindrome(luca)


