//////// BASIC ////////

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

//////// COMPLETE ////////

//Automate for 1 day
//If date is Ok we can show the content
function showContent() {
    Mirai.query('.black-friday').css('display','block');
  }

function isToday(myDate) {
    //Date format: ('Day/month/year 00:00')
    var startDate = myDate;
    var today = new Date();
    
    //Compare today and selected day to show the content (hours, minutes, second, miliseconds)
    if(today.setHours(0,0,0,0) === startDate.setHours(0,0,0,0)){
        return true;    
    } else {
        return false;
    }
}

function showPopupOneDay(dateToEvaluate) {
    
    var date = isToday(new Date(dateToEvaluate))
    console.log(date);
    if (date){
        showContent();
    }else{
        console.log('nope');
    }
}
var dateToEvaluate = new Date('11/16/2018');
showPopupOneDay(dateToEvaluate);


// Automate for range days
//If date is Ok we can show the content
function showContent() {
    Mirai.query('.black-friday').css('display','block');
}

function datesToEvaluate(start, end){

    var today = new Date();

    if( (today.setHours(0,0,0,0) >= start.setHours(0,0,0,0)) && (today.setHours(0,0,0,0) <= end.setHours(0,0,0,0))){
        showContent();
        console.log("Showpppp!!");
    } else {
        console.log("Nope todayssssss!!");
    }
}

var start = new Date('11/4/2018');
var end = new Date('11/15/2018');
datesToEvaluate(start, end);




////////////// FUNCTION TO USE DATA FROM HTML

// <div class="temporal-content" data-start="mm/dd/yyyy" data-end="mm/dd/yyyy"></div>

//Automate for a date range
function dateToEvaluate() {

    if ( (Mirai.query('.temporal-content').length) && (Mirai.query('.temporal-content').attr('data-end')) ) {
    
      //Date format: ('Day/month/year 00:00')
      var today = new Date().setHours(0,0,0,0);

        //Loop for each temporal content:
        Mirai.query('.temporal-content').each(function() {
            
                var end = new Date( Mirai.query(this).attr('data-end') ).setHours(0,0,0,0);

                //If start date is included
                if ( Mirai.query(this).attr('data-start') ) {

                    var start = new Date( Mirai.query(this).attr('data-start') ).setHours(0,0,0,0);
                
                    //Compare today and selected days to show the content (hours, minutes, second, miliseconds)
                    if ( (today < start) || (today > end) )  {   
                        Mirai.query(this).remove();
                    }

                //If start date is not included
                } else if ( today > end ) {
                    Mirai.query(this).remove();
                }   
        });
    } else {
        console.log('Mete la fecha final capullo!!!');
    }
}

dateToEvaluate();