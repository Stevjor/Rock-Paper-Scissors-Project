//Gets a random word between rock, papers, scissors.
function computerPlay() {
    //Create a list of the names.
    const list = ["Rock", "Paper", "Scissors"];

    //I have to get a random variable from my list of names.
    //For this, I have to create a range from zero to the 
    //length of the list minus 1. Then, I have to pick a random
    //number between this range, and use it as an index for the 
    //list, and in this way, I can choose a random variable.
    let i = Math.floor(Math.random() * (list.length));
    let name = list[i];
    
    return name;
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


//Have to add three buttons which will be the player's selection.
//One click of a button, will be one round of the game. 

//One execution of the button will call the function playRound, and then count who got the point at the moment. 

//While true
//break loop (end the game) once a player reaches 5 points
/**
    let userScore = 0;
    let computerScore = 0;
    

        let userChoice = "";
        let computerChoice = computerPlay();

        if (document.getElementById("rock").clicked == true) {
            userChoice = "rock";
        }

        else if (document.getElementById("paper").clicked == true) {
            userChoice = "paper";
        }

        else if (document.getElementById("scissors").clicked == true) {
            userChoice = "scissors";
        }

        

        let roundWinner = playRound(userChoice, computerChoice);
        if (roundWinner.includes("Won")) {
            userScore += 1;
        }

        else if (roundWinner.includes("Lose") != -1){
            computerScore += 1;
        }

        let userPointsContainer = document.querySelector(".user_points");
        let computerPointsContainer = document.querySelector(".computer_points");
        let mainContainer = document.querySelector(".display_winner");

        let userh2Element = document.createElement("h2");
        let computerh2Element = document.createElement("h2");

        userh2Element.textContent = `You have ${userScore} points.`;
        computerh2Element.textContent = `Computer has ${computerScore} points.`;

        userPointsContainer.appendChild(userh2Element);
        computerPointsContainer.appendChild(computerh2Element);

        let userDecisionElement = document.createElement("h2");
        let computerDecisionElement = document.createElement("h2");
        let sayRoundWinnerElement = document.createElement("h2");

        mainContainer.appendChild(userDecisionElement);
        mainContainer.appendChild(computerDecisionElement);
        mainContainer.appendChild(sayRoundWinnerElement);

    

    let sayWinnerContainer = document.querySelector(".say_winner");
    let sayWinnerElement = document.createrElement("h2");
    if (userScore > computerScore) {
        sayWinnerElement.textContent = `You won!`;
    }
    else {
        sayWinnerElement.textContent = `You won!`;
    }

    sayWinnerContainer.appendChild(sayWinnerElement);



*/
//The player who reaches 5 points is the winner.
//In the user interface, each round of the game will display
//the winner of the round, or if there is a draw. This will be displayed
//in the same position every round, so it has to be cleared by the time 
//another round is played. Also, in the same position, the winner of the
//game will be displayed. 
//Also have to show in the user interface the points each player has after
//each round, so it can be clearly seen who is the winner.

//This function calls the playRound function to play five rounds and the one with more scores
//is the winner.