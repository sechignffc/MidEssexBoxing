const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");
const boxerSelect = document.querySelector("#boxer_list");
const boxerCard = document.querySelector(".boxer_card");

let boxer_data = [];
let card_info = {};

const boxers_url = "boxers.json";

fetch(boxers_url)
  .then((response) => response.json())
  .then((data) => {
    boxer_data = data;
    createSelector(boxer_data);
  });

function createSelector(all_data) {
  let boxer_list = [];
  let valueToAdd = "";
  let firstCardToDisplay = {};

  for (let i = 0; i < all_data.length; i++) {
    boxer_list.push(all_data[i].name);
  }
  boxer_list.sort();
  for (let i = 0; i < boxer_list.length; i++) {
    const selector_option = document.createElement("option");
    selector_option.value = boxer_list[i];
    selector_option.textContent = boxer_list[i]; // <-- Add this line!
    boxerSelect.append(selector_option);
  }

  firstCardToDisplay = all_data.find((obj) => obj.name === boxer_list[0]);
  displayBoxerCard(firstCardToDisplay);
}

function displayBoxerCard(boxer_info) {
  const boxertable = document.createElement("table");
  boxertable.style.width = "100%";
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const tdContent = document.createElement("td");
  const tdImage = document.createElement("td");
  const firstImage = document.createElement("img");
  const firstParagraph = document.createElement("p");
  firstImage.src = `images/${boxer_info.image}`;
  firstImage.classList.add("boxerImage");
  firstParagraph.innerHTML = `
    <b style='color: goldenrod'>Name:</b> ${boxer_info.name}<br>
    <b style='color: goldenrod'>Nickname:</b> ${boxer_info.nickname}<br>
    <b style='color: goldenrod'>Birth Year:</b> ${boxer_info.year}<br>
    <b style='color: goldenrod'>Bouts:</b> ${boxer_info.fights}<br>
  `;
  if (boxer_info.achievements.length > 0) {
    firstParagraph.innerHTML +=
      "<b style='color: goldenrod'>Achievements:</b><br>";
    for (let i = 0; i < boxer_info.achievements.length; i++) {
      firstParagraph.innerHTML += `${boxer_info.achievements[i]}<br>`;
    }
  }
  firstParagraph.classList.add("boxerParagraph");
  // Use appendChild to add nodes
  tdImage.appendChild(firstImage);
  tdContent.appendChild(firstParagraph);
  tr.appendChild(tdContent);
  tr.appendChild(tdImage);
  tbody.appendChild(tr);
  boxertable.appendChild(tbody);
  boxerCard.append(boxertable); // Assumes boxerCard exists in your HTML
}

boxerSelect.addEventListener("change", function () {
  const boxerCardImage = document.querySelector(".boxerImage");
  const boxerCardPara = document.querySelector(".boxerParagraph");
  cardToDisplay = boxer_data.find((obj) => obj.name === boxerSelect.value);
  boxerCardImage.src = `images/${cardToDisplay.image}`;
  boxerCardPara.innerHTML = `
    <b style='color: goldenrod'>Name:</b> ${cardToDisplay.name}<br>
    <b style='color: goldenrod'>Nickname:</b> ${cardToDisplay.nickname}<br>
    <b style='color: goldenrod'>Birth Year:</b> ${cardToDisplay.year}<br>
    <b style='color: goldenrod'>Bouts:</b> ${cardToDisplay.fights}<br>
  `;
  if (cardToDisplay.achievements.length > 0) {
    boxerCardPara.innerHTML +=
      "<b style='color: goldenrod'>Achievements:</b><br>";
    for (let i = 0; i < cardToDisplay.achievements.length; i++) {
      boxerCardPara.innerHTML += `${cardToDisplay.achievements[i]}<br>`;
    }
  }
});

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
