function computerPlay() {
    let items = ["rick", "paper", "scissors"];
    let itemChoice = items[Math.floor(Math.random() * items.length)];
    return itemChoice;
}

function promptUser() {
    let userChoice = prompt("Type rick, paper, or scissors");
    let normalizeChoice = userChoice.toLowerCase();
    console.log(playRound(normalizeChoice, computerPlay()));
    return playRound(normalizeChoice, computerPlay());
}

function playRound(userChoice, computerChoice) { 
if (userChoice === "rick" || computerChoice === "paper") {
    return "You lose";
} else if (userChoice === "rick" || computerChoice === "scissors") {
    return "You win!";
} else if (userChoice === "paper" || computerChoice === "scissors") {
    return "You lose";
} else if (userChoice === "paper" || computerChoice === "rock") {
    return "You win!";
} else if (userChoice === computerChoice) {
    return "It's a draw";
} else {
    return "invalid";
}
}