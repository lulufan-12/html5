const btnDiminuir = document.querySelector("#btnDiminuir")
const btnZerar = document.querySelector("#btnZerar")
const btnAumentar = document.querySelector("#btnAumentar")
const p = document.querySelector(".mainDiv > p")
let contador = 0

mudarCor()
btnDiminuir.onclick = (e) => {
    p.innerHTML = --contador
    mudarCor()
}
btnZerar.onclick = (e) => {
    contador = 0
    p.innerHTML = contador
    mudarCor()
}
btnAumentar.onclick = (e) => {
    p.innerHTML = ++contador
    mudarCor()
}

function mudarCor(){
    if(contador > 0){
        p.style.color = "darkcyan"
    }
    else if(contador == 0){
        p.style.color = "black"
    }
    else{
        p.style.color = "red"
    }
}