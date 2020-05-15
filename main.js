let yourScore = 0;
let computerScore = 0;
let rickButton = document.getElementById("button-rick");
let mortyButton = document.getElementById("button-morty");
let pickleButton = document.getElementById("button-pickle");
let yourThrow = document.getElementById("your-throw");
let computerThrow = document.getElementById("computer-throw");

rickButton.addEventListener("click", function pickRick() { 
    let userChoice = "rick";
    printResult(userChoice);
});

mortyButton.addEventListener("click", function pickMorty() { 
    let userChoice = "morty";
    printResult(userChoice);
});

pickleButton.addEventListener("click", function pickPickle() { 
    let userChoice = "pickle";
    printResult(userChoice);
});

function computerSelect() {
    let items = ["rick", "pickle", "morty"];
    let itemChoice = items[Math.floor(Math.random() * items.length)];
    console.log(itemChoice);
    return itemChoice;
}

function playRound(userChoice, computerChoice) { 
if (userChoice === "rick" || computerChoice === "pickle") {
    return computerScore = computerScore + 1;
} else if (userChoice === "rick" || computerChoice === "morty") {
    return yourScore = yourScore + 1;
} else if (userChoice === "pickle" || computerChoice === "morty") {
    return computerScore = computerScore + 1;
} else if (userChoice === "pickle" || computerChoice === "morty") {
    return yourScore = yourScore + 1;
} else if (userChoice === computerChoice) {
    return yourScore;
} else {
    return "invalid";
}
}

function printResult(userChoice) {
    if (yourScore >= 5) {
        document.getElementById("result").innerHTML = "You Win!";
    } else if (computerScore >= 5) {
        document.getElementById("result").innerHTML = "You Lose";
    } else {
        playRound(userChoice, computerSelect());
        yourThrow.innerHTML = userChoice;
        computerThrow.innerHTML = computerSelect();
        document.getElementById("your-score").innerHTML = yourScore;
        document.getElementById("computer-score").innerHTML = computerScore;
    }
};