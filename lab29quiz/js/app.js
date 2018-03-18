var questions = [{
    title: 'What color is Squirtle?',
    answers: ['Blue', 'Red', 'Yellow', 'Purple'],
    correct: 0
  },
  {
    title: 'What color is Charmander?',
    answers: ['Blue', 'Red', 'Yellow', 'Purple'],
    correct: 1
  },
  {
    title: 'What color is Pickachu?',
    answers: ['Blue', 'Red', 'Yellow', 'Purple'],
    correct: 2
  },
  {
    title: 'What color is Ditto?',
    answers: ['Blue', 'Red', 'Yellow', 'Purple'],
    correct: 3
  }
];

var score = 0;
var currentQuestion = 0;
$(document).ready(function() {

  displayQuestion();
  $('ul').on('click', 'li', function(e) {
    $('.selected').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    $('a').addClass('ready');
  });

  $('a').click(function(e) {
    e.preventDefault();
    if ($(e.currentTarget).hasClass('ready')) {
      var guess = $('.selected').attr("id")
      checkAnswer(guess);

    } else if($(e.currentTarget).hasClass('restart')){
      currentQuestion = 0;
      score = 0;
      $(e.currentTarget).removeClass('restart').text('Submit Answer');
      displayQuestion();
    }else{
      alert('You must select an answer')
    }
  });

}); //questions END
function displayQuestion() {
  if (currentQuestion < questions.length) {
    updateScore();
    var question = questions[currentQuestion];
    $('h2').text(question.title);
    $('ul').html('');
    $('.ready').removeClass('ready');
    for (var i = 0; i < question.answers.length; i++) {
      question.answers[i]
      $('ul').append('<li id="' + i + '">' + question.answers[i] + '</li>');
    }
  }else{
    showSummary();
  }
}

function showSummary(){
  $('ul').html('');
  $('.ready').removeClass('ready').addClass('restart').text('Restart Quiz');
  $('h2').text('Congratulations! You scored ' + (score/questions.length)*100 + '%');
    $('.score span').text(score);
}

function checkAnswer(guess) {
  var question = questions[currentQuestion];
  if (question.correct == guess) {
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function updateScore() {
  $('.questions span').text((currentQuestion + 1) + '/' + questions.length);
  $('.score span').text(score);
}










// greeting('Kat');
