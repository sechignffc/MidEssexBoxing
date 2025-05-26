const menu = document.querySelector(".menu");
const hideMenu = document.querySelector(".hidemenu");
const eventsGrid = document.querySelector(".eventgrid");
let eventsData = [];
const events_url = "events.json";

fetch(events_url)
  .then((response) => response.json())
  .then((data) => {
    eventsData = data;
    createEventsGrid(eventsData);
  });

function createEventsGrid(all_events) {
  console.log(all_events);
  const eventstable = document.createElement("table");
  eventstable.style.width = "100%";
  const tbody = document.createElement("tbody");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const thImage = document.createElement("th");
  thImage.textContent = "Event Name";
  const thContent = document.createElement("th");
  thContent.textContent = "Relevant Dates";

  headerRow.appendChild(thImage);
  headerRow.appendChild(thContent);
  thead.appendChild(headerRow);
  eventstable.appendChild(thead);

  for (let i = 0; i < all_events.length; i++) {
    const tr = document.createElement("tr");
    const tdevent = document.createElement("td");
    const tddates = document.createElement("td");

    tdevent.innerHTML = all_events[i].event;
    tdevent.style.width = "20%";
    tdevent.style.borderRight = "1px solid white";
    tdevent.style.fontWeight = "bold";
    for (x = 0; x < all_events[i].dates.length; x++) {
      tddates.innerHTML += `${all_events[i].dates[x]}<br>`;
    }

    tr.appendChild(tdevent);
    tr.appendChild(tddates);
    tbody.appendChild(tr);
  }

  eventstable.appendChild(tbody);
  eventsGrid.appendChild(eventstable);
}

menu.onclick = function () {
  console.log("clicked");
  hideMenu.classList.toggle("hide");
};
