const mealToItems = {
  breakfast: ["Apple", "Banana", "Milk", "Yogurt"],
  lunch: ["Spinach", "Rice", "Tomato"],
  dinner: ["Carrot", "Cheese", "Chicken", "Tomato"],
};

document.addEventListener("DOMContentLoaded", function () {
  const mealPlan = JSON.parse(localStorage.getItem("mealPlan"));

  if (!mealPlan) return;

  // Flatten all selected meals into one list of grocery items
  let selectedMeals = Object.values(mealPlan); // e.g., ["breakfast", "lunch", ...]
  let itemsToCheck = new Set();

  selectedMeals.forEach((meal) => {
    if (mealToItems[meal]) {
      mealToItems[meal].forEach((item) => itemsToCheck.add(item));
    }
  });

  // Now check checkboxes if label text matches
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    let label = checkbox.parentElement.textContent.trim();
    if (itemsToCheck.has(label)) {
      checkbox.checked = true;
    }
  });
});
