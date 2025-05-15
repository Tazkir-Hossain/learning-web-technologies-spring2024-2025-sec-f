document.addEventListener("DOMContentLoaded", () => {
  const recipes = [
    {
      id: 1,
      title: "Biriyani",
      cuisine: "Dhaka",
      meal: "Lunch",
      diet: "Non-Veg",
      image: ""

    {
      id: 2,
      title: "Shutki Bhuna",
      cuisine: "Sylhet",
      meal: "Dinner",
      diet: "Non-Veg",
      image: "https://via.placeholder.com/300x200?text=Shutki+Bhuna"
    },
    {
      id: 3,
      title: "Shorshe Ilish",
      cuisine: "Khulna",
      meal: "Lunch",
      diet: "Fish",
      image: "https://via.placeholder.com/300x200?text=Shorshe+Ilish"
    },
    {
      id: 4,
      title: "Begun Bharta",
      cuisine: "Chittagong",
      meal: "Dinner",
      diet: "Vegetarian",
      image: "https://via.placeholder.com/300x200?text=Begun+Bharta"
    }
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
        <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; border-radius:6px;">
        <h4>${recipe.title}</h4>
        <p>${recipe.cuisine} | ${recipe.meal}</p>
        <p><strong>Diet:</strong> ${recipe.diet || "Standard"}</p>
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

  renderRecipes(recipes);
});
