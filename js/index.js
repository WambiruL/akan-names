var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function calculateDayValue(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function validate() {
  var gender = document.getElementsByName("gender");
  if( document.inputForm.year.value == "" || document.inputForm.year.value.length !=4 || document.inputForm.year.value >2100 || document.inputForm.year.value <=1900) {
     alert( "enter valid year" );
     document.inputForm.year.focus() ;
     //Give focus to an html element. Does not accept any parameters and does not return any value.
     return false;
  }
  else if( document.inputForm.month.value == "" || isNaN( document.inputForm.month.value ) ||
  document.inputForm.month.value.length != 2 || document.inputForm.month.value > 12  || document.inputForm.month.value <= 0){
     alert( "Enter valid month" );
     document.inputForm.month.focus() ;
     return false;
  }
  else if( document.inputForm.date.value == "" || isNaN( document.inputForm.month.value ) ||
  document.inputForm.month.value.length != 2|| document.inputForm.date.value > 31 || document.inputForm.date.value <= 0) {
     alert( "Enter valid date" );
     document.inputForm.day.focus() ;
     return false;
  }
  else if(gender[0].checked==false && gender[1].checked==false ) {
      alert("select male or female");
      return false;
  }
  else{
    return true ;
  }
}
function getName(){
  dayValue = calculateDayValue();
  checkGender();
}

function checkGender(){
  var gender = document.getElementsByName("gender");
  if(gender[0].checked == true){
    var gender = "male";
  }else if(gender[1].checked == true){
    var gender = "female";
  }else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 0){
        ("Yay! You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
      }
      else if(dayValue == 1){
        alert("Yay! You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
      }
      else if(dayValue == 2){
        alert("Yay! You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
      }
      else if(dayValue == 3){
        alert("Yay! You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
      }
      else if(dayValue == 4){
        alert("Yay! You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
      }
      else if(dayValue == 5){
        alert("Yay! You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
      }
      else if(dayValue == 6){
        alert("Yay! You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
      }
    break;
    case "female":
      if (dayValue == 0){
        alert("Great! You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]+"!");
      }
      else if(dayValue == 1){
        alert("Great! You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]+"!");
      }
      else if(dayValue == 2){
        alert("Great! You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]+"!");
      }
      else if(dayValue == 3){
        alert("Great! You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]+"!");
      }
      else if(dayValue == 4){
        alert("Great! You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]+"!");
      }
      else if(dayValue == 5){
        alert("Great! You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]+"!");
      }else if(dayValue == 6){
        alert("Great! You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]+"!");
      }
    break
    default:
  }
}

function refreshPage(){
  window.location.reload;
}