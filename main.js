import "./style.css";

const start = document.querySelector("#play");
const input = document.querySelector("#guess");
const tentatives = document.querySelector("#tentative");
const hide = document.querySelector("#hide");

start.addEventListener("click", () => {
  input.classList.remove("hidden");
  tentatives.classList.remove("hidden");
  game.randomizeNumber();
  console.log(game.guessNumber);


});

hide.addEventListener("click", () => {
  input.classList.add("hidden");
  tentatives.classList.add("hidden");

})
class Game {
  constructor() {
    this.score = 0;
    this.tentatives = 0;
    this.guessNumber = this.randomizeNumber();
  }

  randomizeNumber() {
    this.guessNumber = Math.floor(Math.random() * 500) + 1;

  }

  newgame() {}

  startGame() {
    this.tentatives = 0;
    this.randomizeNumber();
    this.score = 0;
    const guess = input.value;
    game.tentatives++;
    tentatives.innerHTML = `Tentatives : ${game.tentatives}`;
    if (guess == game.guessNumber) {
      alert("Bravo");
      game.score++;
      document.querySelector("#score").innerHTML = `Score : ${game.score}`;
      game.randomizeNumber();
      game.tentatives = 0;
      tentatives.innerHTML = `Tentatives : ${game.tentatives}`;
    } else if (guess < game.guessNumber) {
      alert("Plus grand");
    } else {
      alert("Plus petit");
    }
    input.value = "";
  }
}

const game = new Game();
