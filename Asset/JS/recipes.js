document.addEventListener("DOMContentLoaded", () => {
  const recipes = [
    { id: 1, title: "Biriyani", category: "non-veg", image: "../Asset/Image/biriyani.jpg" },
    { id: 2, title: "Shutki Bhuna", category: "non-veg", image: "../Asset/Image/shutki.jpg" },
    { id: 3, title: "Shorshe Ilish", category: "fish", image: "../Asset/Image/ilish.jpg" },
    { id: 4, title: "Begun Bharta", category: "vegetarian", image: "../Asset/Image/begun.jpg" },
    { id: 5, title: "Panta Ilish", category: "fish", image: "../Asset/Image/panta.jpg" },
    { id: 6, title: "Chicken Curry", category: "non-veg", image: "../Asset/Image/chicken.jpg" }
    // Add more as needed
  ];

  const recipesPerPage = 4;
  let currentPage = 1;

  const recipeList = document.getElementById("recipeList");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const pagination = document.getElementById("pagination");

  function getFilteredRecipes() {
    const filterText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    return recipes.filter(r => {
      const matchTitle = r.title.toLowerCase().includes(filterText);
      const matchCategory = category === "all" || r.category === category;
      return matchTitle && matchCategory;
    });
  }

  function renderRecipes(page = 1) {
    const filtered = getFilteredRecipes();
    const start = (page - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const paginated = filtered.slice(start, end);

    recipeList.innerHTML = paginated.map(r => `
      <div class="recipe-card">
        <img src="${r.image}" alt="${r.title}">
        <h3>${r.title}</h3>
        <a href="recipe_details.html?id=${r.id}">View Details</a>
      </div>
    `).join("");

    renderPagination(filtered.length, page);
  }

  function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / recipesPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.addEventListener("click", () => {
        renderRecipes(i);
      });
      pagination.appendChild(btn);
    }
  }

  searchInput.addEventListener("input", () => renderRecipes(1));
  categoryFilter.addEventListener("change", () => renderRecipes(1));

  renderRecipes(currentPage);
});
