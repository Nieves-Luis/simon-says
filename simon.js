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
  }
  document.querySelector("#next-turn").addEventListener("click", setUpNextTurn);
  document.querySelector("#play").addEventListener("click", play2);
}

/**
 * Add the class on to the buttons at the right time
 */
function play(event) {
  let delay = 0;

  for (let btnNumber of game) {
    let button = buttons[btnNumber - 1];
    function onOff() {
      button.classList.toggle("on");
    }
    setTimeout(onOff, delay);

    setTimeout(onOff, 500 + delay);
    delay += 1000;
  }
  if (event) {
    setTimeout(() => (event.target.disabled = false), delay);
    event.target.disabled = true;
  }
}

function play2() {
  let remainingToSwitchOn = [...game];
  function switchNext() {
    if (remainingToSwitchOn.length) {
      let btnNumber = remainingToSwitchOn.shift();
      let button = buttons[btnNumber - 1];
      button.classList.add("on");
      setTimeout(() => {
        button.classList.remove("on");
      }, 500);
    } else {
      clearInterval(timer);
    }
  }
  let timer = setInterval(switchNext, 1000);
}

initGame();
