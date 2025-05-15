// Dummy recipe list
const recipes = [
    {
      id: "1",
      title: "Pasta Primavera",
      cuisine: "Italian",
      meal: "Dinner",
      diet: "Vegetarian"
    },
    {
      id: "2",
      title: "Masala Dosa",
      cuisine: "Indian",
      meal: "Breakfast",
      diet: "Vegan"
    },
    {
      id: "3",
      title: "Avocado Toast",
      cuisine: "American",
      meal: "Breakfast",
      diet: "Vegetarian"
    }
  ];
  
  // Render recipe cards
  const container = document.getElementById("recipeList");
  container.innerHTML = ""; // Clear container
  
  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";
  
    div.innerHTML = `
      <h4>${recipe.title}</h4>
      <p>${recipe.cuisine} | ${recipe.meal}</p>
      <p><strong>Diet:</strong> ${recipe.diet}</p>
      <a href="recipe-details.html?id=${recipe.id}" class="btn">View Details</a>
    `;
  
    container.appendChild(div);
  });
  