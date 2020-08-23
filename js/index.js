let century,year,month,date,day0fWeek;
//get input
function getInput(){
    century=parseInt(document.getElementsByName("century").value);
    year=parseInt(document.getElementsByName("year").value);
    month=parseInt(document.getElementsByName("month").value);
    date=parseInt(document.getElementsByName("date").value);

    if(century==""){
        alert("Input the correct century");
    }else if(year==""){
        alert("Input the correct year");
    }else if(month==""){
        alert("Input the correct month");
    }else if(date==""){
        alert("Input the correct date");
    }
}

//days,male names,female names
let dayOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames=["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

//calculate day
let day=new Date( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date)%7;


//call getDay method to store date
let dateOfBirth=day.getDay();



//refresh button
function refreshPage(){
    window.location.reload();
}






