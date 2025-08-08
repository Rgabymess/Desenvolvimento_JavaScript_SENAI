function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let sucessor = numero + 1
    let antecessor = numero - 1
    console.log(sucessor)
    console.log(antecessor)
    let resultado1 = document.querySelector("#resultado1")
    let resultado2 = document.querySelector("#resultado2")

    resultado1.innerHTML = "O sucessor desse número é " + sucessor
    resultado2.innerHTML = "O antecessor desse número é " + antecessor
}