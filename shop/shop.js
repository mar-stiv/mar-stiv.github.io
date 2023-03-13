var my_screen = document.getElementById("iphone_screen");

/*
*Timer
*/
var start;

function end_timer() {
    var elapsed = new Date() - start;
    alert(`It took you ${total_time} second to complete a purchase`)
}

function begin_timer(){
  start_time = new Date();
}
