var p1;
var p2;

p1 = prompt("Rock, Paper, Scissors");
p2 = prompt("Rock, Paper, Scissors");

function rps(p1, p2){
    if(p1 === p2){
        document.write("It's a tie");
    }else if(p1 === "rock" && p2 === "paper"){
        document.write("player 2 wins");
    }
}

rps(p1, p2);