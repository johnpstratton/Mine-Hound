
function Winners(name, score) {
  this.name = name;
  this.score = score;
  allWinners.push(this);
};

var allWinners = [];
// console.log(this.allWinners);

Winners.prototype.renderTable = function () {
  var leaderboardTable = document.getElementById('leaderboard');
  for (var i = 0; i < 1; i++) {
    var newTRow = document.createElement('tr');
    var newTd = document.createElement('td');
    newTd.textContent = this.name;
    newTRow.appendChild(newTd);
    leaderboardTable.appendChild(newTRow);
  }
  for (var i = 0; i < 1; i++) {
    var newTRow = document.createElement('tr');
    var newTd = document.createElement('td');
    newTd.textContent = this.score;
    newTRow.appendChild(newTd);
    leaderboardTable.appendChild(newTRow);
  }
};

var topWinner = new Winners('jimbob', 1);
topWinner.renderTable();
var midWinner = new Winners('Tim', 8);
midWinner.renderTable();
var lowWinner = new Winners('Loser', 324);
lowWinner.renderTable();

var playerName = localStorage.getItem('playerName');
//FIXME: this might be the stacking issue. attempts is declared already in app.js by reseting it here it may be what's causing the issue. 
var attempts = localStorage.getItem('attemptsToWin');

if (playerName) {
  var playerWinner = new Winners(playerName, attempts);
  playerWinner.renderTable();
}
