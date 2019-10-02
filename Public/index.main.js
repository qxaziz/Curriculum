

$(()=>{
    RunMain();
});

function RunMain(){
    var t = document.getElementById('calendar');

    var c = new FullCalendar.Calendar(t, {
        plugins: [ 'dayGrid']
    });

    c.render();

}


