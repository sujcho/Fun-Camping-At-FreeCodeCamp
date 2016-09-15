var app_id = '&APPID='+'942f5f77f243a4c6059a46b5523bc3e1';
var openweather = 'api.openweathermap.org/data/2.5/weather?';
$(document).ready(function(){
     var loc = ajax_getLocInfo();
     var lat = 'lat=' + String(loc.latitude);
     var lon = '&lon=' + String(loc.longitude);
     var url = openweather + lat + lon + app_id;
    // ajax_getWeatherInfo(url);
  /*
   $('#weather').text('add');
    $.getJSON(url, function(data){
      $('#weather').text('add');
      $("#weather").html(JSON.stringify(data));
    })
    */
});

function getLocInfo(){
     $.getJSON('https://freegeoip.net/json/',function(json){
    //  $("#message").html(JSON.stringify(json));
      $("#city").html(json.city);
      $("#region").html(json.region_name);
      $("#country").html(json.country_name);
    });
}

function ajax_getLocInfo(){
  var global ={};
  $.ajax({
    async: false,
    url:'https://freegeoip.net/json/',
    success: function(json){
     // $("#message").html(JSON.stringify(json));
      global = json;
      $("city").html(json.city);
      $("#region").html(json.region_name);
      $("#country").html(json.country_name);
      var lat = 'lat=' + String(json.latitude);
      var lon = '&lon=' + String(json.longitude);
      var url = openweather + lat + lon + app_id;
      ajax_getWeatherInfo(url);
    }
  });
  return global;
}


function ajax_getWeatherInfo(url){
  $.ajax({
    async: false,
    url:url,
    success: function(json){
      alert('test');
      $("#weather").html(json.weather);
    }
  });
}
