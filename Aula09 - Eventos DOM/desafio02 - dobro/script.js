function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let dobro = numero * 2
    let triplo = numero * 3
    let raiz = Math.sqrt(numero) 
   

    let paragrafoDobro = document.querySelectorAll("p")[0]
    let paragrafoTriplo = document.querySelectorAll("p")[1]
    let paragrafoRaiz = document.querySelectorAll("p")[2]

    paragrafoDobro.innerHTML = "O dobro é igual a " + dobro
    paragrafoTriplo.innerHTML = "O triplo é igual a " + triplo
    paragrafoRaiz.innerHTML = "A raiz é igual a " + raiz.toFixed(2)


}