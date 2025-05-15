<script>
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
});
</script>