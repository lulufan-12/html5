const inputColor = document.querySelector("#mainInputColor")

inputColor.addEventListener("change", (e) => {
    const color = e.target.value
    const p = document.querySelector("#mainP")
    const BG = "Background Color: "
    const text = BG + "<span style='color: " + color + ";'>" + color + "</span>"
    
    document.body.style.backgroundColor = color
    p.innerHTML = text
})

//ALTERNATIVAMENTE TEMOS

/*
inputColor.onchange = (e) => {
    const color = e.target.value
    const p = document.querySelector("#mainP")
    const BG = "Background Color: "
    const text = BG + "<span style='color: " + color + ";'>" + color + "</span>"
    
    document.body.style.backgroundColor = color
    p.innerHTML = text
}
*/