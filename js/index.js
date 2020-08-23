//get input
function getInput(){
    let century=(document.getElementsById("century").value);
    let year=(document.getElementsById("year").value);
    let month=(document.getElementsById("month").value);
    let date=(document.getElementsById("date").value);
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
function calculateDay(){
    ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date)%7;
}

function checkDayOfWeek(){
    getInput();
   let day = calculateDay();
     checkGender();
}

function checkGender(){
    document.getElementsByName("gender");
}

let gender=checkGender();{
    let gender="male";
    if (gender==true){
    let gender="female";
    }else if(gender==true){
    }else{
        console.log("You have to check which gender you are:)")
    }
}


switch(gender){
    case gender = "male":
          switch(day){
            case [0]:
              document.getElementsByName("button").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
            break;
            case [1]:
              document.getElementsByName("button").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
            break;
            case [2]:
              document.getElementsByName("buton").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
            break;
            case [3]:
              document.getElementsByName("button").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
            break;
            case [4]:
              document.getElementsByName("button").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
            break;
            case [5]:
              document.getElementsByName("button").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
            break;
            case [6]:
              document.getElementsByName("button").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
            break;
            default:
                console.log("No day for you:(");
          }
    break;
    case gender = "female":
            switch(day){
              case [0]:
                document.getElementsByName("button").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
              break;
              case [1]:
                document.getElementsByName("button").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
              break;
              case [2]:
                document.getElementsByName("button").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
              break;
              case [3]:
                document.getElementsByName("button").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
              break;
              case [4]:
                document.getElementsByName("button").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
              break;
              case [5]:
                document.getElementsByName("button").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
              break;
              case [6]:
                document.getElementsByName("button").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
              break;
              default:
                console.log("No day for you:(");

          }
    break;
    default:
        console.log("No day for you:(");
}

//refresh button
function refreshPage(){
    window.location.reload();
}






