var areSpaces = function(message) {
  return message.indexOf(' ') >= 0;
}

var removeSpaces = function(message) {
  return message.replace(/\s+/g, "");
}

var characterLength = function(removeSpaces) {
  return removeSpaces.length;
}

var columnLength = function(characterLength) {
  return Math.ceil(Math.sqrt(characterLength));
}


// $(document).ready(function() {
//
//
//     event.preventDefault();
//   });
