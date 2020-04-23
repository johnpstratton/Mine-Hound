'use strict';
console.log('hello');


var arena = document.getElementById('gameWindow');
var ctx = arena.getContext('2d');
var legra = new legra(ctx, 10, {color: 'yellow'});
legra.ctx = ctx;
const unit = 5; // hieght and width of game "tile";





//track total attempts

var attempts = 0;

// Avatar constructor
function Avatar(color, name, x, y) {
  this.color = color;
  this.name = name;
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.dead = false;
}
var playerName;
function formHandler(event) {
  event.preventDefault();
  playerName = event.name.value;
  
}
var formEl = document.getElementById('nameForm');
formEl.addEventListener('submit', formHandler)

// Render avatar
Avatar.prototype.render = function () {
  // ctx.fillStyle = this.color; // this line was core code.
  legra.rectangle(this.x, this.y, this.width, this.height,{filled: true, color: this.color});
 
};

// Hazard constructor
function Hazard(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.visibility = false;
  this.color = color;
  allHazards.push(this);
}

var allHazards = [];

//==== DeadAlive Condition Method====//
Avatar.prototype.killAvatar = function () {
  for (var i = 0; i < allHazards.length; i++) {
    if (gamePiece.x === allHazards[i].x && gamePiece.y === allHazards[i].y) {
      gamePiece.dead = true;
      attempts++;
      //send attempt to local storage (prevent page reload cheaters)
      localStorage.setItem('attemptsToWin', attempts);
      console.log(attempts);
      // console.log('gamePiece dead: ', gamePiece.dead);
     
    }
  }
  if(gamePiece.dead === true){
    ignite(gamePiece.x, gamePiece.y);
    setTimeout(startGame, 5000);
  }
    
};

// Render hazard
Hazard.prototype.render = function () {
  // ctx.fillStyle = this.color; // this was core code.
  legra.rectangle(this.x, this.y, this.width, this.height,{filled: true, color: this.color});
};

//----------------------- CONTROLS DECLARATION BEGINNING  ---------------------------------------
Avatar.prototype.movementControl = function (e) {
  //TODO: REVISIT preventDefault();
  // left directional key
  if (e.keyCode == 37) {
    if (gamePiece.x > 0) {
      gamePiece.x -= unit;
      // console.log('left-directional');
      gamePiece.render();
    }
  }
  // up directional key
  if (e.keyCode == 38) {
    if (gamePiece.y > 0) {
      gamePiece.y -= unit;
      // console.log('up-directional');
      gamePiece.render();
    }
  }
  // right directional key
  if (e.keyCode == 39) {
    if (gamePiece.x < (arena.width - unit)) {
      gamePiece.x += unit;
      // console.log('right-directional');
      gamePiece.render();
    }
  }
  // down directional key
  if (e.keyCode == 40) {
    if (gamePiece.y < (arena.height - unit)) {
      gamePiece.y += unit;
      // console.log('down-directional');
      gamePiece.render();
    }
  }
};

//TODO: Create Winners Object.

function Prize(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.visibility = true;
  this.color = color;
}

Prize.prototype.render = function(){
  // ctx.fillStyle = this.color; // this was core code
  legra.rectangle(this.x, this.y, this.width, this.height,{filled: true, color: this.color});
};

Avatar.prototype.winnerSquare = function (e) {
  if (gamePiece.x === trophy.x && gamePiece.y === trophy.y) {
    attempts++;
    console.log('Winner you WIN!!!');

    localStorage.setItem('attemptsToWin', attempts);
    localStorage.setItem('playerName', gamePiece.name);
    //TODO: ADD RENDER TO TABLE FUNCTION BEFORE ZERO-ING OUT ATTEMPTS ON NEXT LINES. since attempts was being stored and referenced throughout, just use attempts as the number variable in the render function
    //Save data that we want in leaderboard.js (gamePiece.name and attempts);
    attempts = 0;
//TODO: Check to see if next line is still needed
    localStorage.setItem('attemptsToWin', attempts);
    // reset the gameboard
    
    window.location.href = "leaderboard.html";
  }
};

// retrieves data from localStorage to prevent page reload from zero-ing out the attempts counter
var checkForPreviousAttempts = function() {
  if(localStorage.getItem('attemptsToWin') > 0){
    attempts = localStorage.getItem('attemptsToWin');
  }
};

//!!! function below is used to set the game state to initial. it's purpose is to call all instantiations of objects and renders. this is called in multiple event handlers!!!//

//====== The start function===//
// Declares Avatar for assignment in Start function
var gamePiece;
//Declares Hazards for assignment in Start function
var mine;
var mine01;
var mine02;
var mine03;
var mine04;
var mine05;
var mine06;
var mine07;
var mine08;
var mine09;
var mine10;
// Declares prize for assignment in Start function
var trophy;

function startGame(){

  gamePiece = new Avatar('red', 'sally', 0,0);

  mine = new Hazard((unit * 4), (unit * 4), 'purple');
  mine01 = new Hazard(0, (unit * 7), 'orange');
  mine02 = new Hazard((unit * 7), (unit* 9), 'red')
  mine03 = new Hazard((unit * 3), (unit * 9), 'grey')
  mine04 = new Hazard ((unit), (unit * 3), 'brown');
  mine05 = new Hazard((unit * 9), (unit * 7), 'teal');
  mine06 = new Hazard((unit * 2), (unit * 5), 'cobalt');
  mine07 = new Hazard((unit * 5),(unit * 8), 'mediumseagreen');
  mine08 = new Hazard((unit * 6), (unit * 2), 'blanchedalmond');
  mine09 = new Hazard((unit * 8), 0, 'mediumseagreen');
  mine10 = new Hazard((unit * 7), (unit * 5), 'grey')

  trophy = new Prize((unit * 9), (unit * 9), 'goldenrod');

  // Calls background render from 8bit.js
  playMat();
  // render all game objects in order, player, hazard, trophy. 
  gamePiece.render();

  mine.render();
  mine01.render();
  mine02.render();
  mine03.render();
  mine04.render();
  mine05.render();
  mine06.render();
  mine07.render();
  mine08.render();
  mine09.render();
  mine10.render();

  trophy.render();
}
startGame();


//Win Condition event Listener
document.addEventListener('keydown', gamePiece.winnerSquare);

// add listener to instance of Hazard (mine).
document.addEventListener('keydown', gamePiece.movementControl, true);
document.addEventListener('keydown', gamePiece.killAvatar);

//retrieves attempts from page reloads that occured before winning
checkForPreviousAttempts();












