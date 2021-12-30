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
    playerSelection = prompt("Rock, paper, or scissors?", "Scissors");
    computerSelection = computerPlay();
    let constantPlayerSelection = playerSelection.toUpperCase();
    if ((constantPlayerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (constantPlayerSelection === "PAPER" && computerSelection === "ROCK") ||
        (constantPlayerSelection === "SCISSORS" && computerSelection === "PAPER")) {
            console.log("You win, " + constantPlayerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + "!");
            return "win";
    } else if (constantPlayerSelection === computerSelection) {
        console.log("It's a tie, you both chose " + computerSelection.toLowerCase() + ".");
        return "tie";
    } else {
        console.log("You lose, " + computerSelection.toLowerCase() + " beats " + constantPlayerSelection.toLowerCase() + ".");
        return "lose";
    }
}

function game(playerSelection, computerSelection) {
    let gameLength = 5;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < gameLength; i++) {
        let outcome = playRound(playerSelection, computerSelection);

        if (outcome === "win") {
            humanScore++;
        } else if (outcome === "lose") {
            computerScore++;
        } else {
            humanScore += 0.5;
            computerScore += 0.5;
        }

        console.log("The current score is " + humanScore + " to " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Human player wins, " + humanScore + " to " + computerScore + ".");
    } else if (computerScore < humanScore) {
        console.log("Computer wins, " + computerScore + " to " + humanScore + ".");
    } else {
        console.log("Tie game, " + computerScore + " to " + humanScore + ".");
    }
}
