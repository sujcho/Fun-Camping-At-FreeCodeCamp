var input = [];
var answer = 0;
var prevIsNumber = false;

$( ".btn" ).click(function(){
    var curInput = $(this).text();
    if($(this).attr("id") == "NUMBER"){
      if(!prevIsNumber){
      input.push(Number(curInput));
      prevIsNumber = true;
      $('#answer').text(curInput);
      }
      else{
        curInput += input.pop();
        input.push(Number(curInput));   
        $('#answer').text(curInput);
      }
    }
    else{
      prevIsNumber = false;
      if(curInput == "="){
        answer = input[0];
        for(var i = 1; i<input.length; i++){
          if(input[i] == "+"){
            answer += input[i+1];
          }
          if(input[i] == "-"){
            answer -= input[i+1];
          }         
        }
      $('#answer').text(answer);             
      }
      else if(curInput == "AC"){
        while (input.length > 0) {
        input.pop();
        }
      $('#answer').text("0");
      }
      else{
      input.push(curInput);
      }
    }
});