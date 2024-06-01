import "./style.css";

const start = document.querySelector("#play2");
const tentatives = document.querySelector("#tentative");
const hide = document.querySelector("#hide");
const play = document.querySelector("#play");
const input = document.querySelector("#guess-input");
const gameContainer = document.querySelector("#game");
const guessContainer = document.querySelector("#guess-container");

play.addEventListener("click", () => {
  gameContainer.classList.remove("hidden");
  guessContainer.classList.remove("hidden");
  tentatives.classList.remove("hidden");
  game.startGame();
});

hide.addEventListener("click", () => {
  gameContainer.classList.add("hidden");
  guessContainer.classList.add("hidden");
  tentatives.classList.add("hidden");
});

class Game {
  constructor() {
    this.score = 0;
    this.tentatives = 0;
    this.guessNumber = this.randomizeNumber();
  }

  randomizeNumber() {
    this.guessNumber = Math.floor(Math.random() * 500) + 1;
    console.log(this.guessNumber)
  }

  checkGuess() {
    const guess = input.value;
    this.tentatives++;
    tentatives.innerHTML = `Tentatives : ${this.tentatives}`;
    if (guess == this.randomizeNumber) {
      alert("Bravo");
      this.score++;
      document.querySelector("#score").innerHTML = `Score : ${this.score}`;
      this.randomizeNumber();
      this.tentatives = 0;
      tentatives.innerHTML = `Tentatives : ${this.tentatives}`;
    } else if (guess < this.guessNumber) {
      alert("Plus grand");
    } else {
      alert("Plus petit");
    }


  }

  newgame() {}

  startGame() {

    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.checkGuess();
      }
    })





    // alert("start");
    // this.tentatives = 0;
    // this.randomizeNumber();
    // this.score = 0;
    // const guess = input.value;
    // game.tentatives++;
    // tentatives.innerHTML = `Tentatives : ${game.tentatives}`;
    // if (guess == game.guessNumber) {
    //   alert("Bravo");
    //   game.score++;
    //   document.querySelector("#score").innerHTML = `Score : ${game.score}`;
    //   game.randomizeNumber();
    //   game.tentatives = 0;
    //   tentatives.innerHTML = `Tentatives : ${game.tentatives}`;
    // } else if (guess < game.guessNumber) {
    //   alert("Plus grand");
    // } else {
    //   alert("Plus petit");
    // }
    // input.value = "";
  }
}

const game = new Game();
