let tarefas = []



function adicionarTarefa(){
    let tarefa = document.querySelector("#nova-tarefa").value;

    if(tarefa){
        tarefas.push(tarefa);
        mostrarItens()
        tarefa = "";

    }

    console.log(tarefas);

}

function mostrarItens(){
    let listaTarefas = document.querySelector("#lista-tarefas")
    listaTarefas.innerHTML = ""
    tarefas.forEach((tarefa) => {
        let li = document.createElement("li")
        li.innerHTML = tarefa
        listaTarefas.appendChild(li)
    })
}