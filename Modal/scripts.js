const btnFechar = document.getElementById("btnFechar")
const btnAbrir = document.getElementById("btnAbrir")

btnAbrir.onclick = () => {
    const modal = document.querySelector(".modal")
    const backdrop = document.querySelector(".backdrop")

    modal.style.transform = "scale(1)"
    backdrop.style.transform = "scale(1)"
}

btnFechar.onclick = () => {
    const modal = document.querySelector(".modal")
    const backdrop = document.querySelector(".backdrop")

    modal.style.transform = "scale(0)"
    backdrop.style.transform = "scale(0)"
}