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
            console.log("You win, " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + "!");
            return "win";
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie, you both chose " + computerSelection.toLowerCase() + ".");
        return "tie";
    } else {
        console.log("You lose, " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase() + ".");
        return "lose";
    }
}

function game(playerSelection, computerSelection) {
    let outcome = playRound(playerSelection, computerSelection);
    let humanScore = 0;
    let computerScore = 0;

    if (outcome === "win") {
        humanScore++;
    } else if (outcome === "lose") {
        computerScore++;
    } else {
        humanScore += 0.5;
        computerScore += 0.5;
    }

    if (humanScore > computerScore) {
        console.log("Human player wins, " + humanScore + " to " + computerScore + ".");
    } else if (computerScore < humanScore) {
        console.log("Computer wins, " + computerScore + " to " + humanScore + ".");
    } else {
        console.log("Tie game, " + computerScore + " to " + humanScore + ".");
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
btns.forEach(btn => btn.addEventListener('click', chooseItem));