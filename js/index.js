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

