// Get the computer Choice: Rock, Paper or Scissors
function getComputerChoice(str){
    const choice = ['rock', 'paper', 'scissors']
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}

console.log(getComputerChoice());

function getHumanChoice(str){
    let humanChoice = prompt("Please enter: 'rock', 'paper', 'scissors'")
    return humanChoice;
}
console.log(getHumanChoice());


