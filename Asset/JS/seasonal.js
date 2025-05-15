document.addEventListener("DOMContentLoaded", () => {
  const month = new Date().getMonth();

  const seasons = [
    ["Kacha Aam", "Lau", "Begun"],
    ["Pui Shak", "Shosha", "Korola"],
    ["Pepe", "Shutki", "Shorisha Pata"],
    ["Mocha", "Kochu", "Macher Dim"],
    ["Amra", "Patal", "Jhinga"],
    ["Tomato", "Dhula Kumra", "Kumra"],
    ["Kakrol", "Boroboti", "Chichinga"],
    ["Pui", "Peyaj", "Shorshe"],
    ["Begun", "Kacha Kola", "Peyaj Pata"],
    ["Lal Shak", "Kumra", "Sim"],
    ["Lebu", "Ada", "Radhuni"],
    ["Peyara", "Komola", "Alu"]
  ];

  const seasonalList = document.getElementById("seasonal-produce-list");
  seasons[month].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    seasonalList.appendChild(li);
  });

  const holidayRecipes = {
    0: ["Pitha Platter", "New Year Chicken Roast"],
    2: ["Eid Special Korma", "Shemai Delight"],
    6: ["Summer Fruit Salad", "Iftar Pakora"],
    10: ["Nobanno Payesh", "Winter Bhuna Khichuri"]
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

function findMarkets() {
  const zip = document.getElementById("zipCodeInput").value;
  const result = document.getElementById("market-results");

  if (!zip) {
    result.innerHTML = "<p>Please enter a ZIP code.</p>";
    return;
  }

  result.innerHTML = `<p>🔍 Searching for markets near ${zip}...</p>`;

  
  setTimeout(() => {
    result.innerHTML = `
      <ul>
        <li><strong>Shantinagar Bazaar</strong> – Fri 7am–12pm</li>
        <li><strong>Farmgate Market</strong> – Sun 8am–1pm</li>
      </ul>`;
  }, 800);
}
