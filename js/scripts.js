var areSpaces = function(message) {
  var areSpaces = message.indexOf(' ') >= 0;
  return areSpaces
}

debugger

var removeSpaces = function(message) {
  var removeSpaces = message.replace(/\s+/g, "");
  return removeSpaces
}

var characterLength = function(removeSpaces) {
  var characterLength = removeSpaces.length;
  return characterLength
}

var columnLength = function(characterLength) {
  var columnLength = Math.ceil(Math.sqrt(characterLength));
  return columnLength
}

var cryptoArray = function(removeSpaces) {
  var cryptoArray = removeSpaces.split("");
  return cryptoArray
}


$(document).ready(function() {


    event.preventDefault();
  });
