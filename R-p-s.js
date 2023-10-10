

function getComputerChoice() 
{ 
    let choice = Math.random(); 
    if (choice <= .33) 
        return "Rock"; 
    else if (choice <= .66) 
        return "Paper"; 
    else 
        return "Scissors"; 
}

function getUserChoice() 
{ 
    let isValid = 0; 
    let user = prompt("Please type (rock/paper/scissors)"); 
    let userLower = user.toLowerCase(); 
        while (isValid == 0) 
        { 
            if (userLower == 'rock' || userLower == 'paper' || userLower == 'scissors')
            {
                isValid = 1; 
                return user; 
            }

            user = prompt("Invalid input. Please type (rock/paper/scissors)"); 
        }
}


let computerChoice= getComputerChoice();
let userChoice = getUserChoice();

function playRound (computerChoice, userChoice) {
    let outcome = 3; 

    if (computerChoice.toLowerCase() == userChoice.toLowerCase())
    {
        outcome = 1;
        return outcome;
    }

    switch (userChoice.toLowerCase()) 
    { 
        case 'rock': 
            if (computerChoice.toLowerCase() == 'scissors') {
                outcome = 2;
                return outcome; 
            }
        break; 

        case 'paper': 
            if (computerChoice.toLowerCase() == 'rock') {
                outcome = 2; 
                return outcome;
            }
        break; 

        case 'scissors': 
            if (computerChoice.toLowerCase() == 'paper') {
                outcome = 2; 
                return outcome;
            }
        break; 

        default: 
            return outcome;
    }

}


function game() 
{ 
    let compWins = 0; 
    let userWins = 0; 
    let gameOut;

    while ((compWins + userWins) < 5) {

        gameOut = playRound(computerChoice, userChoice); 

        if (gameOut == 1) 
            console.log(`You both chose ${userChoice}, it's a tie.`); 

        else if(gameOut == 2) 
        {
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            ++userWins; 
        }
        else if (gameOut == 3) 
        {
            console.log(`You lost. ${computerChoice} beats ${userChoice}`);
            ++compWins;  
        }
        userChoice = getUserChoice(); 
        computerChoice = getComputerChoice();
    }

    if (compWins > userWins) 
        console.log("Computer wins! :("); 
    else 
        console.log("Humans FTW!!!!!!!"); 
}

game(); 