function mostrarResultado(){

    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)
    let calculadora = document.querySelector("#calculadora").value
    let resultado = document.querySelector("#resultado")

    let calculo = 0

    if(calculadora === "1"){
        calculo = numero1 + numero2
        resultado.innerHTML = ("A soma dos números ficou " + calculo)
    } else if(calculadora === "2"){
        calculo = numero1 - numero2
        resultado.innerHTML = ("A subtração dos números ficou " + calculo)
    } else if(calculadora === "2"){
        calculo = numero1 - numero2
        resultado.innerHTML = ("A subtração dos números ficou " + calculo)
    } else if(calculadora === "3"){
        calculo = numero1 / numero2
        resultado.innerHTML = ("A divisão dos números ficou " + calculo)
    } else{
        calculo = numero1 * numero2
        resultado.innerHTML = ("A multiplicação dos números ficou " + calculo) 
    }


}