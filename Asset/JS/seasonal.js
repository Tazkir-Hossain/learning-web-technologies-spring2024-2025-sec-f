document.addEventListener("DOMContentLoaded", () => {
  const month = new Date().getMonth();
  const seasons = [
    ["Oranges", "Kale", "Sweet Potatoes"],
    ["Cabbage", "Leeks", "Turnips"],
    ["Spinach", "Asparagus", "Strawberries"],
    ["Peas", "Radishes", "Rhubarb"],
    ["Zucchini", "Cherries", "Blueberries"],
    ["Tomatoes", "Corn", "Peaches"],
    ["Melons", "Cucumbers", "Green Beans"],
    ["Bell Peppers", "Eggplant", "Plums"],
    ["Apples", "Pears", "Pumpkins"],
    ["Squash", "Brussels Sprouts", "Grapes"],
    ["Cranberries", "Carrots", "Beets"],
    ["Pomegranates", "Citrus", "Potatoes"]
  ];

  const seasonalList = document.getElementById("seasonal-produce-list");
  seasons[month].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    seasonalList.appendChild(li);
  });

  // 🎉 Holiday-themed recipes
  const holidayRecipes = {
    0: ["New Year Noodles", "Winter Soup"],
    1: ["Valentine's Cake", "Romantic Pasta"],
    3: ["Easter Ham", "Spring Carrot Salad"],
    6: ["Grilled BBQ", "4th of July Hot Dogs"],
    10: ["Thanksgiving Turkey", "Pumpkin Pie"],
    11: ["Christmas Cookies", "Roast Beef"]
  };

  const holidayDiv = document.getElementById("holiday-recipes");
  if (holidayRecipes[month]) {
    holidayRecipes[month].forEach(title => {
      const div = document.createElement("div");
      div.classList.add("recipe-card");
      div.innerHTML = `<h4>${title}</h4>`;
      holidayDiv.appendChild(div);
    });
  }
});

// 🛒 Simple Farmers Market Finder
function findMarkets() {
  const zip = document.getElementById("zipCodeInput").value;
  const result = document.getElementById("market-results");

  if (!zip) {
    result.innerHTML = "<p>Please enter a ZIP code.</p>";
    return;
  }

  result.innerHTML = `<p>🔍 Searching for markets near ${zip}...</p>`;

  // Simulate result (real data would require API)
  setTimeout(() => {
    result.innerHTML = `
      <ul>
        <li><strong>Downtown Farmers Market</strong> – Sat 8am–1pm</li>
        <li><strong>Greenview Market</strong> – Sun 9am–2pm</li>
      </ul>`;
  }, 1000);
}
