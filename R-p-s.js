document.addEventListener("DOMContentLoaded", function() {
    const lobbyPage = document.getElementById("lobbyPage");
    const gamePage = document.getElementById("gamePage");
    const startButton = document.getElementById("start");
    gamePage.style.display = "none";

    startButton.addEventListener("click", function() {
        lobbyPage.style.display = "none";
        gamePage.style.display = "grid";

    }); 
})

//Get computer choice based on random number's range 
function getComputerChoice() 
{ 
    console.log("randomizing choice...");
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
    
}

//Get user's choice
function getUserChoice() 
{ 
    let user = prompt("Please type (rock/paper/scissors)"); 
    let userLower = user.toLowerCase(); //Make case unsensitive
    while ((userLower.localeCompare("rock") !== 0) && (userLower.localeCompare("paper") !== 0) 
        && (userLower.localeCompare("scissors") !== 0)) 
    { 
        user = prompt("ERROR: invalid input. Please type (rock/paper/scissors)"); 
        userLower = user.toLowerCase(); 
    }

    return userLower; 
}

//Play a round. Outcomes: 1=tie, 2=user wins, 3=computer wins.
function playRound (computerChoice, userChoice) {

    if (computerChoice == userChoice)
    {
        return 1;
    }

    else { 
        //All cases where user wins
        switch (userChoice) 
        { 
            case 'rock': 
                if (computerChoice == 'scissors') {
                    return 2; 
                }
            break; 

            case 'paper': 
                if (computerChoice == 'rock') {
                    return 2;
                }
            break; 

            case 'scissors': 
                if (computerChoice == 'paper') {
                    return 2;
                }
            break; 
        }
    } 

    //Computer wins
    return 3; 
}

//Game loop, play for 5 valid rounds.
function game() 
{ 
    let compWins = 0; 
    let userWins = 0; 
    let gameOut, userChoice, computerChoice;

    while ((compWins + userWins) < 5) {
        userChoice = getUserChoice(); 
        computerChoice = getComputerChoice();
        gameOut = playRound(computerChoice, userChoice); 

        if (gameOut == 1) {console.log(`You both chose ${userChoice}, it's a tie.`);}
        else if(gameOut == 2) 
        {
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            ++userWins; 
        }
        else
        {
            console.log(`You lost. ${computerChoice} beats ${userChoice}`);
            ++compWins;  
        }
    }

    if (compWins > userWins) 
        console.log("Computer wins! :("); 
    else 
        console.log("Humans FTW!!!!!!!"); 
}

game(); 