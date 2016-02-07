var input = [];
var curIdx = 0;

$( ".btn" ).click(function(){
  input.push(this);
  if(input.length > 0){
    if($(input[curIdx-1]).attr("id") == "number"){
      alert($(input[curIdx]).text());
    }
  }
  else{
  if($(this).attr("id") == "number"){
    alert( $(input[curIdx]).text());
    curIdx++;
    }
  }
});