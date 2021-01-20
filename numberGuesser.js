let secretNum = Math.floor(Math.random()*100)
let answer ;
let guess = [];

let prompt = require("prompt-sync")({sigint: true});


while (answer != secretNum){
  
  let answer = prompt("Guess a number between 1-100: ");
  console.log("> " + answer)
  
  if (guess.includes(answer)) {
    console.log('Already guessed!');
    continue;
    
  } else if (!isNaN(answer)) {
    guess.push(answer);
  }

  if (answer > secretNum){
    if (answer > 100){
      console.log("Guessed number is over 100");
    }
    else{
      console.log("Too High!")
    } 
  }

  else if (answer < secretNum){
    if (answer < 1){
      console.log("Guessed number is below 1");
    }
    else{
      console.log("Too Low!")
    } 
   }

  else if (isNaN(answer)){
    console.log("Not a number! Try again!")
  }

  else{
    console.log("You got it! you took " + guess.length + " attempts")
    break;
  }

}


