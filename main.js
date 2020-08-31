let yourScore = 0;
let computerScore = 0;
let resetButton = document.getElementById("button-reset");
let rickButton = document.getElementById("button-rick");
let mortyButton = document.getElementById("button-morty");
let pickleButton = document.getElementById("button-pickle");
let yourThrow = document.getElementById("your-throw");
let computerThrow = document.getElementById("computer-throw");
let whoBeatsWho = document.getElementById("who-beats-who");

resetButton.addEventListener("click", function resetGame() {
    yourScore = 0;
    computerScore = 0;
    document.getElementById("result").innerHTML = "";
    printResult();
});

rickButton.addEventListener("click", function pickRick() { 
    let userChoice = "rick";
    playRound(userChoice, computerSelect());
    insertRickImage("player-img");
});

mortyButton.addEventListener("click", function pickMorty() { 
    let userChoice = "morty";
    playRound(userChoice, computerSelect());
    insertMortyImage("player-img");
});

pickleButton.addEventListener("click", function pickPickle() { 
    let userChoice = "pickle";
    playRound(userChoice, computerSelect());
    insertPickleImage("player-img");
});

let computerSelect = function () {
    let items = ["rick", "pickle", "morty"];
    let itemChoice = items[Math.floor(Math.random() * items.length)];
    if (itemChoice === "rick") {
        insertRickImage("computer-img");
    } else if (itemChoice === "pickle") {
        insertPickleImage("computer-img");
    } else {
        insertMortyImage("computer-img");
    }
    return itemChoice;
};

// compares the user and computer choice, then writes who beat who and returns the score
function playRound(userChoice, computerChoice) { 
    checkGameOver(userChoice);
    console.log(computerChoice);
    yourThrow.innerHTML = userChoice;
    computerThrow.innerHTML = computerChoice;
if (userChoice === "rick" && computerChoice === "pickle") {
    addComputerPoint();
} else if (userChoice === "rick" && computerChoice === "morty") {
    addUserPoint();
} else if (userChoice === "pickle" && computerChoice === "rick") {
    addUserPoint();
} else if (userChoice === "pickle" && computerChoice === "morty") {
    addComputerPoint();
} else if (userChoice === "morty" && computerChoice === "rick") {
    addComputerPoint();
} else if (userChoice === "morty" && computerChoice === "pickle") {
    addUserPoint();
} else if (userChoice === computerChoice) {
    whoBeatsWho.innerHTML = " ties ";
    return yourScore;
} else {
    return "invalid";
}
};

function addComputerPoint() {
    whoBeatsWho.innerHTML = " is beaten by ";
    return computerScore = computerScore + 1;
}

function addUserPoint() {
    whoBeatsWho.innerHTML = " beats ";
    return yourScore = yourScore + 1;
}

//checks if either player has won 5 rounds, then writes win or lose
function checkGameOver(userChoice) {
    if (yourScore >= 5) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("your-score").innerHTML = yourScore;
    } else if (computerScore >= 5) {
        document.getElementById("result").innerHTML = "You Lose";
        document.getElementById("computer-score").innerHTML = computerScore;
    } else {
    printResult(userChoice);
    }
};

//prints the player scores
function printResult(userChoice) {
        document.getElementById("your-score").innerHTML = yourScore;
        document.getElementById("computer-score").innerHTML = computerScore;
};

//changes the images based on the choice
function insertRickImage(whichId){
    document.getElementById(whichId).src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlq3ULBzC_iTL9_TsuvZsToKYcduPTlQ_y9sfUc8Ny5jA76IO7&usqp=CAU"
};

function insertMortyImage(whichId){
    document.getElementById(whichId).src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmHqjPvCAUMkWmvx3Bs0LhTTyu_Ro8ZoRw_YzMK5iuGFRn0zKM&usqp=CAU"
};

function insertPickleImage(whichId){
    document.getElementById(whichId).src="data:image/png;base64,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"
};