const linkBars = document.querySelector(".fa-bars")
const linkTimes = document.querySelector(".fa-times")

linkBars.onclick = e => {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.transform = "translateX(0)"
}
linkTimes.onclick = e => {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.transform = "translateX(-300px)"
}