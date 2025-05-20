function addTimer() {
    const name = document.getElementById("timerName").value.trim();
    const minutes = parseInt(document.getElementById("timerMinutes").value);
    const container = document.getElementById("timersContainer");
  
    if (!name || isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid name and time in minutes.");
      return;
    }
  
    const endTime = Date.now() + minutes * 60 * 1000;
  
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h4>${name}</h4>
      <p><strong>Time Left:</strong> <span class="time-left">Loading...</span></p>
      <button onclick="removeTimer(this)">🗑 Cancel</button>
    `;
    container.appendChild(card);
  
    const timeDisplay = card.querySelector(".time-left");
  
    const interval = setInterval(() => {
      const remaining = endTime - Date.now();
      if (remaining <= 0) {
        clearInterval(interval);
        timeDisplay.textContent = "Time's up!";
        card.style.border = "2px solid red";
        alert(`🔔 "${name}" is done!`);
      } else {
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        timeDisplay.textContent = `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
      }
    }, 1000);
  
    document.getElementById("timerName").value = "";
    document.getElementById("timerMinutes").value = "";
  }
  
  function removeTimer(button) {
    const card = button.closest(".recipe-card");
    card.remove();
  }
  