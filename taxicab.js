const blocksAway = function(directions) {
  let final = {east: 0, north: 0};

  for (let i = 0; i < directions.length; i = i+2){
    if (i % 4 == 0){
      if (directions[i] == 'right'){
        final.east += directions[i+1];
      }
      else {
        final.east -= directions[i+1];
      }
    }
    
    else {
      if (((directions[i-2] == 'right') && (directions[i] == 'right')) || ((directions[i-2] == 'left') && (directions[i] == 'left'))){
        final.north -= directions[i+1];
      }
      else {
        final.north += directions[i+1];
      }
    }
  }

  final.east = Math.abs(final.east);
  final.north= Math.abs(final.north);
  
  return final;

};



console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));