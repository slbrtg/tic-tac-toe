function Game (){
  this.row1 = [];
  this.row1.length = 3
  this.row2 = [];
  this.row2.length = 3
  this.row3 = [];
  this.row3.length = 3
  this.numOfPlayers = 1;
  this.victory = false;
  this.tie = false;
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
    (this.row1[0] === "O" && this.row2[0] === "O" && this.row3[0] === "O") ||
    (this.row1[1] === "O" && this.row2[1] === "O" && this.row3[1] === "O") ||
    (this.row1[2] === "O" && this.row2[2] === "O" && this.row3[2] === "O") ||
    //o diagonal
    (this.row1[0] === "O" && this.row2[1] === "O" && this.row3[2] === "O") ||
    (this.row1[2] === "O" && this.row2[1] === "O" && this.row3[0] === "O")
  ) {
    //Output for winner
    console.log(winner.symbol + " Wins")
    this.victory = true;
    $(".row").children().unbind('click');
    $('#winner').show();
    $('#winner').empty().append(winner.symbol + " WINS")
    //creates reset button for new game
    $('#game-board').append("<button id='reset-button' class='btn-primary btn-lg'type='button' name='button'>Play Again</button>");
    $("#reset-button").click(function(){
      location.reload();
      console.log("working reset button");
    });
    //output for tie
  } else if (playerTurn >= 10) {
    this.tie = true;
    $(".row").children().unbind('click');
    console.log("CAT'S GAME")
    $('#winner').show();
    $('#winner').empty().append("CAT'S GAME")
    //creates reset button for new game
    $('#game-board').append("<button id='reset-button' class='btn-primary btn-lg'type='button' name='button'>Play Again</button>");
    $("#reset-button").click(function(){
      location.reload();
      console.log("working reset button");
    });
  } else {
      $('#winner').show();
      $('#winner').empty().append(winner.symbol +" makes a move")
    }
}

//creates players or bots based on input
Game.prototype.setPlayers = function(userNum){
  this.numOfPlayers = userNum;
  if(this.numOfPlayers === 1) {
    playerx = new Player("X");
    playero = new Computer("O");
  } else {
    playerx = new Player("X");
    playero = new Player("O");
  }
}

//accepts a players input and marks the board according to
//position and player symbol
Game.prototype.receiveInput = function (input, symbol) {
  playedNumbers.push(input);
  if (input < 3){
    this.row1[input]= symbol;
  } else if (input > 5){
    input -= 6;
    this.row3[input]= symbol;
  } else {
    input -= 3;
    this.row2[input]= symbol;
  }
  console.log(playedNumbers);
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
  $("#" + input).append("<h1 class='symbol-mark'>" + activePlayer.symbol + "</h1>");
  game.receiveInput(input,symbol);
}

function Computer (symbol){
  this.symbol = symbol;
  this.winner = false;
  this.userInput = 0;
}

Computer.prototype.plays = function (game){
  var computerInput = 0;
  computerInput = Math.floor(Math.random() * (8 - 0) + 0);
  while(playedNumbers.includes(computerInput)){
    computerInput = Math.floor(Math.random() * (8 - 0) + 0);
  }
  symbol = this.symbol;
  console.log(symbol +" makes a move");
  $("#" + computerInput).append("<h1 class='symbol-mark'>" + activePlayer.symbol + "</h1>");
  game.receiveInput(computerInput,symbol);
}


//function to actually play the game
function playTTT(id){
  //human rules
  if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
  var userInput = parseInt(id);
  activePlayer.plays(newGame, userInput);
  newGame.detectVictory(activePlayer);
  playerTurn += 1;
  $("#"+id).unbind('click');
  //robot rules
  if (newGame.numOfPlayers === 1 && newGame.victory === false && newGame.tie === false){
    setTimeout(function(){
      if (playerTurn % 2 === 0){activePlayer = playerx;} else {activePlayer = playero;}
      var userInput = parseInt(id);
      activePlayer.plays(newGame, userInput);
      newGame.detectVictory(activePlayer);
      playerTurn += 1;
      $("#"+id).unbind('click');
    }, 250);
  }
}




$(document).ready(function(){
  newGame = new Game();
  numOfPlayers = 0;
  $("button.btn-warning").click(function(){
    numOfPlayers += 1;
    newGame.setPlayers(numOfPlayers);
    playerTurn= 2;
    console.log(numOfPlayers);
    activePlayer = playero;
    playedNumbers = [];
  });
  $("button.btn-danger").click(function(){
    numOfPlayers += 2;
    newGame.setPlayers(numOfPlayers);
    playerTurn= 2;
    console.log(numOfPlayers);
    activePlayer = playero;
    playedNumbers = [];
  });

  $( "#0" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#1" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#2" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#3" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#4" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#5" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#6" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#7" ).on( "click", function(){
    playTTT(this.id);
  });
  $( "#8" ).on( "click", function(){
    playTTT(this.id);
  });
});
