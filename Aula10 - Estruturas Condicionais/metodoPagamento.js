//Valor gasto pelo Usuario
//Metodo de pagamento
// 1 - boleto/Pix = 10% de desconto
// 2 - credito = Valor Total

let valorGasto = 1000
let metodoPagamento = 1

if(metodoPagamento == 1){
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    let valorFinal = valorGasto * 0.9
    console.log("O valor final foi de " + valorFinal)
}else {
    console.log("MÉTODO DE PAGAMENTO CRÉDITO")
    console.log("O valor final foi de R$ " + valorGasto)
}