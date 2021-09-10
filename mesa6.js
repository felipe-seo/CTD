let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

function maiusculas(arr){
    upper = arr.map(x => x.toUpperCase());
    return upper;
}

filmes = maiusculas(filmes);
console.log(filmes);

let anima = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

anima.pop();

function merge(arr1, arr2){
    return(arr1.concat(arr2));
}
filmes = merge(filmes, anima);
console.log(filmes);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function notas(arr1, arr2){
    if (arr1.join() == arr2.join()) {
        return ("As notas são iguais");
    } else {
        return ("As notas são diferentes");
    }
}
console.log(notas(asiaScores, euroScores));

