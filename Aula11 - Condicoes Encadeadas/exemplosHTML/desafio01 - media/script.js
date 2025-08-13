function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota01").value)
    let nota2 = parseInt(document.querySelector("#nota02").value)
    let notaRecuperacao = document.querySelector("#notaRecuperacao")
    let resultado = document.querySelector("#resultado")
    let resultadoMedia = document.querySelector("#media")

    let media = (nota1 + nota2) / 2
    resultadoMedia.innerHTML = "A sua média é de " + media


    if(media >= 7){
        resultado.innerHTML = "APROVADO"
        resultado.style.color = "green"
        notaRecuperacao.style.display = "none"
    }else if(media >= 5){
        let valorNotaRecuperacao = parseInt(notaRecuperacao.value)
        let mediaFinal = (media + valorNotaRecuperacao) / 2
        if(isNaN(valorNotaRecuperacao)){
            resultado.innerHTML = "RECUPERAÇÃO"
            resultado.style.color = "orange"
            notaRecuperacao.style.display = "block"
            
        }else if(mediaFinal >= 7){
            resultadoMedia.innerHTML = "A sua média é de " + mediaFinal
            resultado.innerHTML = "APROVADO"
            resultado.style.color = "green"
        }else{
            resultadoMedia.innerHTML = "A sua média é de " + mediaFinal
            resultado.innerHTML = "REPROVADO"
            resultado.style.color = "red"
        }
    }else{
            resultado.innerHTML = "REPROVADO"
            resultado.style.color = "red"
            notaRecuperacao.style.display = "none"
    }
   


}
