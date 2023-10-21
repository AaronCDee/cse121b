import { generateRandomNumber } from "./randomNumberGenerator.js";
// Constants
const quotesUri = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const randomColors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];
const coloredContainer = document.getElementById("colored-container");
const genBtn = document.getElementById("gen-btn")
const quoteTextContainer = document.getElementById("quote-text");
const authorTextContainer = document.getElementById("author-text");
const authorText = document.getElementById("author-text-span");
const quoteText = document.getElementById("quote-text-span");
// Variables
let quotes = [];
let themeColor = '#16a085';
let quotesFetched = false;



document.addEventListener("DOMContentLoaded", async () => {
    await fetchQuoteData();

    setRandomQuote();
    setRandomTheme();

    if(quotesFetched){
        genBtn.disabled = false;
    }else{
        genBtn.innerText = "No Quotes Available";
    }
    
    genBtn.addEventListener("click", () => {
        setRandomTheme();
        setRandomQuote();
    });
});

const setRandomTheme = () => {
    let randomNumber = generateRandomNumber(randomColors.length - 1);
    themeColor = randomColors.filter((color, index) => index == randomNumber)[0];
    coloredContainer.style.backgroundColor = themeColor;
    genBtn.style.backgroundColor = themeColor;
    quoteTextContainer.style.color = themeColor;
    authorTextContainer.style.color = themeColor;
}

const setRandomQuote = () => {
    let randomNumber = generateRandomNumber(quotes.length - 1);
    let randomQuote = quotes.filter((quote, index) => index == randomNumber)[0];
    quoteText.innerText = randomQuote.quote;
    authorText.innerText = randomQuote.author;
}


const fetchQuoteData = async () => {
    let response = await fetch(quotesUri).catch(err => alert(err));
    let result = await response.json();
    quotes = result.quotes;
    quotesFetched = true;
}