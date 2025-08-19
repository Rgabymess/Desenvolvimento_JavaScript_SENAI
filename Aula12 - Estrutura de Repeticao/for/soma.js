const input = require("prompt-sync")();
soma = 0
for(let i = 0; i <= 3; i++){
    let numero = parseInt(input("Digite um valor: "))
    soma += numero
    console.log(numero)

}

console.log(soma);

