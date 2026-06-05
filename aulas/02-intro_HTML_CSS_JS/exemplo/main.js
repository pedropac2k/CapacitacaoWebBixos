const meuBtn = document.querySelector('button')
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const titulo = document.querySelector('h1')


meuBtn.addEventListener('click', acao)


function acao(){
    div1.style.backgroundColor = "white"
    div2.style.backgroundColor = "white"
    titulo.style.color = "black"
}