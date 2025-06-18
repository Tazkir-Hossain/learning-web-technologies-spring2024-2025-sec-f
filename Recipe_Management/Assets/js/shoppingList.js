// Define grocery items based on meal type (Bangladeshi style)
const groceryItems = {
  breakfast: ["Tea", "Bread", "Jam"],
  lunch: ["Rice", "Chicken", "Beef", "Fish"],
  dinner: ["Rice", "Fish", "Vegetables", "Lentils"],
};

function createListSection(title, items) {
  const container = document.createElement("div");
  container.className = "list-container";

  const heading = document.createElement("h2");
  heading.textContent = title;
  container.appendChild(heading);

  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + item));
    ul.appendChild(li);
  });
  container.appendChild(ul);

  return container;
}

function loadShoppingList() {
  const selectedMeals = JSON.parse(localStorage.getItem("selectedMeals"));
  if (!selectedMeals) {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<p>No meal plan selected. Please go back and select meals.</p>"
    );
    return;
  }

  // Collect all selected meal types across the week
  const allSelectedMeals = new Set();
  for (const day in selectedMeals) {
    selectedMeals[day].forEach((meal) => allSelectedMeals.add(meal));
  }

  // Clear existing list container if any
  const existingContainers = document.querySelectorAll(".list-container");
  existingContainers.forEach((c) => c.remove());

  // For each meal type selected, add grocery list section
  allSelectedMeals.forEach((mealType) => {
    const items = groceryItems[mealType];
    if (items) {
      const section = createListSection(
        mealType.charAt(0).toUpperCase() + mealType.slice(1),
        items
      );
      document.body.appendChild(section);
    }
  });
}

// Run on page load
window.addEventListener("DOMContentLoaded", loadShoppingList);
