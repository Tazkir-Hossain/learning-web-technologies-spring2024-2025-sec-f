// Meal Plan Sync Function
document.getElementById("sync-btn").addEventListener("click", function () {
  let mealPlan = {
    saturday: document.getElementById("saturday-meal").value.toLowerCase(),
    sunday: document.getElementById("sunday-meal").value.toLowerCase(),
    monday: document.getElementById("monday-meal").value.toLowerCase(),
    tuesday: document.getElementById("tuesday-meal").value.toLowerCase(),
    wednesday: document.getElementById("wednesday-meal").value.toLowerCase(),
    thursday: document.getElementById("thursday-meal").value.toLowerCase(),
    friday: document.getElementById("friday-meal").value.toLowerCase(),
  };

  // Save the meal plan to localStorage so the next page can access it
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan));

  // Redirect to shopping list page
  window.location.href = "../../view/shoppingList.html";
});
