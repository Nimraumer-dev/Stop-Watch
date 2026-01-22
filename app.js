let seconds = 0;
let minutes = 0;
let hours = 0;
let day = 0;
let timer = null;

function startBtn() {
    if (timer !== null) {
        return;
    }

    timer = setInterval(runBtn, 800);
}


function runBtn() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;

    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    if (hours == 24) {
        hours = 0;
        day++
    }


    secondHand.style.transform = `rotate(${seconds * 6}deg)`;


    updateDisplay();
}

function stopBtn() {
    clearInterval(timer);
    timer = null;
}


function resetBtn() {
    stop();
    seconds = 0;
    minutes = 0;
    hours = 0;
    day = 0;
    updateDisplay();
}



function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let d = day < 10 ? "0" + day : day;

    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
}
