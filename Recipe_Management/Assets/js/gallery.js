const searchInput = document.getElementById("searchInput");
const recipeCards = document.querySelectorAll(".recipe-card");
const checkboxes = document.querySelectorAll("input[name='diet']");

function filterRecipes() {
  const query = searchInput.value.toLowerCase();
  const selectedDiets = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  recipeCards.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    const diet = card.getAttribute("data-diet");

    const matchesQuery = title.includes(query);
    const matchesDiet = selectedDiets.includes(diet);

    card.style.display = matchesQuery && matchesDiet ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterRecipes);
checkboxes.forEach((cb) => cb.addEventListener("change", filterRecipes));
