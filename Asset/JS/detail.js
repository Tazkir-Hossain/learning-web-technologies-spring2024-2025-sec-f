document.addEventListener("DOMContentLoaded", () => {
  const recipeId = new URLSearchParams(window.location.search).get("id");

  const recipes = {
    1: {
      title: "Avocado Toast",
      image: "https://via.placeholder.com/600x400",
      description: "Toasted bread topped with mashed avocado, lemon, and salt.",
    },
    2: {
      title: "Chocolate Cake",
      image: "https://via.placeholder.com/600x400",
      description: "Rich and moist chocolate cake with creamy frosting.",
    },
    3: {
      title: "Keto Chicken Bowl",
      image: "https://via.placeholder.com/600x400",
      description: "Low-carb grilled chicken bowl with veggies.",
    },
  };

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
