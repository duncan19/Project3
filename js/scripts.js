//back end
var listofnumbers = [];


function toList(inputNumber) {
  for (var i = inputNumber; i >= 0 ; i+=0) {
    console.log(i);
    if (i = 3) {
      listofnumbers.push("i'm sorry, Dave I'm afraid I can't do that.");
      var i = (i - 1);
        var inputNumber = i;
    } else if (i = 2) {
      listofnumbers.push("Boop!");
      var i = (i - 1);
        var inputNumber = i;
    } else if (i = 1) {
      listofnumbers.push("Beep!");
      var i = (i-1);
        var inputNumber = i;
      } else {
      listofnumbers.push(i);
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
    toList(inputNumber);
    listofnumbers = listofnumbers.join("")

    console.log(listofnumbers);
    $("p#results").text(listofnumbers);
  });
});
