function mostrarResultado(){

    
    let ladoA = parseInt(document.querySelector("#ladoA").value)
    let ladoB = parseInt(document.querySelector("#ladoB").value)
    let ladoC = parseInt(document.querySelector("#ladoC").value)
    let tipagem = document.querySelector("#tipagem")
    let resultado = document.querySelector("#resultado")

    let AB = ladoA + ladoB
    let AC = ladoA + ladoC
    let BC = ladoB + ladoC

    if(AB > ladoC && AC > ladoB && BC > ladoA){
        tipagem.innerHTML = "Lados validos para formar um triângulo"
        resultado.style.display = "block"
        if(ladoA == ladoB && ladoA == ladoC){
            resultado.innerHTML = "Seu triângulo é equilátero"
        } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            resultado.innerHTML = "Seu triângulo é isoseles"
        } else{
            resultado.innerHTML = "Seu triângulo é escaleno"
        }
    }else{
        tipagem.innerHTML = "Lados Inválidos para formar um triâgulo"
        resultado.style.display = "none"

    }






}

