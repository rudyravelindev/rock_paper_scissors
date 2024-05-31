// Get the computer input: Rock, Paper or Scissors
function getComputerChoice(){
    const computerChoice = ['rock', 'paper', 'scissors'];
    const computerChoose = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[computerChoose];
}
console.log(getComputerChoice());

// Get the Human choice
function getHumanChoice(){
    let humanChoice = prompt('Hello HUMAN: please choose "rock, paper or scissors"');
    return humanChoice;

}
console.log(getHumanChoice());

// score
humanScore = 0;
computerScore = 0;

// Play a single ROUND
function playRound(humanChoice, computerChoice){
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        return 'Human win'
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'Human win'
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'Human win'
    }
    else if(humanChoice === computerChoice){
        return 'It is a TIE'
    }
    else{
        return 'Computer win'
    }
}
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;
console.log(playRound(humanSelection, computerSelection));

// compare the two choice
