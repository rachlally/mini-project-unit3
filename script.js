//global variables
var game = confirm("Do you want to play Rock, Paper, Scissors?")
var win = 0;
var lose = 0;
var tie = 0;

if (game == true) {
    main();
    var game = confirm("Play again?")
    while (game == true) {
        main();
    }
} else {
    alert("Bye-Bye!")
}

function main() {
    //user and computer choices
    var choice = ["R", "P", "S"];

    //asking R, P, S
    var asking = prompt("R, P, S?");

    //not case sensitive
    asking = asking.toUpperCase();

    //computer answer // randomly select choice
    var computerAnswer = choice[Math.floor(Math.random() * choice.length)];
    alert("Computer chooses " + computerAnswer);

    //user VS computer outcomes

    if (asking == "R") {
        answerR();
    } else if (asking == "P") {
        answerP()
    } else if (asking == "S") {
        answerS()
    } else {
        alert("Oops try again!")
    }

    // user choice R
    function answerR() {
        if (computerAnswer == "S") {
            alert("You win the game!");
            win++;
        } else if (computerAnswer == "P") {
            alert("You lose!");
            lose++;
        } else if (computerAnswer == "R") {
            alert("It's a tie!");
            tie++;
        }
    }

    // user choice P
    function answerP() {
        if (computerAnswer == "S") {
            alert("You lose!");
            lose++;
        } else if (computerAnswer == "P") {
            alert("It's a tie!");
            tie++;
        } else if (computerAnswer == "R") {
            alert("You win the game!");
            win++;
        }
    }

    // user choice S
    function answerS() {
        if (computerAnswer == "S") {
            alert("It's a tie!");
            tie++;
        } else if (computerAnswer == "P") {
            alert("You win the game!");
            win++;
        } else if (computerAnswer == "R") {
            alert("You lose!");
            lose++;
        }
    }

    alert("Win: " + win + " Lose: " + lose + " Tie: " + tie)
    return (win, lose, tie);
}
