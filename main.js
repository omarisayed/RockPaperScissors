let playerScore = 0;
let computerScore = 0;
const rock_span = document.querySelector(".r");
const paper_span = document.querySelector(".p");
const scissors_span = document.querySelector(".s");
const restart_p = document.querySelector(".restart");
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

    restart_p.addEventListener('click', function(){
        restartGame();
    })

}

main();

// Computer choice function:

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// when player wins

function win(){
    playerScore++;
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = "Player wins!"
}

// when player loses

function lose(){
    computerScore++;
    computerScore_span.textContent = computerScore;
    playerScore_span.textContent = playerScore;
    result_p.textContent = "Computer wins!"
    
}

// when there's a tie

function tie(){
    result_p.textContent = "It's a draw!"
    
}

// Restart the game

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
}


// Game logic is here:

function game(playerChoice){    
    const computerChoice = getcomputerChoice();

    switch(playerChoice + computerChoice) {    // ill first take care of all the cases when the player wins, then when player loses/ computer wins, then tie
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            tie();
            break;

    }

}

