// Get the computer input: Rock, Paper or Scissors
function getComputerChoice(){
    const computerChoice = ['rock', 'paper', 'scissors'];
    const computerChoose = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[computerChoose];
}
console.log(getComputerChoice());




// Get the usr input
