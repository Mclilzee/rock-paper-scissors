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

function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    let playerChose = prompt("Choose: Rock, Paper, Scissors");
    playerChose =
      playerChose[0].toUpperCase() + playerChose.slice(1).toLowerCase();
    let computerChose = computerPlay();
    console.log("Player: " + playerChose);
    console.log("Computer: " + computerChose);
    let result = play(playerChose, computerChose);

    if (result === 1) {
      player++;
    } else if (result === -1) {
      computer++;
    }

    console.log("Player score: " + player);
    console.log("Computer score: " + computer);
  }
  if (player > computer) {
    console.log("Player Won!");
  } else if (computer > player) {
    console.log("Computer Won!");
  } else {
    console.log("It's a Draw!");
  }
}

game();
