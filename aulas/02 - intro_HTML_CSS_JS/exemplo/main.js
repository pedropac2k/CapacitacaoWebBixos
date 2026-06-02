const meuBtn = document.querySelector('button')
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')


meuBtn.addEventListener('click', acao)

const cores = ['red', 'green', 'blue']

function acao(){
    let cor1 = Math.round(Math.random() * 3)
    let cor2 = Math.round(Math.random() * 3)


    div1.style.backgroundColor = cores[cor1]
    div2.style.backgroundColor = cores[cor2]
}