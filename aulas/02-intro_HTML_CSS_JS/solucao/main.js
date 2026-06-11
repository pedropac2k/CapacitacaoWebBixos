const btnTitulo = document.querySelector("#btnTitulo")
const btnLista = document.querySelector("#btnLista")
const titulo = document.querySelector("h1")
const div = document.querySelector("#container-1")

const cores = ['red', 'green', 'blue']

btnTitulo.addEventListener('click', ()=>{
    const numAleatorio = Math.round(Math.random() * 3)
    titulo.style.color = cores[numAleatorio]
})

btnLista.addEventListener('click', ()=>{
    const numAleatorio = Math.round(Math.random() * 3)
    div.style.backgroundColor = cores[numAleatorio]
})