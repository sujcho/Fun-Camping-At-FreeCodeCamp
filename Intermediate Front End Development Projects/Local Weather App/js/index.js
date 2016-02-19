if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
    $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}

$(document).ready(function(){
$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=Montpellier&mode=json&units=metric&cnt=10",function(result){
    alert("City: "+result.city.name);
    alert("Weather: "+ result.list[0].weather[0].description);
    });
});