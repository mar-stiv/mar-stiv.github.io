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
    alert(`It took you ${starttime} second to add a new habit`);
}

function end() {
    endtime = Date.now();
    totaltime = (endtime - starttime) / 1000;
    alert(`It took you ${total_time} second to complete registration`)
    //timeout = setTimeout(alertFunc, 2000);
}

function alertFunc() {
    //alert(`It took you ${totaltime} second to add a new habit`);
}
