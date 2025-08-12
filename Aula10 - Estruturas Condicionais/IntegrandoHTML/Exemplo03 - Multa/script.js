function mostrarResultado{

    let velocidadeMaxima = 80
    let valorMulta = 7
    let valocidae = parseInt(document.querySelector("#velocidade").value)
    let resultado = document.querySelector("")

    
    if(velocidade > velocidadeMaxima){
        let diferencaV = velocidade - velocidadeMaxima
        let multa = diferencaV * valorMulta 
        resultado.innerHTML = ("O valor da sua Multa ficou " + valorFinal.toFixed(2).replace("." , ",") + "R$")
    } else{
        resultado.innerHTML = ("Fez o minimo")

    }


}