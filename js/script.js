$("#shoot").click(function () {
  var outcome = Math.random();
  let userAnswer= $("#input").val();
  let computerAnswer= "";
  $("#userChoice").html(answer)


  
  if (outcome > .60) {
    $("#computerChoice").html("Rock");
    computerAnswer="Rock";
  } else if (outcome <.60 & outcome >.30) {
    $("#computerChoice").html("Paper");
    computerAnswer="Paper";
  } else {
    $("#computerChoice").html("Scissors");
    computerAnswer="Scissors";
  }

if (userAnswer === "rock" && computerAnswer=== "Paper") {
  $("#result").html("You lost!");
}
});


