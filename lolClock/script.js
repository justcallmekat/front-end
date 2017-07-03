//LOLCAT CLOCK - FINAL
time = new Date().getHours();
var noon = 12;
var PM = 17;
var wakeUpTime = "Let's meditate shall we!";
var lunchTime = "Hmm, vegan chinese food time!";
var napTime = "Yay, break out the PJs!";
var partyTime = "Oh yeah, that's my song!";
var isPartyTime = false;
var messageText;
var catPix = document.getElementById("lolcat");
var timeEventJS = document.getElementById("timeEvent");
var fun = document.getElementById("partyTimeButton");
var selectAM = document.getElementById("wakeUpTimeSelector");
var selectLunch = document.getElementById("lunchTimeSelector");
var selectNap = document.getElementById("napTimeSelector");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"; //sets default image, like in JSON file


//UPDATE CLOCK WITH TIMES AND PICTURES
var updateClock = function() {

  if (time < noon) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = wakeUpTime;
  } else if (time == noon) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = lunchTime;
  } else if (time >= PM) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = napTime;
  } else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = partyTime;
  }
  //console.log(messageText);

  timeEventJS.innerText = messageText;
  catPix.src = image; //the getElementById variable(catPix) is assigned to image. The .src is needed to access the src="" property of the img element in the HTML document



  //SkillCrush - create clock
  var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
      meridian = "PM";
    }
    if (hours > noon) {
      hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };

  showCurrentTime();
};

//USER SET TIME
var wakeAM = function() {
  wakeUpTime = wakeUpTimeSelector.value;
  wakeUpTime = wakeUpTime.innerText = "You chose 0" + wakeUpTimeSelector.value + "00, Ten-hut!";
};

var eatPM = function() {
  lunchTime = lunchTimeSelector.value;
  lunchTime = lunchTime.innerText = "You chose " + lunchTimeSelector.value + "00, Ten-hut!";

};

var napPM = function() {
  napTime = napTimeSelector.value;
  napTime = napTime.innerText = "You chose " + napTimeSelector.value + "00, Ten-hut!"; //added because just showing the value would've been confusing for a user--know there's a better way to do this...??
};


//SkillCrush - toggle button
var partyEvent = function() {

  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
    partyTimeButton.style.border = "8px double #f9f9f9";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY OVER";
    partyTimeButton.style.backgroundColor = "#0A8DAc";
  }
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//EVENTLISTENERS

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeAM);
lunchTimeSelector.addEventListener('change', eatPM);
napTimeSelector.addEventListener('change', napPM);
