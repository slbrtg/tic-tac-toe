function Game (){
  this.row1 = [];
  this.row1.length = 3
  this.row2 = [];
  this.row2.length = 3
  this.row3 = [];
  this.row3.length = 3
  this.numOfPlayers = 1;
}

Game.prototype.detectVictory = function (winner) {
  if (
    //x vertical
    (this.row1[0] === "X" && this.row1[1] === "X" && this.row1[2] === "X") ||
    (this.row2[0] === "X" && this.row2[1] === "X" && this.row2[2] === "X") ||
    (this.row3[0] === "X" && this.row3[1] === "X" && this.row3[2] === "X") ||
    //x horizontal
    (this.row1[0] === "X" && this.row2[0] === "X" && this.row3[0] === "X") ||
    (this.row1[1] === "X" && this.row2[1] === "X" && this.row3[1] === "X") ||
    (this.row1[2] === "X" && this.row2[2] === "X" && this.row3[2] === "X") ||
    //x diagonal
    (this.row1[0] === "X" && this.row2[1] === "X" && this.row3[2] === "X") ||
    (this.row1[2] === "X" && this.row2[1] === "X" && this.row3[0] === "X") ||
    //o vertical
    (this.row1[0] === "O" && this.row1[1] === "O" && this.row1[2] === "O") ||
    (this.row2[0] === "O" && this.row2[1] === "O" && this.row2[2] === "O") ||
    (this.row3[0] === "O" && this.row3[1] === "O" && this.row3[2] === "O") ||
    //o horizontal
    (this.row1[0] === "X" && this.row2[0] === "X" && this.row3[0] === "X") ||
    (this.row1[1] === "X" && this.row2[1] === "X" && this.row3[1] === "X") ||
    (this.row1[2] === "X" && this.row2[2] === "X" && this.row3[2] === "X") ||
    //o diagonal
    (this.row1[0] === "O" && this.row2[1] === "O" && this.row3[2] === "O") ||
    (this.row1[2] === "O" && this.row2[1] === "O" && this.row3[0] === "O")
  ) {console.log(winner.symbol + " Wins")}
}

//creates players or bots based on input
Game.prototype.setPlayers = function(userNum){
  this.numOfPlayers = userNum;
  if(this.numOfPlayers === 1) {
    playerx = new Player("X");
  } else {
    playerx = new Player("X");
    playero = new Player("O");
  }
}

//accepts a players input and marks the board according to
//position and player symbol
Game.prototype.receiveInput = function (input, symbol) {
  if (input < 3){
    this.row1[input]= symbol;
  } else if (input > 5){
    input -= 6;
    this.row3[input]= symbol;
  } else {
    input -= 3;
    this.row2[input]= symbol;
  }
  console.log(newGame.row1);
  console.log(newGame.row2);
  console.log(newGame.row3);
}


//construct for Player object
function Player (symbol){
  this.symbol = symbol;
  this.winner = false;
  this.userInput = 0;
}


//allows player to put a mark on the board
Player.prototype.plays = function(game,input) {
  symbol = this.symbol;
  console.log(symbol +" makes a move");
  game.receiveInput(input,symbol);
}


$(document).ready(function(){
  newGame = new Game();
  newGame.setPlayers(2);
  playerTurn= 2;
  activePlayer = playero;

  $( "#0" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#1" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#2" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#3" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#4" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#5" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#6" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#7" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
  $( "#8" ).on( "click", function(){
    if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
    var userInput = this.id;
    activePlayer.plays(newGame, userInput);
    newGame.detectVictory(activePlayer);
    playerTurn += 1;
  });
});
