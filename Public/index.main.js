

$(()=>{
    RunMain();
});

function RunMain(){
    var t = document.getElementById('calendar');

    var c = new FullCalendar.Calendar(t, {
        plugins: [ 'dayGrid'],
        events: [
            {
                title: 'The title !',
                start: '2019-10-01',
            }
        ]
    });
    c.render();

    dayClicked();

    $(".fc-button").click(dayClicked);
}

function dayClicked(){
    $(".fc-day").click(doWhenDayClicked); 
}

function doWhenDayClicked(){
    alert("Handler clicked for the day element.");
}
