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

  news_items.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news_item";

    const imgDiv = document.createElement("div");
    imgDiv.className = "news_img";
    imgDiv.innerHTML = `<img src="images/${item.image}" alt="" style="max-width: 200px; border-radius: 15px;">`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "news_content";
    contentDiv.innerHTML = `
      <strong style="font-size: 1.5em;">${item.headline}</strong><br>
      <em>${item.date}</em><br>
      <p>${item.content}</p>
    `;

    newsItem.appendChild(imgDiv);
    newsItem.appendChild(contentDiv);

    newsgrid.appendChild(newsItem);
  });
}

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
