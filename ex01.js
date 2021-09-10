let products = [
    'arroz',
    'feijão',
    'carne',
    'macarrão',
   'frango',
    'alface',
    'sal'
];

let prices = [
    5,
    4,
    35,
    6,
    20,
    4.5,
    9
]

console.log(`Este é o array: ${products}`);
console.log(`Isto é o que acontece quando aplicamos o método shift: ${products.shift()} <- o primeiro item do array foi exibido`);
console.log(`E ao aplicarmos o método unshift ${products.unshift('batata')} o item "batata" foi adicionado ao array`);
console.log(`Agora vamos transformar o array numa string através do método "join": ${prices.join(" ")} o argumento '" "' foi utilizado como separador`);
console.log(`O método pop, retira o último elemento do array. Elemento retirado:${products.pop()}`);
console.log(`O método push adiciona um elemento ou mais elementos no fim do vetor: ${products.push('maionese')}, ${products}`);

