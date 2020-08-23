document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";
//get input
function getInput(){
    let century=parseInt(document.getElementsById("century").value);
    let year=parseInt(document.getElementsById("year").value);
    let month=parseInt(document.getElementsById("month").value);
    let date=parseInt(document.getElementsById("date").value);
    let error_message=document.getElementById("error_message");
    let text;
    
    error_message.style.padding="10px";

    if(isNan(century=="")){
        text="Input the correct century";
        error_message.innerHTML=text;
        return false;
    }else if(isNan(year=="")){
      text="Input the correct year";
      error_message.innerHTML=text;
      return false;
    }else if(isNan(month=="")){
      text="Input the correct month";
      error_message.innerHTML=text;
      return false;
    }else if(isNan(date=="")){
      text="Input the correct date";
      error_message.innerHTML=text;
      return false;
    }else{
       console.log("Fill in required details");//testing.
    }
}

//days,male names,female names
let dayOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames=["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

//calculate day
let date=new Date( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date)%7;
let dateOfBirth=(date.getDay);

function checkGender(){
  let gen1=document.getElementById(gen1);
  let gen2=document.getElementById(gen2);

  if(gen1.checked==true){
    document.getElementById("alert1").style.display="block";
    document.getElementById("span1").innerHTML=
    "Yay! Your were born on, "+dayOfWeek[dateOfBirth];
    document.getElementById("span2").innerHTML=
    "Your akan name is "+ maleNames[dateofBirth];
  }else if(gen2.checked==true){
    document.getElementById("alert1").style.display="block";
    document.getElementById("span1").innerHTML=
    "Yay! Your were born on, "+ dayOfWeek[dateOfBirth];
    document.getElementById("span2").innerHTML=
    "Your akan name is "+ femaleNames[dateOfBirth];
  }else{
    alert("Check valid gender");
  }

}

//refresh button
function refreshPage(){
    window.location.reload();
}






