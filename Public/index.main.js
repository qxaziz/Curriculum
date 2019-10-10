

$(()=>{
    RunMain();
});

function RunMain(){
    var t = document.getElementById('calendar');
     
    var c = new FullCalendar.Calendar(t, {
        plugins: [ 'dayGrid','interaction'],
  
        dateClick: function(info){
            console.log('Clicked on: ' + info.dateStr);
        }
    }); 

    c.render();
 
    //adds datepicker
    var date_input = $('input[name="datedone"]');
     
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        todayHighlight: true,
        autoClose : true,
    })
}

