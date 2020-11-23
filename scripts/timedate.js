let timerID = null;
let timerRunning = false;


function getTheDate(){
    todays = new Date();
    date = document.getElementById("date")
    theDate = "" + (todays.getMonth() + 1) + " / " + todays.getDate() + " / " + (todays.getYear() - 100);
    date.innerHTML = theDate;

}

function stopClock(){
    if(timerRunning){
        clearTimeout(timerID);
    }
    timerRunning = false;
}

function showTime(){
    let now = new Date();
    let watch = document.getElementById('watch')
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let timeValue = hours;
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;

    watch.innerHTML = timeValue;
    timerID = setTimeout("showTime()", 1000);
    timerRunning = true;
    
    
}

function startClock(){
    stopClock();
    getTheDate();
    showTime();

}

window.addEventListener('DOMContentLoaded', startClock(), false);