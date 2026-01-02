const searchData = [
  {
    title: "Home",
    keywords: ["home", "main", "index"],
    link: "../index.html"
  },
  {
    title: "FleaMarket",
    keywords: ["FleaMarket", "Flea", "Market", "Saturday"],
    link: "./FleaMarket.html"
  },
  {
    title: "Days-Hours",
    keywords: ["Days", "hour", "open", "holidays", "time"],
    link: "./days-hours.html"
  },
  {
    title: "About Us",
    keywords: ["About us", "goal", "creation", "elena"],
    link: "./About-us.html"
  }
];


document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (!query) return;

  const result = searchData.find(item =>
    item.title.toLowerCase().includes(query) ||
    item.keywords.some(keyword => keyword.includes(query))
  );

  if (result) {
    if (result.link.startsWith("#")) {
      const target = document.querySelector(result.link);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, 
          behavior: "smooth"
        });
      }
    }
    else {
      window.location.href = result.link;
    }
  } else {
    alert(`No results found for "${query}".`);
  }
}