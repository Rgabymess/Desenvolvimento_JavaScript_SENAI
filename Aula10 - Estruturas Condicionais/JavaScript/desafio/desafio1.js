let velocidadeMaxima = 80;
let valorKm = 7



if (velocidade > velocidadeMaxima){
    let velocidadeAcima = velocidade - velocidadeMaxima;
    let multa = velocidadeAcima * valorKm;
    console.log("Você foi multado");
    console.log("A multa foi de " + multa.toFixed(2) + " R$");
} else{
    console.log("Continue assim...");
}