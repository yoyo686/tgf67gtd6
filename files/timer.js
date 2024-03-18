// Get the timer element
const timerElement = document.getElementById('timer');
function updateTimer() {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    const formattedTime = `${minutes}:${seconds}`;
    timerElement.innerHTML = formattedTime;
    time--;
    if (time < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = '00:00';
        if (redirect) {
            window.location.href = nextPath;
        }
    }
}
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);