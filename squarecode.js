const squareCode = function(message) {
  let newMessage = "";
  for (i = 0; i < message.length; i++){
    if (message[i] != " "){
      newMessage += message[i]
    }
  }
  let value = Math.ceil(Math.sqrt(newMessage.length))

  let output = "";
  
  for (j = 0; j < value ; j++){
    for (k = j; k < newMessage.length ; k = k+value){
      output = output + newMessage[k];
    }
    output += " ";
  }
  return output.trim();
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));