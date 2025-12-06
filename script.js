let getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (randomNum === 1) {
    computerChoice = "rock";
  } else if (randomNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
};

let result = "";
let winnerMsg = "";
let humanScore = 0;
let computerScore = 0;
let playRound = function (humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  console.log("You chose: " + humanChoice + " Computer chose: " + computerChoice);

  if (humanChoice === computerChoice) {
    result = "Tie round!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    result = "You win! " + humanChoice + " beats " + computerChoice;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    result = "You win! " + humanChoice + " beats " + computerChoice;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    result = "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    result = "You lose! " + computerChoice + " beats " + humanChoice;
  }

  playerDiv.textContent = `Player: ${humanChoice}`;
  computerDiv.textContent = `Computer: ${computerChoice}`;
  resultDiv.textContent = result;
  playerScore.textContent = `Your score: ${humanScore}`;
  compScore.textContent = `Computer score: ${computerScore}`;

  if (humanScore >= 5 && computerScore <= 4) {
    winnerMsg = "YOU WIN!";
    winnerDiv.textContent = winnerMsg;
  } else if (computerScore >= 5 && humanScore <= 4) {
    winnerMsg = "COMPUTER WINS!";
    winnerDiv.textContent = winnerMsg;
  }
};

if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (computerScore > humanScore) {
  console.log("Computer wins the game!");
} else {
  console.log("No winner - Tie game!");
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let playerDiv = document.querySelector(".player");
let computerDiv = document.querySelector(".computer");
let resultDiv = document.querySelector(".result");
let playerScore = document.querySelector(".playerScore");
let compScore = document.querySelector(".compScore");
let winnerDiv = document.querySelector(".winner");

let humanChoice;

rockBtn.addEventListener("click", function () {
  playRound("rock", getComputerChoice);
});
paperBtn.addEventListener("click", function () {
  playRound("paper", getComputerChoice);
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice);
});
