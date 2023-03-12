const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura123!";
const stringDeNumeros = "3456";

const citacao = 'Meu nome é: ';
const nome = 'Priscila!';

// concatenação

console.log(citacao + nome)

// template string ou template literal

const palavra = 'interpolada'
console.log(`Minha template literal ${palavra}`);

// UTF (Unicode Transformation Format)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// bibliotecas

 // comparação e conversão
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); 

 // quantidade
const senha2 = "minhaSenha123";
console.log(senha2.length) 