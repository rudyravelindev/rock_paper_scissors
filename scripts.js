// Get the computer Choice: Rock, Paper or Scissors
function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors']
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}

// Get the human choice
function getHumanChoice(){
    let humanChoice = prompt('"Please enter: "rock", "paper", "scissors"')
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    return lowerCaseHumanChoice;
}


// Creating the two variable in the global scope.
let humanScore = 0;
let computerScore = 0;



// Single play function
function playRound(humanChoice, computerChoice){
    if(computerChoice === 'rock' && humanChoice === 'scissors'){
        return 'Computer WIN';   
    }

    else if(computerChoice === 'scissors' && humanChoice === 'paper'){
        return 'computer WIN';
    }
    else if(computerChoice === 'paper' && humanChoice === 'rock'){
        return 'Computer WIN';
    }
    else if(computerChoice === humanChoice){
         return 'It is a TIE';
    }
    else{
        return 'Human WIN';
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Display choices
console.log('Computer choice:', computerSelection);
console.log('Human choice:', humanSelection);


// Determine result and log it
const result = playRound(humanSelection, computerSelection);
console.log('Result:', result);