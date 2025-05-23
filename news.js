const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");
const newsgrid = document.querySelector(".news_grid");
let news_entries = [];
const news_url = "news.json";

fetch(news_url)
  .then((response) => response.json())
  .then((data) => {
    news_entries = data;
    createNewsGrid(news_entries);
  });

function createNewsGrid(news_items) {
  newsgrid.innerHTML = ""; // Clear previous content

  // Create the table and header row
  const newstable = document.createElement("table");
  newstable.style.width = "100%";

  /*
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  // Create column headers
  const thImage = document.createElement("th");
  thImage.textContent = "Image";
  const thContent = document.createElement("th");
  thContent.textContent = "News";

  headerRow.appendChild(thImage);
  headerRow.appendChild(thContent);
  thead.appendChild(headerRow);
  newstable.appendChild(thead); */

  // Create table body
  const tbody = document.createElement("tbody");
  for (let i = 0; i < news_items.length; i++) {
    const item = news_items[i];
    const tr = document.createElement("tr");

    // Image cell
    const tdImage = document.createElement("td");
    tdImage.innerHTML = `<img src='images/${item.image}' alt='' style='max-width:150px; border-radius:15px;'>`;

    // News/content cell
    const tdContent = document.createElement("td");
    tdContent.innerHTML = `
      <strong style="font-size: 1.5em;">${item.headline}</strong><br>
      <em>${item.date}</em><br>
      <p>${item.content}</p>
    `;

    tr.appendChild(tdImage);
    tr.appendChild(tdContent);
    tbody.appendChild(tr);
  }

  newstable.appendChild(tbody);
  newsgrid.appendChild(newstable);
}

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
