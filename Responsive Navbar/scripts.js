const linkBars = document.querySelector(".hide")
let open = false

linkBars.onclick = (e) => {
    e.preventDefault()
    const nav = document.querySelector("nav")
    open = !open

    if(open){
        nav.style.display = "block"
    }
    else{
        nav.style.display = "none"
    }
}