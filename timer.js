const timerElement = document.getElementById('the timer');
const timeValue = timeElement.innerText;
console.log(timeValue);
const val = '0000';
const startBtn = document.getElementById('startBtn');
let timeoutId;
startBtn.addEventListener('click', () => {
   timeoutID = setTimeout(()=> {console.log("timeout")}, 5*1000);
});
let baseCount = 0000;
let min = 0;
let sec = 0;
let stb = null;
// 1秒ごとにcount_down関数呼び出す
function count_start(){
  min = parseInt(baseCount/60);
      sec = baseCount % 60;
      let count_down = document.getElementById('the timer');
      count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
  stb = setInterval(count_down,1000);
}
// カウントダウン表示
function count_down(){
  if(baseCount ===0){
    let display = document.getElementById('the timer');
    display.innerText = 'TIME UP';
  }else {
      baseCount--;
      min = parseInt(countBase/60);
      sec = countBase % 60;
      let count_down = document.getElementById('the timer');
      count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
    }
  }

// ストップボタンクリック時のアクション
function count_stop(){
  clearInterval(stb);
}
// リセットボタンクリック時のアクション
function count_reset(){
  baseCount = 0000;
  min = parseInt(baseCount/60);
  sec = baseCount % 60;
  let count_down = document.getElementById('the timer');
  count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
}
// イベント処理を実行
window.addEventListener('DOMContentLoaded', function(){
  let start = document.getElementById('startBtn');
  let stop  = document.getElementById('stopBtn');
  let reset = document.getElementById('resetBtn');
  start.addEventListener('click',count_start);
  stop.addEventListener('click',count_stop);
  reset.addEventListener('click',count_reset);
})
// 1押した時
function btnOneClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '1';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
// 2
  function btnTwoClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '2';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 3
  function btnThreeClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '3';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 4
  function btnFourClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '4';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 5
  function btnFiveClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '5';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 6
  function btnSixClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '6';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 7
  function btnSevenClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '7';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  //8
  function btnEightClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '8';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 9
  function btnNineClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '9';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 0
  function btnZeroClick() {
    target = document.getElementById('the timer');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '0';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('the timer').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };