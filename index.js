let playerScore = 0;
let computerScore = 0;
let games = 0;

document.querySelector(".player-score").textContent = "Human Score: " + playerScore;
document.querySelector(".computer-score").textContent = "Robot Score: " + computerScore;
document.querySelector(".games-played").textContent = "Games: " + games;

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

if (games < 5) {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.ID);
    });
  });
}

function reset() {
  games = 0;
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".header").textContent =
    " Choose rock, paper, scissors to start.";
  document.querySelector(".winner").textContent = "";
}

// function game() {
//   let player = 0;
//   let computer = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerChose = prompt("Choose: Rock, Paper, Scissors");
//     playerChose =
//       playerChose[0].toUpperCase() + playerChose.slice(1).toLowerCase();
//     let computerChose = computerPlay();
//     console.log("Player: " + playerChose);
//     console.log("Computer: " + computerChose);
//     let result = play(playerChose, computerChose);

//     if (result === 1) {
//       player++;
//     } else if (result === -1) {
//       computer++;
//     }

//     console.log("Player score: " + player);
//     console.log("Computer score: " + computer);
//   }
//   if (player > computer) {
//     console.log("Player Won!");
//   } else if (computer > player) {
//     console.log("Computer Won!");
//   } else {
//     console.log("It's a Draw!");
//   }
// }
// game();
