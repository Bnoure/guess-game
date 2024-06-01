import "./style.css";

const start = document.querySelector("#play2");
const tentatives = document.querySelector("#tentative");
const hide = document.querySelector("#hide");
const play = document.querySelector("#play");
const input = document.querySelector("#guess-input");
const gameContainer = document.querySelector("#game");
const guessContainer = document.querySelector("#guess-container");
const lower = document.querySelector("#lower");
const higher = document.querySelector("#higher");

play.addEventListener("click", () => {
  gameContainer.classList.remove("hidden");
  guessContainer.classList.remove("hidden");
  tentatives.classList.remove("hidden");
  game.startGame();
});

class Game {
  constructor() {
    this.score = 0;
    this.tentatives = 0;
    this.guessNumber = this.randomizeNumber();
    this.guesses = [];
    this.addGuessEventListener();
    this.addNewGameEventListener();
    console.log(this.guessNumber);
  }

  randomizeNumber() {
    return Math.floor(Math.random() * 500) + 1;
  }

  addGuessEventListener() {
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const guess = parseInt(input.value);
        this.tentatives++;
        start.textContent = `Nombre de tentatives : ${this.tentatives}`;
        this.checkGuess(guess);
        input.value = '';
      }
    });
  }

  addNewGameEventListener() {
    hide.addEventListener("click", () => {
      this.restart();
    });
  }

  startGame() {
    this.tentatives = 0;
    console.log(this.guessNumber);
  }

  checkGuess(guess) {
    if (guess === this.guessNumber) {
      tentatives.textContent = "You win";
      console.log(this.score);
    } else {
      this.guesses.push(parseInt(guess));
      this.guesses.forEach((e) => {
        const newElement = document.createElement('span');
        newElement.textContent = e;
        input.appendChild(newElement);
      });

      if (guess === this.guessNumber) {
        tentatives.textContent = "You win";
        console.log(this.score);
      } else if (guess > this.guessNumber) {
        higher.textContent = "Trop grand";
        lower.textContent = "";
      } else {
        lower.textContent = "Trop petit";
        higher.textContent = "";
      }
    }
  }
  restart() {
    this.tentatives = 0;
    this.guesses = [];
    input.value = '';
    start.textContent = "Let's Play";
    tentatives.textContent = '';
    lower.textContent = '';
    higher.textContent = '';
    this.guessNumber = this.randomizeNumber();
    this.startGame()
  }
}

const game = new Game();
