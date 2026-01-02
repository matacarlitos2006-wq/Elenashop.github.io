const searchData = [
  {
    title: "Home",
    keywords: ["home", "main", "index"],
    link: "index.html"
  },
  {
    title: "About us",
    keywords: ["About us", "elena", "creation", "goal"],
    link: "./Pages/About-us.html"
  },
  {
    title: "days-hours",
    keywords: ["Days", "hours", "hour", "holidays", "time"],
    link: "./Pages/days-hours.html"
  },
  {
    title: "FleaMarket",
    keywords: ["FleaMarket", "Market", "flea", "Saturdays"],
    link: "./Pages/FleaMarket.html"
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