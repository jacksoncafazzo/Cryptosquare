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

var breakString = function(removeSpaces) {
  var brokenString = [removeSpaces.slice(0, columnLength), ",", removeSpaces.slice(columnLength, (columnLength + columnLength))].join('');
}

  // var column1 = removeSpaces.slice(0, 4);
  // var column2 = removeSpaces.slice(4, 8);
  // var column3 = removeSpaces.slice(8, 12);
  // console.log(column1);
  // console.log(column2);
  // console.log();
  console.log(breakString);

breakString(removeSpaces, columnLength).join(',');
  console.log(breakString(removeSpaces, columnLength).join(','));



$(document).ready(function() {


    event.preventDefault();
  });
