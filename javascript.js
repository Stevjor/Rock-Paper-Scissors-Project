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

//This function calls the playRound function to play five rounds and the one with more scores
//is the winner.
function game() {
    
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("");
        console.log(`Round ${i+1}`);
        let userChoice = prompt(`Round ${i+1}`, "");
        console.log(`You chose ${userChoice}.`);

        let computerChoice = computerPlay();
        console.log(`Computer chose ${computerChoice}.`);

        //Verify who is the winner and give a score.
        let winner = playRound(userChoice, computerChoice);

        console.log(winner);

        if (winner.includes("Won")) {
            userScore += 1;
        }

        else if (winner.includes("Lose")){
            computerScore += 1;
        }
    }
    console.log("");
    console.log(`You have ${userScore} score/s.`);
    console.log(`Computer has ${computerScore} score/s.`);
    if (userScore == computerScore) return "There is no winer. °_°";
    if (userScore > computerScore) return "You won! °u°";
    else return "You lose! °n°";
}