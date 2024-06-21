// Get the computer choice: Rock, Paper, or Scissors
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

// Get the human choice
function getHumanChoice() {
    let humanChoice = prompt('Please enter: "rock", "paper", "scissors"');
    if (!humanChoice) return ""; // Handle case where prompt is cancelled
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    return lowerCaseHumanChoice;
}

// Single play function
function playRound(humanChoice, computerChoice) {
    if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'scissors' && humanChoice === 'paper' ||
        computerChoice === 'paper' && humanChoice === 'rock') {
        return 'Computer WIN';
    } else if (computerChoice === humanChoice) {
        return 'It is a TIE';
    } else if (['rock', 'paper', 'scissors'].includes(humanChoice)) {
        return 'Human WIN';
    } else {
        return 'Invalid choice'; // Handle invalid input
    }
}

// Creating the playGame FUNCTION
function playGame() {
    // Creating the two variables in the global scope.
    let humanScore = 0;
    let computerScore = 0;

    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        if (!['rock', 'paper', 'scissors'].includes(humanSelection)) {
            console.log('Invalid choice. Please enter "rock", "paper", or "scissors".');
            i--; // Decrement i to not count this round
            continue;
        }
        const computerSelection = getComputerChoice();

        // Display choices
        console.log('Computer choice:', computerSelection);
        console.log('Human choice:', humanSelection);

        // Determine result and log it
        const result = playRound(humanSelection, computerSelection);
        console.log('Result:', result);

        // Increment scores based on the result
        if (result === 'Human WIN') {
            humanScore++;
        } else if (result === 'Computer WIN') {
            computerScore++;
        }

        // Log current scores
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine the final winner
    if (humanScore > computerScore) {
        console.log('Congratulations! You are the overall winner!');
    } else if (computerScore > humanScore) {
        console.log('Sorry, the computer wins this time!');
    } else {
        console.log('It is a tie overall!');
    }
}

// Start the game
playGame();
