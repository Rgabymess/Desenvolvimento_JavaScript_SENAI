const input = require("prompt-sync")();

termoI = 0
let quantidadeT = 10;
let razao = 2

for(let i = termoI; i <= quantidadeT; i++){
    let termo = termoI + razao * i
    console.log(termo)
}