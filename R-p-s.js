function getComputerChoice() 
{ 
    let choice = Math.random(); 
    console.log("randomizing choice...");
    if (choice <= .33)
    { 
        //console.log("Computer chose Rock");
        return "rock"; 
    }
    else if (choice <= .66) 
    {
        //console.log("Computer chose Paper");
        return "paper"; 
    }
    else 
    {
        //console.log("Computer chose Scissors");
        return "scissors";
    }
    
}

function getUserChoice() 
{ 
    let user = prompt("Please type (rock/paper/scissors)"); 
    let userLower = user.toLowerCase(); 
    while ((userLower.localeCompare("rock") !== 0) && (userLower.localeCompare("paper") !== 0) 
        && (userLower.localeCompare("scissors") !== 0)) 
    { 
        user = prompt("ERROR: invalid input. Please type (rock/paper/scissors)"); 
        userLower = user.toLowerCase(); 
    }

    return userLower; 
}


let computerChoice= getComputerChoice();
let userChoice = getUserChoice();

function playRound (computerChoice, userChoice) {
    let outcome = 3; 

    if (computerChoice == userChoice)
    {
        outcome = 1;
        return outcome;
    }

    else { 
        switch (userChoice) 
        { 
            case 'rock': 
                if (computerChoice == 'scissors') {
                    outcome = 2;
                    return outcome; 
                }
            break; 

            case 'paper': 
                if (computerChoice == 'rock') {
                    outcome = 2; 
                    return outcome;
                }
            break; 

            case 'scissors': 
                if (computerChoice == 'paper') {
                    outcome = 2; 
                    return outcome;
                }
            break; 
        }
    } 

    return outcome; 
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

        if (compWins+userWins < 5)
        {
            userChoice = getUserChoice(); 
            computerChoice = getComputerChoice();
        }
    }

    if (compWins > userWins) 
        console.log("Computer wins! :("); 
    else 
        console.log("Humans FTW!!!!!!!"); 
}

game(); 