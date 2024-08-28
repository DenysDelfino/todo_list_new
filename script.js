/*
Lista de tarefas
    [x] Saber quando o botão foi clicado
    [x] Pegar o texto dentro do Input
    [x] Colocar esse texto na tela
    [] Deletar a tarefa da tela (Quando eu clicar no X)
*/

function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value

    // Verifica se o input está vazio
    if (valorDoInput === '') {
      alert('O campo de tarefa está vazio, Por favor, digite uma tarefa.')
      return // Interrompe a execução se o input estiver vazio
    }    

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick= "deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    // Limpa o input após adicionar a tarefa
    document.querySelector("input").value = ""

}

function deletarTarefa(li) {
    li.parentElement.remove()
}

