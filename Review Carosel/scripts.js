const btnVoltar = document.querySelector("#btnVoltar")
const btnAvancar = document.querySelector("#btnAvancar")
let posicaoAtual = 0

atualizarDOM(posicaoAtual)

btnVoltar.onclick = () => {
    if(posicaoAtual == 0){
        posicaoAtual = usuarios.length - 1
    }
    else{
        posicaoAtual--
    }
    atualizarDOM(posicaoAtual)
}
btnAvancar.onclick = () => {
    if(posicaoAtual == usuarios.length - 1){
        posicaoAtual = 0
    }else{
        posicaoAtual++
    }
    atualizarDOM(posicaoAtual)
}

function atualizarDOM(posicao){
    const img = document.querySelector(".mainDiv img")
    const h1 = document.querySelector(".mainDiv h1")
    const h3 = document.querySelector(".mainDiv h3")
    const p = document.querySelector(".mainDiv p")
    
    img.src = usuarios[posicao].src
    h1.innerHTML = usuarios[posicao].nome
    h3.innerHTML = usuarios[posicao].profissao
    p.innerHTML = usuarios[posicao].descricao
}