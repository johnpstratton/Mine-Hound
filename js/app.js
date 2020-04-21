'use strict';
console.log('hello');

// Global const declaring units as fixed number of pixels (decide # later) height & width

const unit = 50;
var arena = document.getElementById('gameWindow');
var ctx = arena.getContext('2d');

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

// Creates new avatar from constructor
var gamePiece = new Avatar('red', 'sally', 0, 0);

// Hazard constructor
function Hazard(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = unit;
  this.height = unit;
  this.visibility = false;
  this.color = color;
}

// Render hazard
Hazard.prototype.render = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

// making a new Hazard object
var mine = new Hazard((unit * 4), (unit * 4), 'purple');

// Call to render avatar and hazard to page
gamePiece.render();
mine.render();

// basic function to move the avatar in one direction
Avatar.prototype.moveAvatar = function () {
  this.x += unit;
  this.y += unit;
  this.render();
};

// calls to move the avatar
gamePiece.moveAvatar();
gamePiece.moveAvatar();
