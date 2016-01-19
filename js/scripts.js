
var characterLength = function(message) {
  return message.length;
}

var areSpaces = function(message) {
  return message.indexOf(' ') >= 0;
}

var removeSpaces = function(message) {
  return message.replace(/\s+/g, "");
  }


// $(document).ready(function() {
//
//
//     event.preventDefault();
//   });
