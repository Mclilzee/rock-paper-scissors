let playerScore = 0;
let computerScore = 0;
let games = 0;
const gamesAllowed = 10;

function computerPlay() {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}

function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return 1;
    } else {
      return -1;
    }
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (computerSelection === "Paper") {
      return 1;
    } else {
      return -1;
    }
  }
}

function playRound(playerChoice) {
  const computerChoise = computerPlay();
  document.querySelector(".header").textContent =
    "Computer chose: " + computerChoise;
  console.log(computerChoise);
  game(playerChoice, computerChoise);
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (games < gamesAllowed) {
      playRound(btn.id);
      btn.classList.add("clicked");
      setTimeout(0.07);
    }
  });

  btn.addEventListener("transitionend", () => {
    btn.classList.remove("clicked");
  });
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventLis;
});

function resetGame() {
  games = 0;
  playerScore = 0;
  computerScore = 0;

  document.querySelector(".player-score").textContent = "Human score: 0";
  document.querySelector(".computer-score").textContent = "Robot score: 0";
  document.querySelector(".games-played").textContent = "Games: 0";
  document.querySelector(".header").textContent =
    " Choose the rock!, paper or scissors to start.";
  document.querySelector(".winner").textContent = "";
  const resetButton = document.querySelector("#reset");
  document.querySelector(".gameover").removeChild(resetButton);
}

function game(playerChoise, computerChoise) {
  let result = play(playerChoise, computerChoise);

  const winner = document.querySelector(".winner");

  if (result === 1) {
    playerScore++;
    drawScores("Human", "green");
  } else if (result === -1) {
    computerScore++;
    drawScores("Robot", "red");
  } else {
    drawScores("Nobody", "yellow");
  }

  games++;
  document.querySelector(".games-played").textContent = "Games: " + games;

  if (games === gamesAllowed) {
    gameOver();
  }
}

function drawScores(player, color) {
  const winner = document.querySelector(".winner");
  winner.textContent = player + " Won this round";
  winner.style.color = color;

  if (player === "Robot") {
    document.querySelector(".computer-score").textContent =
      "Robot score: " + computerScore;
  } else if (player === "Human") {
    document.querySelector(".player-score").textContent =
      "Human score: " + playerScore;
  }
}

function gameOver() {
  const winner = document.querySelector(".winner");
  if (playerScore > computerScore) {
    winner.textContent = "Human Won the game!";
    winner.style.color = "green";
  } else if (computerScore > playerScore) {
    winner.textContent = "Robot Won the game!";
    winner.style.color = "red";
  } else {
    winner.textContent = "Game was a Draw!";
    winner.style.color = "yellow";
  }

  const reset = document.createElement("button");
  reset.textContent = "Play Again!";
  reset.setAttribute("id", "reset");
  reset.addEventListener("click", resetGame);
  document.querySelector(".gameover").appendChild(reset);
}
