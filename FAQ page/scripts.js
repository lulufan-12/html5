const FAQ = [
    {
        pergunta: "O que é Ultimate94?",
        resposta: "É o nick de um pequeno streamer da Twitch."
    },
    {
        pergunta: "Há quanto tempo Ultimate94 streama?",
        resposta: "Streamou por volta de 1 ano, porém atualmente está inativo."
    },
    {
        pergunta: "Que tipo de jogos Ultimate94 joga?",
        resposta: "Joga diversos jogos que tenham uma boa narrativa e com uma boa dose de dificuldade."
    }
]
const wrapper = document.querySelector(".div-wrapper")
FAQ.forEach(value => {
    const element = `
        <div class="conteiner pergunta hide">
            ${value.pergunta}
            <p class="resposta">
                ${value.resposta}
            </p>
        </div>
    `
    wrapper.innerHTML += element    
})
wrapper.onclick = e => {
    e.target.classList.toggle("hide")
}