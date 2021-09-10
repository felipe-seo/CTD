//1
function imprimeInverso(arr){
    console.log(arr.reverse());
}

let box = ['OK','BE', 'GONNA', 'IS', 'EVERYTHING'];
imprimeInverso(box);

//2
function inverter(arr){
    return arr.reverse();
}
console.log(box);

//3
let numbersBox = [1, 2, 30];
function somarArray(arr){
    const reducer = (accumulator, currentElement) => accumulator + currentElement;//Cria uma função que recebe dois parametros e retorna sua soma.
    return(arr.reduce(reducer));//Este método(reduce), chama uma função callback a caba elemento do array.
}
console.log(somarArray(numbersBox));

//bônus, retorna o produto do array:
function multiplicaElementos(arr){
    const reducer = (accumulator, currentElement) => accumulator * currentElement;
    return(arr.reduce(reducer));
}
console.log(multiplicaElementos(numbersBox));

//4
function join(str) {
    const reducer = (accumulator, currentElement) => accumulator+currentElement;
    return str.reduce(reducer);    
}
let str = ['b','a','n','a','n','a'];

let newStr = join(str);
console.log(newStr);
console.log(typeof(newStr));

//5
let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];