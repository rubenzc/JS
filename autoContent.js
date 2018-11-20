//Automate for 1 day
function dateToEvaluate(){

    //Date format: ('Day/month/year 00:00')
    var start = new Date('11/23/2018');
    var today = new Date();

    //Compare today and selected day to show the content (hours, minutes, second, miliseconds)
    if(today.setHours(0,0,0,0) == start.setHours(0,0,0,0)){
        Mirai.query('.black-friday').css('display','block');
    } else {
        console.log("Today is not the Black Friday :)");
    }
}
dateToEvaluate();


//Automate for a date range
function dateToEvaluate(){

    //Date format: ('Day/month/year 00:00')
    var today = new Date();
    var start = new Date('11/23/2018');
    var end = new Date('11/25/2018');

    //Compare today and selected day to show the content (hours, minutes, second, miliseconds)
    if( (today.setHours(0,0,0,0) >= start.setHours(0,0,0,0)) && (today.setHours(0,0,0,0) <= end.setHours(0,0,0,0))){
        Mirai.query('.black-friday').css('display','block');
        console.log("Show!!");
    } else {
        console.log("Nope today!!");
    }
}
dateToEvaluate();