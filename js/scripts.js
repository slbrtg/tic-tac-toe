function Game (){
  this.row1 = [];
  this.row1.length = 3
  this.row2 = [];
  this.row2.length = 3
  this.row3 = [];
  this.row3.length = 3
}

function Player (symbol){
  this.symbol = symbol;
  this.winner = false;
  this.input = input;
}

Game.prototype.receiveInput = function (input, playerSymbol) {
  if (input < 3){
    this.row1[input]= playerSymbol;
  } else if (input > 5){
    input -= 6;
    this.row3[input]= playerSymbol;
  } else {
    input -= 3;
    this.row2[input]= playerSymbol;
  }
  console.log(newGame.row1);
  console.log(newGame.row2);
  console.log(newGame.row3);
}









$(document).ready(function() {

});
