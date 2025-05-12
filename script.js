let timer = null;
let minutes = 25;
let seconds = 0;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
  if (timer === null) {
    timer = setInterval(countDown, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  updateTimer();
}

function countDown() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      timer = null;
      alert("Время вышло! Сделай перерыв.");
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateTimer();
}

function updateTimer() {
  minutesElement.innerHTML = formatTimer(minutes);
  secondsElement.innerHTML = formatTimer(seconds);
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}

updateTimer();
