var startbutton = document.getElementById("startbutton");
var endbutton = document.getElementById("endbutton");

var starttime;
var endtime;
var totaltime;
let timeout;

startbutton.addEventListener("click", start);

endbutton.addEventListener("click", end);

function start() {
    starttime = Date.now();
    sessionStorage.setItem("start_time_new_habit", starttime);
}

function end_timer() {
    endtime = Date.now();
    starttime = sessionStorage.getItem("start_time_new_habit");
    total_time = (endtime - starttime) / 1000;
    alert(`It took you ${total_time} second to complete registration`)
    //timeout = setTimeout(alertFunc, 2000);
}

function alertFunc() {
    //alert(`It took you ${totaltime} second to add a new habit`);
}

