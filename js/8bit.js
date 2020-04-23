'use strict';

//childOf: Global variables used from: app.js listed below
/* 
Var gamePiece (the instance of avatar)
Var mine - mine03 (instances of Hazard)
Var trophy (instance of Prize)

*/
// var arena = document.getElementById('gameWindow');
// var ctx = arena.getContext('2d');
// var legra = new legra(ctx, 10, {color: 'yellow'});
// legra.ctx = ctx;
// const unit = 5; // hieght and width of game "tile";


//TODO: [x] Link 8bit.js to index.html below the app.js<script>
//TODO: [x] function to render background of canvas

function playMat(){
  legra.rectangle(0, 0, (unit * 10), (unit * 10), {filled: true, color: '#00cbff'});

}

//TODO: [] OPTIONAL: incorporate gradients into bacground 
//TODO: [x] call function in app.js (before all other function calls)
//TODO: [] function to render avatar as a defined character childOf: the render function and called within it: 

//TODO: [x] Declare a Reset function that sets the board back to zero. 

//TODO: [x] Animate Death result.
   


//TODO: [x]intitial polygon 'black'
//TODO: [x] layer two, use intial add 1 to ea.coord for outside points -1 to ea.coord for inside point. !!! remember to change the starting coords to use object.notation referencing avatar current pos. 

//!!! when called be sure to pass in the object coords for "x" and "y"
function ignite(x, y){
  
  legra.polygon([
    [(x + 2),(y + 2)],
    [(x - 1),(y - 2)],
    [(x - 1),(y + 1)],
    [(x - 3),(y + 2)],
    [x, (y + 3)],
    [(x - 1), (y + 8)],
    [(x + 2), (y + 3)],
    [(x + 5), (y + 8)],
    [(x + 4), (y + 3)], 
    [(x + 7), (y + 2)],
    [(x + 4), (y + 2)], 
    [(x + 6), (y - 2)]
  ],{filled: true});
  
  legra.polygon([
    [(x + 2),(y + 2)],
    [(x - 3),(y - 1)],
    [(x - 1),(y + 1)],
    // [(x - 3),(y + 2)],
    [x, (y + 3)],
    [(x - 1), (y + 8)],
    [(x + 2), (y + 3)],
    [(x + 2), (y + 8)],
    [(x + 4), (y + 1)], 
    [(x + 7), (y + 2)],
    [(x + 4), (y + 2)], 
    [(x + 2), (y - 4)]
  ],{filled: true, color: 'orange'});

  legra.polygon([
    [(x + 2),(y + 2)],
    [(x - 3),(y - 1)],
    [(x - 1),(y + 1)],
    [(x - 4),(y + 4)],
    [(x -1), (y + 2)],
    [x, (y + 3)], 
    [(x + 2), (y + 6)],
    [(x + 2), ( y + 2)],
    [(x + 4), (y + 8)],
    [(x + 2), (y + 2)],
    [(x + 5), (y - 2)],
    [x, y]

  ],{filled: false, color: 'red'});

  legra.rectangle((x + 2), (y + 2), 2, 2,{filled: true, color: 'black'});
  
}


function youWin(){
  var colorArr = ['goldenrod', 'cobalt', 'green', 'red'];
  //for-loop cycles through allHazards using [i] and calls 
  //celebrate() on a setTimeOut passing in allHazards[i].x and allHazards[i].y as arguments. 
  //TODO: Call in the winnerSquare event handler
  setTimeout(legra.rectangle())
}
