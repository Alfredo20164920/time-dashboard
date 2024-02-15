import json from "./../data/data.json" assert {type: 'json'};

const colors = {
    "Work": "#FF8B64",
    "Play": "#55C2E6",
    "Study": "#FF5E7D",
    "Exercise": "#4BCF82",
    "Social": "#7335D2",
    "Self Care": "#F1C75B",
}

const selectedOption = document.getElementsByClassName("option--active");
fetchData(selectedOption[0].id);

const tasksContainer = document.getElementById("tasks");

const weeklyOption = document.getElementById("weekly");
const dailyOption = document.getElementById("daily");
const monthlyOption = document.getElementById("monthly");

dailyOption.addEventListener("click", () => handleActive(dailyOption));
weeklyOption.addEventListener("click", () => handleActive(weeklyOption));
monthlyOption.addEventListener("click", () => handleActive(monthlyOption));

function fetchData (activeOption) {
    fetch(json)
    .then((response) => response.json())
    .then((data) => {

        tasksContainer.innerHTML = "";

        data.forEach((item) => {
            tasksContainer.append((buildData(item, activeOption)));
        });
    });
}

function handleActive(item) {
    const prevActiveOption = document.getElementsByClassName("option--active");
    prevActiveOption[0].classList.remove("option--active");
    item.classList.add("option--active");
    fetchData(item.id);
}





function buildData(item, option) {

    /* Section container */
    const container = document.createElement("section");
    container.style.backgroundColor = colors[item.title];
    container.className = "item";
    container.id = item.title.toLowerCase().replace(" ", "-");

    /* Head */
    const headContainer = document.createElement("div");
    headContainer.className = "item__head";
    const img = `<img src="./assets/svg/icon-${item.title.toLowerCase().replace(" ", "-")}.svg" alt="Icon task">`;

    headContainer.innerHTML = img;

    /* Information */
    const infoContainer = document.createElement("article");
    infoContainer.className = "item__info";
    const staticData = `
        <div>
            <h3 class="item__title">${item.title}</h3>
            <img src="./assets/svg/icon-ellipsis.svg" alt="Icon options">
        </div>
    `;
    infoContainer.innerHTML = staticData;

    const dynamicData = `
        <div>
            <h4 class="item__time">${item.timeframes[option].current}hrs</h4>
            <p class="item__prev-time">Previous - ${item.timeframes[option].previous}</p>
        </div>
    `;

    infoContainer.innerHTML += dynamicData;

    /* Join data */
    container.append(headContainer, infoContainer);
    return container;
}
