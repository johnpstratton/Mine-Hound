'use strict';
console.log('hello');

// import {legra} from 'https://unpkg.com/legra?browser';

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

Avatar.prototype.winnerSquare = function () {
  if (gamePiece.x === trophy.x && gamePiece.y === trophy.y) {
    attempts++;
    console.log('Winner you WIN!!!');
    //TODO: ADD RENDER TO TABLE FUNCTION BEFORE ZERO-ING OUT ATTEMPTS ON NEXT LINES. since attempts was being stored and referenced throughout, just use attempts as the number variable in the render function

    var playerWinner = new Winners(gamePiece.name, attempts);
    playerWinner.renderTable();

    attempts = 0;
    localStorage.setItem('attemptsToWin', attempts);
  }
};
// retrieves data from localStorage to prevent page reload from zero-ing out the attempts counter
var checkForPreviousAttempts = function() {
  if(localStorage.getItem('attemptsToWin') > 0){
    attempts = localStorage.getItem('attemptsToWin');
  }
};

// Calls background render from 8bit.js
playMat();

// Creates new avatar from constructor
var gamePiece = new Avatar('red', 'sally', 0, 0);

// making a new Hazard object
var mine = new Hazard((unit * 4), (unit * 4), 'purple');
var mine01 = new Hazard((unit * 3), (unit * 7), 'orange');
var mine03 = new Hazard((unit * 6), (unit * 2), 'blue');

// winner square, the trophy
var trophy = new Prize((unit * 9), (unit * 9), 'goldenrod');
document.addEventListener('keydown', gamePiece.winnerSquare);

// add listener to instance of Hazard (mine).
document.addEventListener('keydown', gamePiece.movementControl, true);
document.addEventListener('keydown', gamePiece.killAvatar);

//retrieves attempts from page reloads that occured before winning
checkForPreviousAttempts();

// Call to render avatar, hazards, trophy to page
gamePiece.render();

mine.render();
mine01.render();
mine03.render();

trophy.render();




var playerWinner = new Winners(gamePiece.name, attempts);

playerWinner.renderTable();





