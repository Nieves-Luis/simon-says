// globals
let button1, button2, button3, button4


/**
 * Generar estado inicial del juego
 */
function initGame() {

    let main = document.querySelector("main")

    button1 = document.createElement("button")
    button1.innerText = "1"
    main.appendChild(button1)

    button2 = document.createElement("button")
    button2.innerText = "2"
    main.appendChild(button2)

    button3 = document.createElement("button")
    button3.innerText = "3"
    main.appendChild(button3)

    button4 = document.createElement("button")
    button4.innerText = "4"
    main.appendChild(button4)

    console.log(main)
}



initGame()