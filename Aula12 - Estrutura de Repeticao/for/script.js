const input = require("prompt-sync")();
soma = 0
Verificarimpar = numero
for(let i = 0; i <= 3; i++){
    let numero = parseInt(input("Digite um valor: "))
    if (numero % 2 === 1 && numero/3 === 0){
        soma += numero
        console.log(numero)
    } else{
        console.log("Não é possivel somar este numero")
    }
}

console.log(soma);

