let baseCount = 0000;
let min = 0;
let sec = 0;
let timerId = null;
// 1秒ごとにcount_down関数呼び出す
function count_start() {
  let timedisplay = document.getElementById('timedisplay');
  const [min, sec] = timedisplay.textContent.split(':');
  baseCount = parseInt(min) * 60 + parseInt(sec);
  timerId = setInterval(count_down, 1000);
}

// カウントダウン表示
function count_down() {
  if (baseCount === 0) {
    let display = document.getElementById('timedisplay');
    display.innerText = 'TIME UP';
  } else {
    baseCount--;
    min = parseInt(baseCount / 60);
    sec = baseCount % 60;
    let count_down = document.getElementById('timedisplay');
    count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
  }
}

// ストップボタンクリック時のアクション
function count_stop() {
  clearInterval(timerId);
}
// リセットボタンクリック時のアクション
function count_reset() {
  baseCount = 0000;
  min = parseInt(baseCount / 60);
  sec = baseCount % 60;
  let count_down = document.getElementById('timedisplay');
  count_down.innerText = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)
}
// イベント処理を実行
window.addEventListener('DOMContentLoaded', function () {
  let start = document.getElementById('startBtn');
  let stop = document.getElementById('stopBtn');
  let reset = document.getElementById('resetBtn');
  start.addEventListener('click', count_start);
  stop.addEventListener('click', count_stop);
  reset.addEventListener('click', count_reset);
})
// 数字押した時
function btnClick(nmb) {
  const target = document.getElementById('timedisplay');
  const base = target.innerText.replace(':', '');
  const newDisplay = base.substr(1, 3) + nmb;
  const a = newDisplay.slice(0, 2);
  const b = ':';
  const c = newDisplay.slice(2);
  let nnDisplay = a + b + c;
  console.log(nnDisplay);
  document.getElementById('timedisplay').textContent = nnDisplay;
  target.innerText = nnDisplay;
};
