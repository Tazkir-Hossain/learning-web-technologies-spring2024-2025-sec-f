document.addEventListener("DOMContentLoaded", () => {
    console.log("recipes.js loaded");
  
    const recipes = [
      { id: 1, title: "Avocado Toast", category: "vegan", image: "https://via.placeholder.com/300x200" },
      { id: 2, title: "Cake", category: "dessert", image: "https://via.placeholder.com/300x200" },
      { id: 3, title: "Keto Chicken", category: "keto", image: "https://via.placeholder.com/300x200" },
    ];
  
    const recipeList = document.getElementById("recipeList");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
  
    function renderRecipes(filterText = "", category = "all") {
      const filtered = recipes.filter(r =>
        (category === "all" || r.category === category) &&
        r.title.toLowerCase().includes(filterText.toLowerCase())
      );
  
      recipeList.innerHTML = filtered.map(r => `
        <div class="recipe-card">
          <img src="${r.image}" />
          <h3>${r.title}</h3>
        </div>
      `).join("");
    }
  
    searchInput.addEventListener("input", () => {
      renderRecipes(searchInput.value, categoryFilter.value);
    });
  
    categoryFilter.addEventListener("change", () => {
      renderRecipes(searchInput.value, categoryFilter.value);
    });
  
    renderRecipes();
  });
  