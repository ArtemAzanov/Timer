let sec = 0;
let timer = null;
const div = document.getElementById('timer');
function update(){
let minuta = Math.floor(sec/60);
let secunda = sec % 60;
div.innerHTML = (minuta < 10 ? '0' + minuta : minuta) + ':' + (secunda < 10 ? '0' + secunda : secunda)
}
function start(){
 if(timer) return
 timer = setInterval(()=> {
    sec++
    update()
 }, 1000)
}
function pause(){
    clearInterval(timer)
    timer = null
}
function reset(){
    pause()
    sec = 0
    update()
}
update();