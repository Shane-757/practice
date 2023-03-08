// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
    var splitStr = "";
    var result = "";

    splitStr = str.split(" ");
    for (var i = 0; i < splitStr.length; i++){
        if (i === 0) {
            result += splitStr[0].toLowerCase()
        } else {
 result += splitStr[i][0].toUpperCase() + 
   splitStr[i].slice(1);
        }

  }
  return result;
};
console.log(camelCase('This was not easy'));
