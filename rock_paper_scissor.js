
const hands = ['rock' , 'paper', 'scissors'];
let Player1 = {Name: "Player 1", Hand: getHand};
let Player2 = {Name: "Player 2", Hand: getHand};

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
}

//Play Round
function playRound(Player1, Player2) {
    var a = Player1.Hand();
    var b = Player2.Hand();
    if (a == 'rock' && b == 'scissors') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 1 wins round!")
        return Player1;
    }
    else if (a == 'paper' && b == 'rock') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 1 wins round!")
        return Player1;
    }
    else if (a == 'scissors' && b == 'paper') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 1 wins round!")
        return Player1;
    }
    else if (a == 'scissors' && b == 'rock') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 2 wins round!")
        return Player2;
    }
    else if (a == 'rock' && b == 'paper') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 2 wins round!")
        return Player2;
    }
    else if (a == 'paper' && b == 'scissors') {
        console.log("Player 1 picked " + a, "Player 2 picked " + b + ": Player 2 wins round!")
        return Player2;
    }
    else {
        console.log("It's a Tie")
        return null
    }
}

// console.log(playRound(Player1,Player2))

//Play Game
function playGame(Player1, Player2, playUntil) {

    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil){
        let roundWinner = playRound(Player1, Player2);
        if (roundWinner == Player1)
            player1Wins++
        else if (roundWinner == Player2)
            player2Wins++

    console.log('Current Score: ', Player1.Name, '', player1Wins)
    console.log('Current Score: ', Player2.Name, '', player2Wins)

    }

    if(player1Wins === playUntil) {
        return Player1.Name + " wins the game!";
    } else {
        return Player2.Name + " wins the game!";
}
}

console.log(playGame(Player1,Player2,5));
