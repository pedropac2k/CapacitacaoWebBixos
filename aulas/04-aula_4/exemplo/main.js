const divAliens = document.querySelector("#aliens-container")
const btnAlien = document.querySelector("#btn-alien")
const URL = "https://rickandmortyapi.com/api/character/"

btnAlien.addEventListener('click', ()=>{
    const indice = Math.round(Math.random() * 200) + 1

    requisicao(indice)
}) 

async function requisicao(i){
    const personagem = URL.concat(i)

    const res = await fetch(personagem)

    const obj = await res.json()
    geraCard(obj)
}

function geraCard(obj){
    const divCard = document.createElement("div")
    divCard.className = "card" 
    divAliens.append(divCard)

    const alienImg = document.createElement("img")
    alienImg.src = obj.image
    alienImg.alt = `Imagem de ${obj.name}` 
    alienImg.className = "img-alien"
    divCard.append(alienImg)

    console.log(alienImg.alt)

    const alienDesc = document.createElement("p")
    alienDesc.innerText = obj.name
    alienDesc.className = "alien-desc"
    divCard.append(alienDesc)

    const btnDlt = document.createElement("button")
    btnDlt.className = "btn-dlt"
    btnDlt.innerHTML = 'X'
    divCard.append(btnDlt)

    btnDlt.addEventListener('click', (e)=>{
        e.target.parentNode.remove()
    }
    )
}