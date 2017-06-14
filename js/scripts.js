function Game (){
  this.row1 = [];
  this.row1.length = 3
  this.row2 = [];
  this.row2.length = 3
  this.row3 = [];
  this.row3.length = 3
  this.numOfPlayers = 1;
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
  console.log(playero + " " + playerx);
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
Player.prototype.play = function(game,input,symbol) {
  console.log(symbol +" makes a move");
  game.receiveInput(input,symbol);
}










$(document).ready(function() {

});
