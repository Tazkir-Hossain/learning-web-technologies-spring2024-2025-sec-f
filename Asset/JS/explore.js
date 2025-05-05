// Dummy data for demonstration
const recipes = [
  { id: 1, title: "Pasta Primavera", cuisine: "Italian", meal: "Dinner", diet: "Vegetarian" },
  { id: 2, title: "Masala Dosa", cuisine: "Indian", meal: "Breakfast", diet: "Vegan" },
  { id: 3, title: "Sweet & Sour Tofu", cuisine: "Chinese", meal: "Lunch", diet: "Vegan" },
  { id: 4, title: "Quesadillas", cuisine: "Mexican", meal: "Dinner", diet: "" },
];

const recipeGrid = document.getElementById("recipeGrid");

function renderRecipes(data) {
  recipeGrid.innerHTML = "";
  if (data.length === 0) {
    recipeGrid.innerHTML = "<p>No matching recipes found.</p>";
    return;
  }
  data.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <h4>${recipe.title}</h4>
      <p>${recipe.cuisine} | ${recipe.meal}</p>
      <p>${recipe.diet || "Standard"}</p>
    `;
    recipeGrid.appendChild(div);
  });
}

function applyFilters() {
  const selectedMeals = Array.from(document.querySelectorAll(".filter:checked")).map(cb => cb.value);
  const selectedDiet = Array.from(document.querySelectorAll(".diet:checked")).map(cb => cb.value);
  const selectedCuisine = document.getElementById("cuisineFilter").value;

  const filtered = recipes.filter(r => {
    const mealMatch = selectedMeals.length ? selectedMeals.includes(r.meal) : true;
    const dietMatch = selectedDiet.length ? selectedDiet.includes(r.diet) : true;
    const cuisineMatch = selectedCuisine ? r.cuisine === selectedCuisine : true;
    return mealMatch && dietMatch && cuisineMatch;
  });

  renderRecipes(filtered);
}

document.querySelectorAll(".filter, .diet").forEach(cb => {
  cb.addEventListener("change", applyFilters);
});
document.getElementById("cuisineFilter").addEventListener("change", applyFilters);

// Initial render
renderRecipes(recipes);
