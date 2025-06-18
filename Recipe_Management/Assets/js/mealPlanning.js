document.getElementById("sync-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const days = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];
  const selectedMeals = {};

  days.forEach((day) => {
    // Select all checked checkboxes for this day
    const checkboxes = document.querySelectorAll(
      `input[name="${day}-meal"]:checked`
    );
    // Map checked checkboxes to their values (breakfast, lunch, dinner)
    selectedMeals[day] = Array.from(checkboxes).map((cb) => cb.value);
  });

  // Save the entire selected meals object to localStorage
  localStorage.setItem("selectedMeals", JSON.stringify(selectedMeals));

  // Redirect to shoppingList.html
  window.location.href = "shoppingList.html";
});
