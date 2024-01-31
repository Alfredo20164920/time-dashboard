const colors = {
    "Work": "#FF8B64",
    "Play": "#55C2E6",
    "Study": "#FF5E7D",
    "Exercise": "#4BCF82",
    "Social": "#7335D2",
    "Self Care": "#F1C75B",
}

const activeOption = document.getElementById("active");


function handleActive() {
    const options = document.getElementsByClassName("option");
    for(let i in options){
        
    }
}

handleActive()


function fetchData () {
    fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            buildStaticData(item);
        });
    });
}

fetchData();

function buildStaticData(item) {

    const parent = document.getElementById("dashboard");

    /* Section container */
    const container = document.createElement("section");
    container.style.backgroundColor = colors[item.title];
    container.className = "item";

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

    // const dynamicData = `
    //     <div>
    //         <h4 class="item__time">${item.timeframes.weekly.current}</h4>
    //         <p class="item__prev-time">Previous - ${item.timeframes.weekly.previous}</p>
    //     </div>
    // `;

    // infoContainer.innerHTML += dynamicData;

    /* Join data */
    container.append(headContainer, infoContainer)
    parent.append(container)
}


function dynamicData() {

}