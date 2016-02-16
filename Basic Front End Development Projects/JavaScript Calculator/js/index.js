var input = [];
var answer = 0;
var prevIsNumber = false;

$( ".btn" ).click(function(){
  var curInput = $(this).text();
  var prevInput = 0;
  //If a number comes in as input,
  if($(this).attr("id") == "NUMBER"){
    //if there is no number pressed right before,
    if(!prevIsNumber){
      //push this number to input
      input.push(Number(curInput));
      //show this number on panel
      $('#answer').text(curInput);
    }
    else{
      //If number pressed right before, add this number as additional digit.
      prevInput = input.pop();
      prevInput += curInput;
      //store whole number to input
      input.push(Number(prevInput));
      //show the whole number
      $('#answer').text(prevInput);   
    }

    //now, there is number so prev is no loger true for the next number
    prevIsNumber = true;    
  }
  //if number is not pressed,
  else{   
    if(curInput == "="){
      answer = input[0];
      for(var i = 1; i<input.length; i++){
        if(input[i] == "+"){
          answer += input[i+1];
        }
        if(input[i] == "-"){
          answer -= input[i+1];
        }         
        if(input[i] == "/"){
          answer= answer / input[i+1];
        }
        if(input[i] == "%"){
          answer %= input[i+1];
        }
        if(input[i] == "X"){
          answer *= input[i+1];
        }     
      }
      $('#answer').text(answer);    
    }
    else if(curInput == "."){
      if(!prevIsNumber){
        input.push("0.");
      }
      else{
        prevInput = input.pop();
        prevInput += ".";
        input.push(prevInput);  
        $('#answer').text(prevInput);
      }
      prevIsNumber = true;
    }
    else if(curInput == "AC"){
      while (input.length > 0) {
        input.pop();
      }
      $('#answer').text("0");
      //sign is pressed, so not a number.
      prevIsNumber = false;
    }
    else if(curInput == "CE"){
      $('#answer').text("0");
      prevIsNumber = false;
    }
    //for all other operators, push it to input.
    else{
      input.push(curInput);
      //operator is pressed, so not a number. 
      prevIsNumber = false;      
    }
  }
});