let uScore=document.querySelector('.uScore');
let cpuScore=document.querySelector('.cpuScore');
let vs = document.getElementById("vs");
let whoWonTitle = document.getElementById("title2");
const cpuChoice = document.getElementById("cpuWeapon");
const userChoice = document.getElementById("uWeapon");
const winImg = document.getElementById("winnerImg");
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
        userChoice.innerHTML= '<img src="images/monk.png">';
        cpuChoice.innerHTML= '<img src="images/robot.png">';
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
        whoWonTitle.textContent = "Computers have defeated humanity. Nice..."; 
        winImg.innerHTML = '<iframe src="https://giphy.com/embed/ySpxjJmsq9gsw" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        showEnd(whoWon);
    }
    else if ((userWins==5)){
        console.log("Humans FTW!!!!!!!");
        whoWon="human"; 
        compWins=0; userWins=0;
        vs.textContent = "VS";
        whoWonTitle.textContent = "Humans win! This time..."; 
        winImg.innerHTML = '<iframe src="https://giphy.com/embed/pFwRzOLfuGHok" width="480" height="298" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        showEnd(whoWon);
    }
}

//Shows ending page with results and replay option 
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
        userChoice.innerHTML= '<img src="images/monk.png">';
        cpuChoice.innerHTML= '<img src="images/robot.png">';
        gamePage.style.display = "grid";
    }); 
}

//Reponsiveness for hover and clicking
function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}
function normalImg(x) {
    x.style.height = "175px";
    x.style.width = "175px";
}
function mouseDown(x) {
    x.style.background = "#00bbf0";
    vs.style.fontSize = "90px";
}
function mouseUp(x) {
    x.style.background = "none";
    vs.style.fontSize = "75px";
}

//Lobby page animation
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Rock",
    "Paper",
    "Scissors",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();




 