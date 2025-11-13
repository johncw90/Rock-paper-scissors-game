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

let getHumanChoice = function () {
  let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
  return humanChoice;
};

let playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  let playRound = function (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("You chose: " + humanChoice + " Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
      console.log("Tie round!");
      console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    }
  };
  for (i = 1; i <= 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("No winner - Tie game!");
  }
};
