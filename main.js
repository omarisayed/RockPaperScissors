let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const all_buttons = document.querySelectorAll(".buttons")
const rock_span = document.querySelector(".r");
const paper_span = document.querySelector(".p");
const scissors_span = document.querySelector(".s");
const playAgain_p = document.querySelector(".again");
const scoreBoard_div = document.querySelector('.score-board');
const playerScore_span = document.querySelector("#player-score");
const computerScore_span = document.querySelector("#computer-score");
const result_p = document.querySelector('.result');


//I'll put all of the event listeners in one function called main:

function main(){  

    rock_span.addEventListener('click', function(){
        game('r');              //when rock is clicked it will run the game function and the argument 'r' is passed
    })

    paper_span.addEventListener('click', function(){
        game('p');
    })

    scissors_span.addEventListener('click', function(){
        game('s');
    })

    playAgain_p.addEventListener('click', function(){
        playAgain();
    })

}

main();

// Computer choice function:

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// Game Over

function endGame(){
    if (playerScore == 5){
        result_p.textContent = "YOU HAVE WON 5 TIMES!"
        playAgain_p.style.visibility = 'visible';
        disableButtons();
    }else if (computerScore == 5){
        result_p.textContent = "THE COMPUTER HAS WON 5 TIMES!"
        playAgain_p.style.visibility = 'visible';
        disableButtons();
    } 
}

// Disable all the buttons 

function disableButtons(){
    rock_span.disabled = true;
    paper_span.disabled = true;
    scissors_span.disabled = true;
}

// Restart the game

function playAgain(){
    playerScore = 0;
    computerScore = 0;
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    rock_span.disabled = false;
    paper_span.disabled = false;
    scissors_span.disabled = false;
    playAgain_p.style.visibility = 'hidden';
    result_p.textContent = "Let's Play!"
}

// Game logic is here:

function game(playerChoice){    
    const computerChoice = getcomputerChoice();

    switch(playerChoice + computerChoice) {    // ill first take care of all the cases when the player wins, then when player loses/ computer wins, then tie
        case "rs":
        case "pr":
        case "sp":
            rounds++;
            playerScore++;
            playerScore_span.textContent = playerScore;
            computerScore_span.textContent = computerScore;
            result_p.textContent = "Player wins!"
            endGame();
            break;
        case "rp":
        case "ps":
        case "sr":
            rounds++;
            computerScore++;
            computerScore_span.textContent = computerScore;
            playerScore_span.textContent = playerScore;
            result_p.textContent = "Computer wins!"
            endGame();
            break;
        case "rr":
        case "pp":
        case "ss":
            rounds++;
            result_p.textContent = "It's a draw!"
            break;

    }

}
