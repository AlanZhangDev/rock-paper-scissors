function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    if (computerOption === 0) {
        console.log("ROCK");
        return "ROCK";
    } else if (computerOption === 1) {
        console.log("PAPER");
        return "PAPER";
    } else {
        console.log("SCISSORS");
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
            resultsRound.textContent = "You win, " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + "!";
            return "win";
    } else if (playerSelection === computerSelection) {
        resultsRound.textContent = "It's a tie, you both chose " + computerSelection.toLowerCase() + ".";
        return "tie";
    } else {
        resultsRound.textContent = "You lose, " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase() + ".";
        return "lose";
    }
}

let humanScore = 0;
let computerScore = 0;

function game(playerSelection, computerSelection) {
    let outcome = playRound(playerSelection, computerSelection);

    if (outcome === "win") {
        humanScore++;
    } else if (outcome === "lose") {
        computerScore++;
    } else {
        humanScore += 0.5;
        computerScore += 0.5;
    }

    if (humanScore >= 5 && computerScore >= 5 && humanScore == computerScore) {
        score.textContent = "Tie Game!";

    } else if (humanScore >= 5 && humanScore > computerScore) {
        score.textContent = "You Win!";
    } else if (computerScore >= 5 && computerScore > humanScore) {
        score.textContent = "You Lose.";
    } else {
        let humanScoreString = humanScore.toString();
        let computerScoreString = computerScore.toString();
    
        score.textContent = "Current Score: " + humanScoreString + " to " + computerScoreString;
    }
}

function chooseItem(e) {
    if (this.id == "rock") {
        game("ROCK", computerPlay())
    } else if (this.id == "paper") {
        game("PAPER", computerPlay())
    } else {
        game("SCISSORS", computerPlay())
    }
}

const btns = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');
const resultsRound = document.createElement('p');
const score = document.createElement('p')

btns.forEach(btn => btn.addEventListener('click', chooseItem));
resultsDiv.appendChild(resultsRound);
resultsDiv.appendChild(score);
