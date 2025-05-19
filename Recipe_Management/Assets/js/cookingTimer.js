function addTimer() {
  const name = document.getElementById("timerName").value;
  const duration = parseInt(document.getElementById("timerDuration").value);

  if (!name || isNaN(duration) || duration <= 0) {
    alert("Please enter a valid name and time.");
    return;
  }

  const timerDiv = document.createElement("div");
  timerDiv.className = "timer";

  const title = document.createElement("h4");
  title.textContent = name;

  const countdown = document.createElement("span");
  countdown.textContent = `${duration} seconds left`;

  timerDiv.appendChild(title);
  timerDiv.appendChild(countdown);
  document.getElementById("timerContainer").appendChild(timerDiv);

  let timeLeft = duration;
  const interval = setInterval(() => {
    timeLeft--;
    countdown.textContent = `${timeLeft} seconds left`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdown.textContent = "⏰ Time's up!";
      alert(`Timer finished for: ${name}`);
    }
  }, 1000);

  // Clear input fields
  document.getElementById("timerName").value = "";
  document.getElementById("timerDuration").value = "";
}
