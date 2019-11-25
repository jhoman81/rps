function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameOver = 0;
    let playerSelection = "";
    let outcome = 0;
    let computerSelection = "";

    const p1score = document.querySelector("#p1-score");
    const p2score = document.querySelector("#p2-score");
    const results = document.querySelector("#results");

    // Computer choice
    function computerPlay() {
        let choices = ["rock", "paper", "scissors"];

        let index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }

    // Determine Winner
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return 1 // "You win! Rock beats scissors!";
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return 1 // "You win! Scissors beats paper!";
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return 1 // "You win! Paper beats rock!";
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            return 0 // "You lose! Paper beats rock!";
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return 0 //"You lose! Rock beats scissors!";
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return 0 // "You lose! Scissors beats paper!";
        } else {
            return 2 // "Tie!";
        }
    }

    function displayScore() {
        p1score.textContent = "Player Score: " + playerScore;
        p2score.textContent = "Computer Score: " + computerScore;
    }

    function checkOutcome(gameOutcome) {
        if (outcome == 0) {
            results.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
            displayScore();
        } else if (outcome == 1) {
            const playerWins = document.querySelector("#results");
            results.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
            displayScore();
        } else {
            results.textContent = "Tie!";
        }

        if (playerScore == 5) {
            results.textContent = "The final score is -- Player [" + playerScore + "] , Computer [" + computerScore + "].";
            const playerWins = document.createElement('div');
            playerWins.textContent = "You win the game!";
            results.appendChild(playerWins);
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            results.textContent = "The final score is -- Player [" + playerScore + "] , Computer [" + computerScore + "].";
            const computerWins = document.createElement('div');
            computerWins.textContent = "The computer wins the game!";
            results.appendChild(computerWins);
            playerScore = 0;
            computerScore = 0;
        }
    }

    var rockbtn = document.querySelector('#rock');
    rockbtn.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = "rock";
        outcome = playRound(playerSelection, computerSelection);
        checkOutcome(outcome);
    });

    var paperbtn = document.querySelector("#paper");
    paperbtn.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = 'paper';
        outcome = playRound(playerSelection, computerSelection);
        checkOutcome(outcome);
    });

    var scissorsbtn = document.querySelector("#scissors");
    scissorsbtn.addEventListener('click', () => {
        computerSelection = computerPlay();
        playerSelection = 'scissors';
        outcome = playRound(playerSelection, computerSelection);
        checkOutcome(outcome);
    })

}

game();