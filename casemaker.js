const camelCase = function(input) {
  splitString = input.split(" ");
  newString = splitString[0];
  
  for (let i = 1; i < splitString.length; i++){
    newString += (splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
  }

  return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));