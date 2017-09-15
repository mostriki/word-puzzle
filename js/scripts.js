
function puzzle(input){
  input = input.toLowerCase().split("");
  var vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  var result = []

  for(i=0; i < input.length; i++) {
    for(j=0; j < vowel.length ; j++){
      if (input[i] === vowel[j]) {
        input[i] = "-"
      }
    }

    result.push(input[i]);
  }
  console.log(result);
  return result
}

$(document).ready(function() {
  $("form#userPuzzle").submit(function(event) {
    event.preventDefault();

    var quote = $("#quote").val();
    var output = puzzle(quote).join('')

    $('ul#output').append('<li>' + output + '</li>');

  });
});










//   var string =

//
//   var result = sring.replace(vowel);
//
// if (string === vowel) {
//   .replace("-");
//
// }
