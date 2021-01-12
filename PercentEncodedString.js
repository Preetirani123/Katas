const urlEncode = function(text) {
  let trimmedText = text.trim();
  let newText = "";
  for (let i = 0; i < trimmedText.length; i++){
    if (trimmedText[i] == " "){
      newText += "%20";
    }
    else newText += trimmedText[i];
  }

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));