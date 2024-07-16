let uScore=document.querySelector('.uScore');
let cpuScore=document.querySelector('.cpuScore');
let vs = document.getElementById("vs");
let whoWonTitle = document.getElementById("title2");
const cpuChoice = document.getElementById("cpuWeapon");
const userChoice = document.getElementById("uWeapon");

//Handles hiding the main game content until start button is clicked
document.addEventListener("DOMContentLoaded", function() {
    const lobbyPage = document.getElementById("lobbyPage");
    const gamePage = document.getElementById("gamePage");
    const startButton = document.getElementById("start");
    gamePage.style.display = "none";
    document.getElementById("winFrame").style.display="none";

    startButton.addEventListener("click", function() {
        lobbyPage.style.display = "none";
        gamePage.style.display = "grid";
        uScore.textContent=0;
        cpuScore.textContent=0;
        vs.textContent="VS";
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
    displayCompChoice(`images/${computerChoice}.png`);
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
    return 3; 
}

//global vars for tracking computer vs user score
let compWins = 0; 
let userWins = 0; 

//Game loop, play for 5 valid rounds.
function game() {
    let rockChoice = document.getElementById("rock");
    let paperChoice = document.getElementById("paper");
    let scissorsChoice = document.getElementById("scissors");
    let winner;
    rockChoice.addEventListener("click", function() {
        displayUserChoice("images/rock.png");
        winner=playRound(getComputerChoice(), "rock");
        checkWinner(winner);
        checkEnd();
    }); 
    paperChoice.addEventListener("click", function() {
        displayUserChoice("images/paper.png");
        winner=playRound(getComputerChoice(), "paper");
        checkWinner(winner);
        checkEnd();
    }); 
    scissorsChoice.addEventListener("click", function() {
        displayUserChoice("images/scissors.png");
        winner=playRound(getComputerChoice(), "scissors");
        checkWinner(winner);
        checkEnd();
    }); 
} 

function displayUserChoice(imgSrc) { 
    userChoice.innerHTML = `<img src="${imgSrc}" alt="User's Choice">`;
    userChoice.style.opacity = 1;
}

function displayCompChoice(imgSrc) { 
    cpuChoice.innerHTML = `<img src="${imgSrc}" alt="User's Choice">`;
    cpuChoice.style.opacity = 1;
}

//Helper fxn, checks who won the round and incriments scores if needed
function checkWinner(winner) { 
    if(winner==1) {
        vs.textContent = "=";
        console.log("tie");
    }
    else if(winner==2) {
        userWins++;
        uScore.textContent = userWins;
        vs.textContent = ">";
        console.log(`you win`); 
    }
    else {
        compWins++;
        cpuScore.textContent = compWins;
        vs.textContent = "<";
        console.log(`You lost.`); 
    }
}

//Helper fxn, checks if anyone won and displays winner
function checkEnd() { 
    let whoWon;
    if ((compWins==5)) {
        console.log("Computer wins! :(");
        whoWon="comp";
        compWins=0; userWins=0;
        vs.textContent = "VS";
        whoWonTitle.textContent = "Computers have defeated humanity. Nice."; 
        showEnd(whoWon);
    }
    else if ((userWins==5)){
        console.log("Humans FTW!!!!!!!");
        whoWon="human"; 
        compWins=0; userWins=0;
        vs.textContent = "VS";
        whoWonTitle.textContent = "You have saved humanity!"; 
        showEnd(whoWon);
    }
}


function showEnd(whoWon) {
    const endPage = document.getElementById("winFrame");
    const gamePage = document.getElementById("gamePage");
    const replayButton = document.getElementById("replay");
    gamePage.style.display = "none";
    endPage.style.display="grid"; 

    replayButton.addEventListener("click", function() {
        endPage.style.display = "none";
        uScore.textContent = userWins; 
        cpuScore.textContent = compWins;
        userChoice.innerHTML = ''; 
        cpuChoice.innerHTML = '';
        gamePage.style.display = "grid";
    }); 
}

function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}

function normalImg(x) {
    x.style.height = "175px";
    x.style.width = "175px";
}




 