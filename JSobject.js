const urlDecode = function(text) {
  output = {};
  
  let newText1 = text.replace(/%20/g, " ");
  let newText2 = newText1.replace(/&/g, "=")
  let textArray = newText2.split('=')

  for (let i = 0; i < textArray.length; i = i+2){
    output[textArray[i]] = textArray [i+1]
  }
  return output;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
