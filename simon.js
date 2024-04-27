// globals
let buttons = [];
let game = [];

/**
 * Function to generate a random number between 0-3
 */
function getRandomInt() {
  return Math.floor(Math.random() * 4) + 1;
}

/**
 * Set up next turn
 */
function setUpNextTurn() {
  game.push(getRandomInt());
  document.querySelector(".debug #current-game").innerText = game.join("-");
}

/**
 * Generar estado inicial del juego
 */
function initGame() {
  let button; // temporary variable for the newly created button
  let main = document.querySelector("main");

  for (let i of [1, 2, 3, 4]) {
    button = document.createElement("button");
    button.innerText = buttons.length + 1;
    main.appendChild(button);
    buttons.push(button);
    document
      .querySelector("#next-turn")
      .addEventListener("click", setUpNextTurn);
  }
}

initGame();
