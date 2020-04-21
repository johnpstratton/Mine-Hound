'use strict';
console.log('hello');

// Global const declaring units as fixed number of pixels (decide # later) height & width

const unit = 50;
var arena = document.getElementById('gameWindow');
var ctx = arena.getContext('2d');
//TODO: track total attempts


// Canvas - target through DOM manipulation
// declare context var and assign it value of 2d
// target via id
// renders to page

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



//TODO: array to hold Hazard objects

// Hazard constructor
function Hazard(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.visibility = false;
  this.color = color;
}
// TODO: listener (listens for keyup), if it hears it, then the TODO: handler (global function), will check to see if Avatar is same location as Hazard, and if Yes, then boolean this.dead = true
//TODO: MOB PROGRAM - attach the listern to he handler

// Render hazard
Hazard.prototype.render = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};




// TODO: method to assign key stoke to moveAvatar function - eventPotato.preventDefault();  * when key is up ... keyup
// event handler for each keyup passes in the appropriate values to the moveAvatar function as arguments

// ONLY keyup TODO is allowed to modify moveAvatar();
// basic function to move the avatar in one direction
// Avatar.prototype.moveAvatar = function () {
//   this.x += unit;
//   this.y += unit;
//   this.render();
// };



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

  // Creates new avatar from constructor
  var gamePiece = new Avatar('red', 'sally', 0, 0);


  // making a new Hazard object
  var mine = new Hazard((unit * 4), (unit * 4), 'purple');

  document.addEventListener('keydown', gamePiece.movementControl, true);
  // document.addEventListener('keydown', console.log, true);

  // Call to render avatar and hazard to page
  gamePiece.render();
  mine.render();

// calls to move the avatar
// gamePiece.moveAvatar();
// gamePiece.moveAvatar();









