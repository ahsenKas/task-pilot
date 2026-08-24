const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

document.querySelector("#current-time").innerHTML = `${hour}:${minute}`;

const timerDisplay = document.querySelector("#timer-display");
const timerButton = document.querySelector(".timer");

let totalSeconds = 25 * 60;
let timer = null;

timerButton.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    timerButton.textContent = "Start timer";
    return;
  }

  timer = setInterval(() => {
    totalSeconds--;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      timer = null;
      timerButton.textContent = "Start timer";
    }
  }, 1000);

  timerButton.textContent = "Pause";
});
