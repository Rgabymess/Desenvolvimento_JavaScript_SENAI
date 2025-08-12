function mostrarResultado(){

    let velocidadeMaxima = 80
    let valorMulta = 7
    let velocidade = parseInt(document.querySelector("#velocidade").value)
    let resultado = document.querySelector("#resultado")

    if(isNaN(velocidade)){
        resultado.innerHTML = "Informe um valor válido"
        return
    }
    
    if(velocidade > velocidadeMaxima){
        let diferencaV = velocidade - velocidadeMaxima
        let multa = diferencaV * valorMulta 
        resultado.innerHTML = ("Você foi multado <br><br>O valor da sua Multa ficou " + multa.toFixed(2).replace("." , ",") + "R$")
    } else{
        resultado.innerHTML = ("Fez o minimo")

    }


}