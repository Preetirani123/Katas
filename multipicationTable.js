const multiplicationTable = function(maxValue) {
 
  let array1 = "";

  for ( let i = 1 ; i <= maxValue; i++){
    let array2 = "";

    for (let j = 1 ; j <= maxValue; j++){
      array2 = array2 + i*j + " ";
    }

    array1 = array1 + array2 + '\n'
    
  }
  
  return array1;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));