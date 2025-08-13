// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Débito = 5% desconto
//   - 3 - Credito = Valor total  
//   Método Parcelamento
//   - 1 - A vista = valor Total
//   - 2 - 2x - com juros de 5% no valor total
//   - 3 - 3x - com juros de 10% no valor total


let valorGasto = 1000
let metodoPagamento = 1


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9;
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX");
    console.log("O valor final foi de R$ " + valorFinal);
}else if(metodoPagamento == 2) {
    let valorFinal = valorGasto * 0.95;
    console.log("MÉTODO DE PAGAMENTO Débito");
    console.log("O valor final foi de R$" + valorFinal);
} else{
    let pagamentoCredito = 1
    console.log("MÉTODO DE PAGAMENTO Crédito");

    if(pagamentoCredito == 1){
        console.log("PAGAMENTO A VISTA")
        console.log("O valor final foi de R$" + valorGasto);

    }else if(pagamentoCredito == 2){
        let valorFinal = valorGasto * 1.05;
        console.log("PAGAMENTO PARCELADO EM 2 VEZES")
        console.log("O valor final foi de R$" + valorFinal);
    }else{
        let valorFinal = valorGasto * 1.1;
        console.log("PAGAMENTO PARCELADO EM 3 VEZES")
        console.log("O valor final foi de R$" + valorFinal);

    }

}