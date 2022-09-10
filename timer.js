let baseCount = 0000;
let min = 0;
let sec = 0;
let timerId = null;
// 1秒ごとにcount_down関数呼び出す
function count_start(){
  let timedisplay = document.getElementById('timedisplay');
  const [min, sec] = timedisplay.textContent.split(':');
  baseCount = parseInt(min) * 60 + parseInt(sec);
  timerId = setInterval(count_down,1000);
}

// カウントダウン表示
function count_down(){
  if(baseCount ===0){
    let display = document.getElementById('timedisplay');
    display.innerText = 'TIME UP';
  }else {
      baseCount--;
      min = parseInt(baseCount/60);
      sec = baseCount % 60;
      let count_down = document.getElementById('timedisplay');
      count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
    }
  }

// ストップボタンクリック時のアクション
function count_stop(){
  clearInterval(timerId);
}
// リセットボタンクリック時のアクション
function count_reset(){
  baseCount = 0000;
  min = parseInt(baseCount/60);
  sec = baseCount % 60;
  let count_down = document.getElementById('timedisplay');
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
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '1';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
// 2
  function btnTwoClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '2';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 3
  function btnThreeClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '3';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 4
  function btnFourClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '4';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 5
  function btnFiveClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '5';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 6
  function btnSixClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '6';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 7
  function btnSevenClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '7';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  //8
  function btnEightClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '8';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 9
  function btnNineClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '9';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };
  // 0
  function btnZeroClick() {
    target = document.getElementById('timedisplay');
    const base = target.innerText.replace(':','');
    const newDisplay = base.substr(1,3)+ '0';
    const a = newDisplay.slice(0,2);
    const b = ':';
    const c = newDisplay.slice(2);
    let nnDisplay = a + b + c;
    console.log(nnDisplay);
    document.getElementById('timedisplay').textContent = nnDisplay;
    target.innerText = nnDisplay;
  };