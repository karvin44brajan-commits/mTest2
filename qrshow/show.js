var PERIOD = 180;
var START = 0;
var CODE = "";
var REFRESH_WAIT_MS = 2000;
var refreshing = false;
function randomCode(){
  return Math.floor(Math.random()*1000000).toString().padStart(6,'0');
}
function compute(){
  var now = Date.now();
  var elapsed = Math.floor((now - START)/1000);
  var remaining = Math.max(PERIOD - elapsed, 0);
  return {code: CODE, remaining: remaining};
}
function formatRemaining(sec){
  var m = Math.floor(sec/60);
  var s = sec % 60;
  return m + " min " + (s<10?("0"+s):s) + " sek.";
}
function render(){
  var data = compute();
  var digits = document.getElementById('qrDigits');
  var bar = document.getElementById('qrTimerFill');
  var txt = document.getElementById('qrTimerText');
  if(digits){ digits.textContent = data.code; }
  if(bar){ bar.style.width = Math.floor((data.remaining / PERIOD) * 100) + "%"; }
  if(txt){ txt.innerHTML = "Kod wygaśnie za: <span class=\"qr_timer_bold\">" + formatRemaining(data.remaining) + "</span>"; }
  if(data.remaining === 0 && !refreshing){
    refreshing = true;
    setTimeout(function(){
      CODE = randomCode();
      START = Date.now();
      refreshing = false;
      render();
    }, REFRESH_WAIT_MS);
  }
}
document.addEventListener('DOMContentLoaded', function(){
  START = Date.now();
  CODE = randomCode();
  render();
  setInterval(render, 1000);
});
