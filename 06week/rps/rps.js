
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//console.log("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    return "The result is a tie!" + " " + "Lets play again.";
  }
    else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "rock wins" + "<br>" + "You beat the computer, nice job!";
      } else {
        return "paper wins" + "<br>" + "Your really smart computer beat you.";
      }
    }
    else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "paper wins" + "<br>" + "You beat the computer, nice job!";
      } else {
        return "Scissors wins" + "<br>" + "Your really smart computer beat you.";
      }
    }
    else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Rock wins" + "<br>" + "Your really smart computer beat you.";
      } else {
        return "Scissors win" + "<br>" + "You beat the computer, nice job!";
      }
  }
} //closes compare function
document.write('<p id="compChoice" >' + "Computer chose: " + computerChoice + '<p>');
document.write('<p id="result" >' + play(userChoice, computerChoice)+ '<p>');
