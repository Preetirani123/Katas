
let chessboard = [];

const generatedBoard = function(whiteQueen, blackQueen) {
  for (i = 0; i < 8; i++){
    let row = [];
    
    for (j = 0; j < 8; j++){
      row.push(0);
    }

    chessboard.push(row)
  }
  chessboard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessboard[blackQueen[0]][blackQueen[1]] = 1;
  return chessboard;
}

const queenThreat = function(chessboard){
  if ((whiteQueen[0] == blackQueen[0]) || (whiteQueen[1] == blackQueen[1])){
    return true;
  }
  
  if (Math.abs(whiteQueen[0] - blackQueen[0]) == Math.abs(whiteQueen[1] - blackQueen[1])){
    return true;
  }
  
  else {
    return false;
  }
  
}

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// console.log(generatedBoard(whiteQueen, blackQueen));
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
console.log(generatedBoard(whiteQueen, blackQueen));
console.log(queenThreat(generatedBoard));