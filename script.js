
function Clock() {
    var clock = document.getElementById('clock'),
     color = document.getElementById('color'),
     time = new Date(),
     hours = (time.getHours() % 12).toString(),
        minutes = time.getMinutes().toString(),
        seconds = time.getSeconds().toString(),
        clockString, colorString;

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    clockString = hours + ":" + minutes + ":" + seconds;
    colorString = "#" + hours + minutes + seconds;
    clock.textContent = clockString;
    color.textContent = colorString;
    document.body.style.background = colorString;
}
Clock();
setInterval(Clock, 1000);