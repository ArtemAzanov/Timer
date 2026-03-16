let sec = 0;
let timer = null;
let minutesInput = document.querySelectorAll('input')[0];
let secondsInput = document.querySelectorAll('input')[1];
function update() {
    minuta = Math.floor(sec / 60);
    secunda = sec % 60;
    if (minuta < 10) {
        minuta = '0' + minuta
    }
    if (secunda < 10) {
        secunda = '0' + secunda
    }
    const div = document.getElementById('timer');
    div.textContent = minuta + ':' + secunda;
}
function start() {
    let minuta = Number(minutesInput.value) || 0;
    let secunda = Number(secondsInput.value) || 0;
     sec = minuta * 60 + secunda;
    if (timer) return;
    timer = setInterval(() => {
        if (sec > 0) {
            sec--;
            update();
            if (sec === 0) {
                playAlarm();
            }
        } else {
            pause();
        }
    }, 1000);
}
function playAlarm() {
    const alarm = document.getElementById('alarm');
    alarm.play();
}
function pause() {
    clearInterval(timer)
    timer = null
}
function reset() {
    pause()
    sec = 0
    update()
}
update();

