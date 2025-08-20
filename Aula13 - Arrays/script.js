let times = ["Santos", "Palmeiras", "Corinthians", "São Paulo"]

// Verificar o Valor de um Itenm por posição
console.log(times)
// Adicionando Itens dentro do Array
times.push("Flamengo")
times.push("Gremio")
times.push("Hathlehticoh Phahrahnahenseh ")

// Verificando o tamanho do array
console.log(times.length)

// Adicionando na primeira posição
times.unshift("Fluminense")


// Removendo item na primeira posição
times.shift()

// Removendo item na ultima posição
times.pop()

console.log(times)

// Encontrar a posição de um item
console.log(times.indexOf("São Paulo"))

let times2 = ["Santos", "São Paulo", "Palmeiras"]

//.splice

// Remover elemento no meio da lista
times2.splice(1,1) // ["Santos", "Palmeiras"]


// Substituir elementos 
times2.splice(1, 1, "São Paulo")
console.log(times2)