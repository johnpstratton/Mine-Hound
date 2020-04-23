'use strict';

function playMat(){
  legra.rectangle(0, 0, (unit * 10), (unit * 10), {filled: true, color: '#00cbff'});

}

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
  var colorArr = ['goldenrod', 'blue', 'green', 'red']; 
  for(var i = 0; i < allHazards.length; i++){
      var y = allHazards[i].y;
      var x = allHazards[i].x;
      setTimeout(legra.rectangle((x + 2), (y + 2), unit, unit,{filled: false, color: colorArr[0]}), 1000);
      setTimeout(legra.rectangle((x - 2), (y - 2), (unit + 3), (unit + 3),{filled: false, color: colorArr[1]}), 4000);
      setTimeout(legra.rectangle((x - 3), (y + 1), (unit + 6), (unit + 6),{filled: false, color: colorArr[2]}), 7000);
      setTimeout(legra.rectangle(x, (y - 5), (unit + 6), (unit + 6),{filled: false, color: colorArr[3]}), 10000);
  }
}
