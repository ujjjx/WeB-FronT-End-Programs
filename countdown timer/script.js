const datePickerInput = document.getElementById('datepicker');
const startTimerBtn = document.getElementById('startTimerBtn');
const timerDisplay = document.getElementById('timer');

let countdown;

function startTimer() {
  const targetDate = new Date(datePickerInput.value).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = 'Countdown complete!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Initial call to updateTimer to avoid delay
  updateTimer();

  // Update timer every second
  countdown = setInterval(updateTimer, 1000);
}

startTimerBtn.addEventListener('click', startTimer);
