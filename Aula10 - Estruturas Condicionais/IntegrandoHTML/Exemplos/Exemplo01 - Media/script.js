function mostrarResultado(){
    let nota01 = parseInt(document.getElementById("nota1").value)
    let nota02 = parseInt(document.getElementById("nota2").value)
    let Pmedia = document.querySelector("#media")
    let Presultado = document.querySelector("#resultado")

    media = (nota01 + nota02) / 2

    Pmedia.innerHTML = "Sua média é " + media

    if(media >= 7){
        Presultado.innerHTML = "APROVADO"
        Presultado.style.color = "green"
    }else{
        Presultado.innerHTML = "REPROVADO"
        Presultado.style.color = "red"


    }
}