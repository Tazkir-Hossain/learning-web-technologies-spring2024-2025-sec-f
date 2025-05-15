document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("favorites-list");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container.innerHTML = "<p>No saved recipes yet.</p>";
    return;
  }

  favorites.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";
    div.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; height:180px; object-fit:cover; border-radius:8px;">
      <h4>${recipe.title}</h4>
      <button onclick="removeFavorite('${recipe.id}')">🗑 Remove</button>
    `;
    container.appendChild(div);
  });
});

function removeFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(f => f.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
