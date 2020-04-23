'use strict';
console.log('hello');


var arena = document.getElementById('gameWindow');
var ctx = arena.getContext('2d');
var legra = new legra(ctx, 10, {color: 'yellow'});
legra.ctx = ctx;
const unit = 5; // height and width of game "tile";

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
  console.log(event);
  playerName = event.target.name.value;
localStorage.setItem('playerName', playerName);
}

var formEl = document.getElementById('nameForm');
formEl.addEventListener('submit', formHandler);

// Render avatar
Avatar.prototype.render = function () {
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
    }
    console.log(localStorage.getItem('attemptsToWin'));
  }
  if(gamePiece.dead === true){
    ignite(gamePiece.x, gamePiece.y);
    setTimeout(startGame, 3000);
  }
};

// Render hazard
Hazard.prototype.render = function () {
  legra.rectangle(this.x, this.y, this.width, this.height,{filled: true, color: this.color});
};

//----------------------- CONTROLS DECLARATION BEGINNING  ---------------------------------------
Avatar.prototype.movementControl = function (e) {
  // left directional key
  if (e.keyCode == 37) {
    if (gamePiece.x > 0) {
      gamePiece.x -= unit;
      gamePiece.render();
    }
  }
  // up directional key
  if (e.keyCode == 38) {
    if (gamePiece.y > 0) {
      gamePiece.y -= unit;
      gamePiece.render();
    }
  }
  // right directional key
  if (e.keyCode == 39) {
    if (gamePiece.x < ((arena.width/10) - unit)) {
      gamePiece.x += unit;
      gamePiece.render();
    }
  }
  // down directional key
  if (e.keyCode == 40) {
    if (gamePiece.y < ((arena.height/10) - unit)) {
      gamePiece.y += unit;
      gamePiece.render();
    }
  }
};

// Winners Object.

function Prize(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.visibility = true;
  this.color = color;
}

Prize.prototype.render = function(){
  legra.rectangle(this.x, this.y, this.width, this.height,{filled: true, color: this.color});
};

Avatar.prototype.winnerSquare = function (e) {
  if (gamePiece.x === trophy.x && gamePiece.y === trophy.y) {
    attempts++;

    localStorage.setItem('attemptsToWin', attempts);
    localStorage.setItem('playerName', playerName);
    // reset the gameboard    
    youWin();
    // attempted to set a delay so that they could see the animation but ultimately everything is working in terms of MVP. 
    setTimeout((window.location.href = "leaderboard.html"), 5000);
  }
};

// retrieves data from localStorage to prevent page reload from zero-ing out the attempts counter
var checkForPreviousAttempts = function() {
  if(localStorage.getItem('attemptsToWin') > 0){
    attempts = localStorage.getItem('attemptsToWin');
  }
};


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

  allHazards = [];

  mine = new Hazard((unit * 4), (unit * 4), '#00cbff');
  mine01 = new Hazard(0, (unit * 7), '#00cbff');
  mine02 = new Hazard((unit * 7), (unit* 9), '#00cbff');
  mine03 = new Hazard((unit * 3), (unit * 9), '#00cbff');
  mine04 = new Hazard ((unit), (unit * 3), '#00cbff');
  mine05 = new Hazard((unit * 9), (unit * 7), '#00cbff');
  mine06 = new Hazard((unit * 2), (unit * 5), '#00cbff');
  mine07 = new Hazard((unit * 5),(unit * 8), '#00cbff');
  mine08 = new Hazard((unit * 6), (unit * 2), '#00cbff');
  mine09 = new Hazard((unit * 8), 0, '#00cbff');
  mine10 = new Hazard((unit * 7), (unit * 5), '#00cbff');

  trophy = new Prize((unit * 9), (unit * 9), 'goldenrod');

  // render all game objects in order: hazards, gameboard, trophy, player
  
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
  
  // Calls background render from 8bit.js
  playMat();
  trophy.render();
  gamePiece.render();
}
startGame();


//Win Condition event Listener
document.addEventListener('keydown', gamePiece.winnerSquare);

// add listener to instance of Hazard (mine).
document.addEventListener('keydown', gamePiece.movementControl, true);
document.addEventListener('keydown', gamePiece.killAvatar);

//retrieves attempts from page reloads that occured before winning
checkForPreviousAttempts();












