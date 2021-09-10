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

