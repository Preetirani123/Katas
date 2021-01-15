const makeCase = function(input, name) {
  splitString = input.split(" ");
  

    if (name == "camel"){
    newString = splitString[0];
      for (let i = 1; i < splitString.length; i++){
        newString += (splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
      }
      return newString;
    }

  else if (name == "pascal"){
    newString = [];
      for (let i = 0; i < splitString.length; i++){
        newString += (splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
      }
    return newString;
  }

  else if (name == "snake"){
    newString = input.replace(/\s/g, '_')
    return newString;
  }

  else if (name == "kebab"){
    newString = input.replace(/\s/g, '-')
    return newString;
  }

  else if (name == "title"){
    newString = [];
    for (let i = 0; i < splitString.length; i++){
      newString += (splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)+ " ");
    }
    return newString;
  }

  else if (name == "vowel"){
    newString = [];
    for (let i = 0; i < input.length; i++){
      if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o'|| input[i] == 'u'){
        newString += input[i].toUpperCase();
      }
      else {
          newString += input[i];
      }
    }
    return newString;
  }

  else if (name == "consonant"){
    newString = [];
    for (let i = 0; i < input.length; i++){
      if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o'|| input[i] == 'u'){
        newString += input[i];
      }
      else {
        newString += input[i].toUpperCase();
      }
    }
    return newString;
  }

  else if (name == "upper"){
    newString = [];
    for (let i = 0; i < input.length; i++){
        newString += input[i].toUpperCase();
      }
    
    return newString;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));