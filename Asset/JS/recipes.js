<script>
document.addEventListener("DOMContentLoaded", () => {
  const recipes = [
    { id: 1, title: "Biriyani", category: "non-veg", image: "https://via.placeholder.com/300x200", region: "Dhaka" },
    { id: 2, title: "Shutki Bhuna", category: "non-veg", image: "https://via.placeholder.com/300x200", region: "Sylhet" },
    { id: 3, title: "Shorshe Ilish", category: "fish", image: "https://via.placeholder.com/300x200", region: "Barisal" },
    { id: 4, title: "Chingri Malai Curry", category: "fish", image: "https://via.placeholder.com/300x200", region: "Khulna" },
    { id: 5, title: "Begun Bharta", category: "vegetarian", image: "https://via.placeholder.com/300x200", region: "Rajshahi" }
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
        <img src="${r.image}" alt="${r.title}">
        <h3>${r.title}</h3>
        <a href="recipe_details.html?id=${r.id}">View Details</a>
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
</script>