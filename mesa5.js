function join(str) {
    const reducer = (accumulator, currentElement) => accumulator+currentElement;
    return str.reduce(reducer);    
}
let str = ['b','a','n','a','n','a'];

let newStr = join(str);
console.log(newStr);
console.log(typeof(newStr));

