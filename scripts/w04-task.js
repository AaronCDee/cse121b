/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Aaron Delate",
    photo: "./images/cse121b-me.jpeg",
    favoriteFoods: [
        "Chicken nuggets", 
        "Chicken tenders", 
        "Whopper Burger", 
        "Pizza"
    ],
    hobbies: [
        "Singing",
        "Video games",
        "Skateboarding"
    ],
    placesLived: [

    ]

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "London, UK",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Johannesburg, SA",
        length: "25 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
let photo = document.getElementById("photo");
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
let favFoodList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let foodLi = document.createElement("li");
    foodLi.textContent = food;
    favFoodList.appendChild(foodLi);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    let hobbyLi = document.createElement("li");
    hobbyLi.textContent = hobby;
    hobbiesList.appendChild(hobbyLi);
});

/* Places Lived DataList */
let placesList = document.getElementById("places-lived");
myProfile.placesLived.forEach(placeObj => {
    let placeDt = document.createElement("dt");
    placeDt.textContent = placeObj.place;
    placesList.appendChild(placeDt);
    
    let lengthDd = document.createElement("dd");
    lengthDd.textContent = placeObj.length;
    placesList.appendChild(lengthDd);
});

