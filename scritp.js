// Get the computer choice function
const computerOption = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    console.log(computerOption[(Math.floor(Math.random() * computerOption.length))]);

}
getComputerChoice();

// Get User choice
let userChoice = prompt("Please enter: Rock, Paper or Sciccors: ")
let getUserChoice =  userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();


function playerChoice () {
    console.log(getUserChoice)
}
playerChoice();
