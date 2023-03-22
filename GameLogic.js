let playerScore = 0,
  computerScore = 0;

function computerMove() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function displayRoundResults(playerSelection, computerSelection) {
  const humanResult = document.createElement("div");
  humanResult.classList.add("human", "mid-emoji", playerSelection);

  const machineResult = document.createElement("div");
  machineResult.classList.add("machine", "mid-emoji", computerSelection);

  const score = document.createElement("div");
  score.classList.add("score");
  score.textContent = `${playerScore} : ${computerScore}`;

  const referenceNode = document.querySelector("#after_this");
  referenceNode.parentNode.insertBefore(
    machineResult,
    referenceNode.nextSibling
  );
  referenceNode.parentNode.insertBefore(score, referenceNode.nextSibling);
  referenceNode.parentNode.insertBefore(humanResult, referenceNode.nextSibling);
}

function gameRound(playerMoveChoice) {
  const computerMoveChoice = computerMove();

  if (playerMoveChoice === computerMoveChoice) {
  } else if (
    (playerMoveChoice === "paper" && computerMoveChoice === "rock") ||
    (playerMoveChoice === "rock" && computerMoveChoice === "scissors") ||
    (playerMoveChoice === "scissors" && computerMoveChoice === "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }

  displayRoundResults(playerMoveChoice, computerMoveChoice);

  if (playerScore === 3 || computerScore === 3) {
    if (playerScore === 3) {
      const emojiWinner = document.createElement("div");
      emojiWinner.classList.add("emojiWinner");
      emojiWinner.textContent = "🙃";

      const winnerText = document.createElement("div");
      winnerText.classList.add("winner");
      winnerText.textContent = "You win!";

      const restartButton = document.createElement("button");
      restartButton.classList.add("restart");
      restartButton.textContent = "Restart";
      restartButton.addEventListener("click", () => location.reload());

      const referenceNode = document.querySelector("#after_this");

      referenceNode.parentNode.insertBefore(
        restartButton,
        referenceNode.nextSibling
      );
      referenceNode.parentNode.insertBefore(
        winnerText,
        referenceNode.nextSibling
      );
      referenceNode.parentNode.insertBefore(
        emojiWinner,
        referenceNode.nextSibling
      );
    } else {
      const emojiWinner = document.createElement("div");
      emojiWinner.classList.add("emojiWinner");
      emojiWinner.textContent = "😵";

      const winnerText = document.createElement("div");
      winnerText.classList.add("winner");
      winnerText.textContent = "Computer wins!";

      const restartButton = document.createElement("button");
      restartButton.classList.add("restart");
      restartButton.textContent = "Restart";
      restartButton.addEventListener("click", () => location.reload());

      const referenceNode = document.querySelector("#after_this");
      referenceNode.parentNode.insertBefore(
        restartButton,
        referenceNode.nextSibling
      );
      referenceNode.parentNode.insertBefore(
        winnerText,
        referenceNode.nextSibling
      );

      referenceNode.parentNode.insertBefore(
        emojiWinner,
        referenceNode.nextSibling
      );
    }
    disableButtons();
  }
}

function disableButtons() {
  const myRockBtn = document.getElementById("rockId");
  const myPaperBtn = document.getElementById("paperId");
  const myScissorsBtn = document.getElementById("scissorsId");

  myRockBtn.disabled = true;
  myPaperBtn.disabled = true;
  myScissorsBtn.disabled = true;
}

function game() {
  const myRockBtn = document.getElementById("rockId");
  const myPaperBtn = document.getElementById("paperId");
  const myScissorsBtn = document.getElementById("scissorsId");

  myRockBtn.addEventListener("click", () => gameRound("rock"));

  myPaperBtn.addEventListener("click", () => gameRound("paper"));

  myScissorsBtn.addEventListener("click", () => gameRound("scissors"));
}

game();
