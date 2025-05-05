document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addRecipeForm");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const title = form.querySelector("input[type='text']").value;
    const image = form.querySelector("input[type='url']").value;
    const description = form.querySelector("textarea").value;
    const category = form.querySelector("select").value;

    const newRecipe = {
      title, image, description, category
    };

    alert("Recipe added successfully (but not saved – needs backend)");
    console.log("Recipe Data:", newRecipe);
  });
});
