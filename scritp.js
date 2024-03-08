// Get the computer choice funstion
const computerOption = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    console.log(computerOption[(Math.floor(Math.random() * computerOption.length))]);

}
getComputerChoice();