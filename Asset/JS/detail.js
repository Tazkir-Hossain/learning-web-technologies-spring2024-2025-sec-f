document.addEventListener("DOMContentLoaded", () => {
  const recipeId = new URLSearchParams(window.location.search).get("id");

  const recipes = [
    { id: 1, title: "Biriyani", cuisine: "Bangladeshi", meal: "Lunch", diet: "Non-Veg" },
    { id: 2, title: "Shutki Bhuna", cuisine: "Bangladeshi", meal: "Dinner", diet: "Non-Veg" },
    { id: 3, title: "Shorshe Ilish", cuisine: "Bangladeshi", meal: "Lunch", diet: "Fish" },
    { id: 4, title: "Chingri Malai Curry", cuisine: "Bangladeshi", meal: "Dinner", diet: "Seafood" },
    { id: 5, title: "Begun Bharta", cuisine: "Bangladeshi", meal: "Dinner", diet: "Vegetarian" },
  ];
  

  const data = recipes[recipeId];
  if (data) {
    document.getElementById("recipe-title").textContent = data.title;
    document.getElementById("recipe-image").src = data.image;
    document.getElementById("recipe-description").textContent = data.description;
  }

  const stars = document.querySelectorAll("#star-rating span");
  const ratingDisplay = document.getElementById("rating-value");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const value = star.dataset.value;

      stars.forEach(s => {
        s.classList.toggle("active", s.dataset.value <= value);
      });

      ratingDisplay.textContent = `Your rating: ${value}`;
      localStorage.setItem(`rating_${recipeId}`, value);
    });
  });

  // Load saved rating
  const saved = localStorage.getItem(`rating_${recipeId}`);
  if (saved) {
    stars.forEach(s => {
      s.classList.toggle("active", s.dataset.value <= saved);
    });
    ratingDisplay.textContent = `Your rating: ${saved}`;
  }
});
