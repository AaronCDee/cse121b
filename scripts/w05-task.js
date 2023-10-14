/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const nameElement = document.createElement("h3");
        nameElement.innerText = temple.templeName;
        
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        article.appendChild(nameElement);
        article.appendChild(imgElement);

        templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        templeList = await response.json();
    }else{
        alert("Could not fetch temples!");
        return false;
    }

    displayTemples(templeList);
}

/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}

/* sortBy Function */
function sortBy(temples){
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
            
        default:
            displayTemples(temples);
            break;
    }
}


getTemples();

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => { sortBy(templeList) });