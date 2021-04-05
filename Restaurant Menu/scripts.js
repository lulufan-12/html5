const conteiner = document.querySelector(".conteiner")
const nav = document.querySelector("nav")

ver("todos")

nav.onclick = e => {
    const name = e.target.id
    if(!name)
        return
    switch (name){
        case "todos":
            ver("todos")
        break;
        case "desjejum":
            ver("desjejum")
        break;
        case "almoco":
            ver("almoco")
        break;
        case "lanche":
            ver("lanche")
        break;
        case "janta":
            ver("janta")
        break;
        default:
            return
    }
}
function ver(categoria){
    conteiner.innerHTML = ""
    REFEICOES.forEach(value => {
        if(categoria == "todos" || categoria == value.categoria){
            conteiner.innerHTML += `
                <div class="item">
                    <img src="${value.src}" alt="${value.nome}" />
                    <div>
                        <div class="item-header">
                            <h1>${value.nome}</h1>
                            <h3>R$ ${value.preco.toFixed(2)}</h3>
                        </div>
                        <p>
                            ${value.descricao}
                        </p>
                    </div>
                </div>
            `
        }
    })
}
