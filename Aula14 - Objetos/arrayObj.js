let produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Teclado", preco: 200, categoria: "Periférico"},
    {tipo: "Mouse", preco: 120, categoria: "Periférico"},
    {tipo: "Computador", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Monitor", preco: 800, categoria: "Periférico"},
    {tipo: "Microfone", preco: 5000, categoria: "Periférico"},
    {tipo: "Processador", preco: 3100, categoria: "Processador"},
    {tipo: "Placa de Vídeo", preco: 3100, categoria: "Eletrônico"},
    {tipo: "Mouse Pad", preco: 50, categoria: "Periférico"}

]

// Array Produtos
produtos.forEach((produtos) => {
    console.log(produtos.tipo + " R$" + produtos.preco)
})

// Filtro
const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")
console.log("PRODUTOS ELETRÔNICOS")
produtosEletronicos.forEach((produtos) => {
    console.log(produtos.tipo + " R$" + produtos.preco)
})

// Map - permite que altere valores dentro do programa
const produtosEletronicosDesconto = produtosEletronicos.map(produto => ({

    tipo: produto.tipo, 
    preco: produto.preco * 0.95,
    categoria: produto.categoria
}))