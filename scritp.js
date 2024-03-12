// Get the computer choice function
const computerOption = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    return computerOption[Math.floor(Math.random() * computerOption.length)];

}

// Get User choice
let userChoice = prompt("Please enter: Rock, Paper or Sciccors: ")
let getUserChoice =  userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();


//  Single Round play
function  playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ){
        return `${playerChoice} beats ${computerChoice}: Player wins!`
    } else{
        return `${computerChoice} beats ${playerChoice}: Computer wins!`
    }

}
let computerChoice = getComputerChoice();
let result = playRound(getUserChoice, computerChoice);
console.log(result)