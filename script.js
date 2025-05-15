const WORK_MINUTES = 0;
const WORK_SECONDS = 10;
const REST_MINUTES = 0;
const REST_SECONDS = 5;

let timer = null;
let minutes = WORK_MINUTES;
let seconds = WORK_SECONDS;
let currentState = 'work';

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);

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

      if (currentState === 'work') {
        alert('Время вышло! Сделай перерыв.');
      } else if (currentState === 'rest') {
        alert('Перерыв окончен! Пора за работу.');
      }

      currentState = currentState === 'work' ? 'rest' : 'work';

      if (currentState === 'work') {
        minutes = WORK_MINUTES;
        seconds = WORK_SECONDS;
      } else if (currentState === 'rest') {
        minutes = REST_MINUTES;
        seconds = REST_SECONDS;
      }

      startTimer();
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
