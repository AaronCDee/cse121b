/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Aaron Delate";
let currentYear = new Date().getFullYear();
let profilePicture = "images/cse121b-me.jpeg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("home").querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);




/* Step 5 - Array */
let favFoods = ["Pasta", "Pizza", "Burgers"];
foodElement.innerHTML = favFoods.join(", ");
let newFavFood = "Wraps";
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;






