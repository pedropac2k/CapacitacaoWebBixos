const btnAdd = document.querySelector("button")
const nomeInput = document.querySelector("#nome")
const qtdInput = document.querySelector("#qtd")
const lista = document.querySelector("ul")

btnAdd.addEventListener('click', ()=>{
    if(nomeInput.value == ""){
        alert("Insira um nome válido")
        return
    }

    if(qtdInput.value < 1){
        alert("Insira mais que 0 produtos")
        return
    }

    addLista(nomeInput.value, qtdInput.value)
    nomeInput.value = ""
    qtdInput.value = ""

    nomeInput.focus()
})

function addLista(nome, qtd){
    const itemLista = document.createElement('li')
    itemLista.className = "item-lista"
    itemLista.innerText = `${qtd} - ${nome}`
    lista.append(itemLista)

    const btnDlt = document.createElement('button')
    btnDlt.className = "btn-dlt"
    btnDlt.innerText = "X"
    itemLista.append(btnDlt)

    btnDlt.addEventListener('click', excluirProduto)
}

function excluirProduto(e){
    e.target.parentNode.remove()
}