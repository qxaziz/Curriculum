

$(()=>{
    RunMain();
});

function RunMain(){
    var t = document.getElementById('calendar');
    //$('#calendar').fullCalendar({plugins: [ 'dayGrid']})
    
    var c = new FullCalendar.Calendar(t, {
        plugins: [ 'dayGrid'],
        /*events: [
            {
                title: 'Trial event',
                start: '2019-10-01',
            }
        ]*/
    }); 

    

    c.render();
 
    c.on('dayClick', function(date, jsEvent, view){
        alert(date.format());
    });
    //dayClicked();

    //$(".fc-button").click(dayClicked);

    //adds datepicker
    var date_input = $('input[name="datedone"]');
     
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        todayHighlight: true,
        autoClose : true,
    })
}

function dayClicked(){
    $(".fc-day").click(doWhenDayClicked); 
}

function doWhenDayClicked(){
    //alert("Handler clicked for the day element.");
}

function myFunction(event) {
   // alert(event.target.id);
}
