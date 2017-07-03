//MAGIC 8-BALL FINAL VERSION
$(document).ready(function() {
  var button = document.getElementById("questionButton")
  var eightBall = {};
  eightBall.answers = ["Yes!", "Maybe?!?", "You know, I don't know", "Ooh, that's complicated...", "Go for it!"];
  $("#answer").hide();


  //returns random answer from the array
  eightBall.askIt = function(question) {
    var rando = Math.random();
    var magic = rando * this.answers.length;
    var done = Math.floor(magic);
    var here = this.answers[done];
    $("#answer").fadeIn(1000);
    $("#answer").text(here);
    answer.style.color = "#f8f8f8";
    answer.style.fontWeight = "900";
    answer.style.textAlign = "center";
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  };

  //what happens when the "let's begin" button is clicked
  var ask8 = function() {
    $("#answer").hide(); //initially hides answer until after prompt is clicked
    $("#8ball").effect("shake", 500);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(function() { //needed to override prompt
      var question = prompt("Magic 8-Ball Says: Ask Me a Yes/No Question");
      $("#answer").hide();
      eightBall.askIt(question);

    });
  };

  $("#questionButton").click(ask8);

}); //JQuery END
