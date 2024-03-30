document.addEventListener("DOMContentLoaded", function() {
    const lobbyPage = document.getElementById("lobbyPage");
    const gamePage = document.getElementById("gamePage");
    const startButton = document.getElementById("start");
    gamePage.style.display = "none";

    startButton.addEventListener("click", function() {
        lobbyPage.style.display = "none";
        gamePage.style.display = "grid";
        game();
    }); 
})

//Get computer choice based on random number's range 
function getComputerChoice() { 
    console.log("randomizing choice...");
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]    
}


//Play a round. Outcomes: 1=tie, 2=user wins, 3=computer wins.
function playRound (computerChoice, userChoice) {

    if (computerChoice == userChoice){ return 1; }
    else { 
        //All cases where user wins
        switch (userChoice) { 
            case 'rock': 
                if (computerChoice == 'scissors') {return 2;}
            break; 

            case 'paper': 
                if (computerChoice == 'rock') {return 2;}
            break; 

            case 'scissors': 
                if (computerChoice == 'paper') {return 2;}
            break; 
        }
    } 

    //Computer wins
    return 3; 
}

//Game loop, play for 5 valid rounds.
function game() {
    let compWins = 0; 
    let userWins = 0; 
    let rockChoice = document.getElementById("rock");
    let paperChoice = document.getElementById("paper");
    let scissorsChoice = document.getElementById("scissors");
    let winner;
        rockChoice.addEventListener("click", function() {
            winner=playRound(getComputerChoice(), "rock");
            if(winner==1) {console.log("tie");}
            else if(winner==2){console.log(`you win`); userWins++;}
            else {console.log(`You lost.`); compWins++;}

            if ((compWins+userWins==5)&&(compWins > userWins)) {
                console.log("Computer wins! :(");
                compWins=0; userWins=0;}
            else if ((compWins+userWins==5)&&(compWins < userWins)){
                console.log("Humans FTW!!!!!!!");
                compWins=0; userWins=0;}
        }); 
        paperChoice.addEventListener("click", function() {
            winner=playRound(getComputerChoice(), "paper");
            if(winner==1) {console.log("tie");}
            else if(winner==2){console.log(`you win`); userWins++;}
            else {console.log(`You lost.`); compWins++;}

            if ((compWins+userWins==5)&&(compWins > userWins)) {
                console.log("Computer wins! :(");
                compWins=0; userWins=0;}
            else if ((compWins+userWins==5)&&(compWins < userWins)){
                console.log("Humans FTW!!!!!!!");
                compWins=0; userWins=0;}
        }); 
        scissorsChoice.addEventListener("click", function() {
            winner=playRound(getComputerChoice(), "scissors");
            if(winner==1) {console.log("tie");}
            else if(winner==2){console.log(`you win`); userWins++;}
            else {console.log(`You lost.`); compWins++;}

            if ((compWins+userWins==5)&&(compWins > userWins)) {
                console.log("Computer wins! :(");
                compWins=0; userWins=0;}
            else if ((compWins+userWins==5)&&(compWins < userWins)){
                console.log("Humans FTW!!!!!!!");
                compWins=0; userWins=0;}
        }); 
    //let gameOut, userChoice, computerChoice;


} 


 