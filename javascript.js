//Gets a random word between rock, papers, scissors.
function computerPlay() {
    const list = ["Rock", "Paper", "Scissors"];

    let i = Math.floor(Math.random() * (list.length));
    let name = list[i];
    
    return name.toLowerCase();
}

//This function plays the game of rock papers scissors
//between the two given competitors.
function playRound(playerSelection, computerSelection) {
    //Rock wins against scissors.
    //Scissors win against paper.
    //Paper wins against rock.
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Won! Rock beats scissors.";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Won! Scissors beat paper.";
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Won! Paper beats rock."
    }

    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lose! Rock beats scissors.";
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lose! Scissors beat paper.";
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats rock."
    }
    
    else if (computerSelection == playerSelection) {
        return "It's a draw!";
    }

}

//Takes the scores and choices of the players and compares them to tell who is the 
//winner during each execution. Then, the results are added in a container to show
//them in the screen.
function displayResults(userScore, computerScore, userChoice, computerChoice) {
    
    let userPointsContainer = document.querySelector(".user_points");
    let computerPointsContainer = document.querySelector(".computer_points");
    let mainContainer = document.querySelector(".display_winner");
    userPointsContainer.textContent = "";
    computerPointsContainer.textContent = "";
    mainContainer.textContent = "";

    let userh2Element = document.createElement("h2");
    let computerh2Element = document.createElement("h2");

    userh2Element.textContent = `You have ${userScore} points.`;
    computerh2Element.textContent = `Computer has ${computerScore} points.`;
    userh2Element.style.color = "red";
    computerh2Element.style.color = "red";
    userPointsContainer.appendChild(userh2Element);
    computerPointsContainer.appendChild(computerh2Element);

    let userDecisionElement = document.createElement("h2");
    let computerDecisionElement = document.createElement("h2");
    let sayRoundWinnerElement = document.createElement("h2");

    userDecisionElement.textContent = `You chose ${userChoice}.`;
    computerDecisionElement.textContent = `Computer chose ${computerChoice}.`;
    userDecisionElement.style.color = "blue";
    computerDecisionElement.style.color = "blue";

    mainContainer.appendChild(userDecisionElement);
    mainContainer.appendChild(computerDecisionElement);
    
    let userDecisionElementText = userDecisionElement.textContent;
    let computerDecisionElementText = computerDecisionElement.textContent;

    if (userDecisionElementText.includes("rock") && computerDecisionElementText.includes("scissors")) {
        sayRoundWinnerElement.textContent = "You won! Rock beats scissors.";
    }
    else if (userDecisionElementText.includes("paper") && computerDecisionElementText.includes("rock")) {
        sayRoundWinnerElement.textContent = "You won! Paper beats rock.";
    }
    else if (userDecisionElementText.includes("scissors") && computerDecisionElementText.includes("paper")) {
        sayRoundWinnerElement.textContent = "You won! Scissors beat paper.";
    }
    else if (userDecisionElementText.includes("scissors") && computerDecisionElementText.includes("rock")) {
        sayRoundWinnerElement.textContent = "You lost! Rock beats scissors.";
    }
    else if (userDecisionElementText.includes("rock") && computerDecisionElementText.includes("paper")) {
        sayRoundWinnerElement.textContent = "You lost! Paper beats rock.";
    }
    else if (userDecisionElementText.includes("paper") && computerDecisionElementText.includes("scissors")) {
        sayRoundWinnerElement.textContent = "You lost! Scissors beat paper.";
    }
    else {
        sayRoundWinnerElement.textContent = "It's a tie!";
    }
    sayRoundWinnerElement.style.color = "blue";
    mainContainer.appendChild(sayRoundWinnerElement);
}

const buttons = document.querySelectorAll('button');

let computerScore = 0;
let userScore = 0;
let userChoice = "";
let computerChoice = "";

//This loop helps to keep count of the buttons pressed. Then, it will be possible 
//to compare the results depending on the selection of the user and the computer by 
//calling the displayResults function. At the end, the competitor who reaches 5 
//points first is the winner.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock") {
            userChoice = "rock";
            computerChoice = computerPlay();
            let roundWinner = playRound(userChoice, computerChoice);
            if (roundWinner.includes("Won")) {
                userScore += 1;
            }
        
            else if (roundWinner.includes("Lose")){
                computerScore += 1;
            }
            displayResults(userScore, computerScore, userChoice, computerChoice);

        }

        if (button.id == "paper") {
            userChoice = "paper";
            computerChoice = computerPlay();
            let roundWinner = playRound(userChoice, computerChoice);
            if (roundWinner.includes("Won")) {
                userScore += 1;
            }
        
            else if (roundWinner.includes("Lose")){
                computerScore += 1;
            }
            displayResults(userScore, computerScore, userChoice, computerChoice);

        }

        if (button.id == "scissors") {
            userChoice = "scissors";
            computerChoice = computerPlay();
            let roundWinner = playRound(userChoice, computerChoice);
            if (roundWinner.includes("Won")) {
                userScore += 1;
            }
        
            else if (roundWinner.includes("Lose")){
                computerScore += 1;
            }
            displayResults(userScore, computerScore, userChoice, computerChoice);
        }

        if (userScore == 5) {
            alert("You won!");
            computerScore = 0;
            userScore = 0;
            userChoice = "";
            computerChoice = "";

        }

        else if (computerScore == 5) {
            alert("You lost!");
            computerScore = 0;
            userScore = 0;
            userChoice = "";
            computerChoice = "";
        }
    });
});