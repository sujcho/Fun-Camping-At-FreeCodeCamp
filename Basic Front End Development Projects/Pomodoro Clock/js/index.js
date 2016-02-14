var breakLength = 5,
    beakTime = 5 * 60;
    sessionLength = 25,
    sessionTime = 25 * 60;
    initialSessionTime = 25* 60;
    fraction = 0;

var timer = null;

$(document).ready(function() {
   breakLength = 5;
   breakTime = breakLength * 60;
   sessionLength = 25;
   sessionTime = sessionLength * 60;
   initialSessionTime = sessionTime;
   displayTime(sessionTime);
   $('#progress').waterbubble({waterColor: '#E32817',txt: undefined, textColor:'#FFF', data: fraction});
 });


$('#blMinus').on('click', function () {
    breakLength--;
    if(breakLength < 0) breakLength = 0; 
    $('#bLength').text(breakLength);
    breakTime = breakLength * 60;
});

$('#blPlus').on('click', function () {
    breakLength++; 
    $('#bLength').text(breakLength);
    breakTime = breakLength * 60; 
});

$('#slMinus').on('click', function () {
    sessionLength--;
    if(sessionLength < 0) sessionLength = 0; 
    $('#sLength').text(sessionLength);
    sessionTime = sessionLength * 60;
    displayTime(sessionTime);
});

$('#slPlus').on('click', function () {
    sessionLength++; 
    $('#sLength').text(sessionLength);
    sessionTime = sessionLength * 60;
    displayTime(sessionTime);
});

$('#start').on('click',function(){
  displayTime(sessionTime);
  initialSessionTime = sessionTime;
  timer = setInterval(updateTime, 1000);
});

$('#pause').on('click',function(){
  clearInterval(timer);
});


function updateTime() {
  if(sessionTime < 0) 
    breakTime--;
    if(breakTime < 0)
    clearInterval(timer);
  else{
    displayTime(sessionTime);
    fraction = (initialSessionTime - sessionTime)/initialSessionTime;
    $('#progress').waterbubble(
      { waterColor: '#E32817',
        txt: Math.round(fraction * 100).toString() + '%', 
        wave: true,
        textColor:'#FFF',
        animation: false, 
        data: fraction});
    sessionTime--;
  }
}

function displayTime(time){
  var minutes = Math.floor(time/60);
  time -= minutes * 60;
  var seconds = time;
  $('#min').text(minutes);
  if(seconds > 0){
  $('#sec').text(':' + seconds);
  }
}