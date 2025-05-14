// Meal Plan Sync Function
document.getElementById("sync-btn").addEventListener("click", function () {
  let mealPlan = {
    saturday: document.getElementById("saturday-meal").value,
    sunday: document.getElementById("sunday-meal").value,
    monday: document.getElementById("monday-meal").value,
    tuesday: document.getElementById("tuesday-meal").value,
    wednesday: document.getElementById("wednesday-meal").value,
    thursday: document.getElementById("thursday-meal").value,
    friday: document.getElementById("friday-meal").value,
  };

  // Example: Logging the selected meal plan to console
  console.log("Meal Plan for the Week:", mealPlan);

  // Here, you could call a PHP function later to save this data
  alert("Meal plan synced to shopping list!");
});
