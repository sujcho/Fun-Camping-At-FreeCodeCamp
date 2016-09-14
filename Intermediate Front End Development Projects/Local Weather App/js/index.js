$(document).ready(function(){
  $.getJSON('https://freegeoip.net/json/',function(json){
      $("#city").html(json.city);
      $("#region").html(json.region_name);
      $("#country").html(json.country_name);
  });
});