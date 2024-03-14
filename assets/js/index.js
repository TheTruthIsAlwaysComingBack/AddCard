const createCardNode = () => {
    const imagen = document.createElement("img")
    imagen.src = `./assets/images/avatar-jessica.jpeg`

    const contenedor = document.createElement("div")
    contenedor.className = "contenedor"

    const h1 = document.createElement("h1")
    h1.textContent = 'Jessica Randall'

    const h2 = document.createElement("h2")
    h2.textContent = 'London, United Kingdom'

    const parrafo = document.createElement("p")
    parrafo.textContent = '"Front-end developer and avid reader".'

    const buttons = document.createElement('div')
    buttons.className = "buttons"

    const button1 = document.createElement("button")
    button1.className = "botones"
    button1.textContent = 'GitHub'

    const button2 = document.createElement("button")
    button2.className = "botones"
    button2.textContent = 'Frontend Mentor'

    const button3 = document.createElement("button")
    button3.className = "botones"
    button3.textContent = 'LinkedIn'

    const button4 = document.createElement("button")
    button4.className = "botones"
    button4.textContent = 'Twitter'

    const button5 = document.createElement("button")
    button5.className = "botones"
    button5.textContent = 'Instagram'

    contenedor.appendChild(imagen)
    contenedor.appendChild(h1)
    contenedor.appendChild(h2)
    contenedor.appendChild(parrafo)
    buttons.appendChild(button1)
    buttons.appendChild(button2)
    buttons.appendChild(button3)
    buttons.appendChild(button4)
    buttons.appendChild(button5)

    const card = document.createElement("div")
    card.className = "card"
    card.appendChild(contenedor)
    card.appendChild(buttons)

    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button')

const addCard = () => {
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)
