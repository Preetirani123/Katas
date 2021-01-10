function sumLargestNumbers(array){
  let sorted = array.sort(function(a, b){return b - a});
  return sorted[0] + sorted[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));