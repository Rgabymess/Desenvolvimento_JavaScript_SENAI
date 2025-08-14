let ladoA = 10
let ladoB = 10
let ladoC = 10

let AB = ladoA + ladoB
let AC = ladoA + ladoC
let BC = ladoB + ladoC

if(AB > ladoC && AC > ladoB && BC > ladoA){
    console.log("Lados Válidos para formar um triâgulo")
    if(ladoA == ladoB && ladoA == ladoC){
        console.log("Seu triângulo é equilátero")
    } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("Seu triângulo é isoseles")
    } else{
        console.log("Seu triângulo é escaleno")
    }
}else{
    console.log("Lados Inválidos para formar um triâgulo")

}