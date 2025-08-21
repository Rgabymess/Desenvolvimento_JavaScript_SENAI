// Variável Composta

let produto = {
    chave: "valor"
}

// Exemplo:

let computador = {
    tipo: "Notebook",
    preco: 3500,
    marca: "Positivo",
    processador: "Intel Celeron",
    emEstoque: True

}


console.log(produto)



//Exibir a informação de um item no objeto
console.log(produto.marca) //Positivo
console.log(produto.preco) //3500
console.log(produto["tipo"]) //Notebook
console.log(produto["processador"])

// Adicionar itens no objeto
produto.memoriaRam = "4 gb"
console.log(produto)

// Remover item
delete produto.emEstoque
console.log(produto)