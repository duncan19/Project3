//back end
var romanNumber = [];


function toRoman(inputNumber) {
  for (var i = inputNumber; i >= 0 ; i+=0) {
    console.log(i);
    if (i = 3) {
      romanNumber.push("i'm sorry, Dave I'm afraid I can't do that.");
      var i = (i - 1);
        var inputNumber = i;
    } else if (i = 2) {
      romanNumber.push("Boop!");
      var i = (i - 1);
        var inputNumber = i;
    } else if (i = 1) {
      romanNumber.push("Beep!");
      var i = (i-1);
        var inputNumber = i;
      } else {
      romanNumber.push(i);
      var i = (i-1);
        var inputNumber = i;
      }
    }
  }

  //front end
$(document).ready(function(){
  $("form#numberForm").submit(function(){
    event.preventDefault();
    var inputNumber = parseInt($("input[name=numberInput]").val());
    toRoman(inputNumber);
    romanNumber = romanNumber.join("")

    console.log(romanNumber);
    $("p#results").text(romanNumber);
  });
});
