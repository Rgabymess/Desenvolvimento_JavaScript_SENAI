function mostrarResultado{

    let valorGasto = parseFloat(document.querySelector("#valorGasto").value)
    let metodoPagamento = document.querySelector("#metodoPagamento").value
    let resultado = document.querySelector("#resultado")

    if(metodoPagamento === "1"){
        let valorFinal = valorGasto * 0.9
        resultado.innerHTML = ("O valor da sua compra ficou " + valorFinal.toFixed(2).replace("." , ",") + "R$")
    } else{
        resultado.innerHTML = ("O valor da sua compra ficou " + valorGasto.toFixed(2).replace("." , ",") + "R$")

    }


}