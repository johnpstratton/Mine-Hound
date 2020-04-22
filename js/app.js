'use strict';
console.log('hello');

const unit = 50; // hieght and width of game "tile";
var arena = document.getElementById('gameWindow');
var ctx = arena.getContext('2d');
//TODO: track total attempts


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
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
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

Avatar.prototype.killAvatar = function(){
  for(var i = 0; i < allHazards.length; i++){
    if(gamePiece.x === allHazards[i].x && gamePiece.y === allHazards[i].y){
      gamePiece.dead = true;
      console.log('gamePiece: ' , gamePiece.dead);
    }
  }
}

// Render hazard
Hazard.prototype.render = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

//----------------------- CONTROLS DECLARATION BEGINNING  ---------------------------------------
Avatar.prototype.movementControl = function (e) {
  //TODO: REVISIT preventDefault() 
  // left directional key
  if (e.keyCode == 37) {
    if (gamePiece.x > 0) {
      gamePiece.x -= unit;
      console.log('left-directional');
      gamePiece.render();
    }
  }
  // up directional key
  if (e.keyCode == 38) {
    if (gamePiece.y > 0) {
      gamePiece.y -= unit;
      console.log('up-directional');
      gamePiece.render();
    }
  }
  // right directional key
  if (e.keyCode == 39) {
    if (gamePiece.x < (arena.width - unit)) {
      gamePiece.x += unit;
      console.log('right-directional');
      gamePiece.render();
    }
  }
  // down directional key
  if (e.keyCode == 40) {
    if (gamePiece.y < (arena.height - unit)) {
      gamePiece.y += unit;
      console.log('down-directional');
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
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

Avatar.prototype.winnerSquare = function(){
 
    if(gamePiece.x === trophy.x && gamePiece.y === trophy.y){      
      console.log('Winner you WIN!!!');
    }
}


// Creates new avatar from constructor
var gamePiece = new Avatar('red', 'sally', 0, 0);

// making a new Hazard object
var mine = new Hazard((unit * 4), (unit * 4), 'purple');
var mine01 = new Hazard((unit * 3), (unit * 7), 'orange');
var mine03 = new Hazard((unit * 6), (unit * 2), 'blue');


var trophy = new Prize((unit * 9), (unit * 9), 'goldenrod');
document.addEventListener('keydown', gamePiece.winnerSquare);

// add listener to instance of Hazard (mine). 
document.addEventListener('keydown', gamePiece.movementControl, true);
document.addEventListener('keydown', gamePiece.killAvatar);



// Call to render avatar and hazard to page
gamePiece.render();
mine.render();
mine01.render();
mine03.render();

trophy.render();










