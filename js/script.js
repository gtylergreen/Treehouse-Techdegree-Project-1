/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//an array of objects including quote, source, citation, year
const quotes = [
  {
    quote: "The only way to prove that you’re a good sport is to lose.",
    source: "Ernie Banks",
    team: "Chicago Cubs"
  },
  {
    quote: "Persistence can change failure into extraordinary achievement.",
    source: "Marv Levy",
    team: "Buffalo Bills"
  },
  {
    quote: "If you fail to prepare, you’re prepared to fail.",
    source: "Mark Spitz",
  },
  {
    quote: "When you win, say nothing, when you lose, say less.",
    source: "Paul Brown",
    team: "Cleveland Browns"
  },
  {
    quote: "Your biggest opponent isn’t the other guy. It’s human nature.",
    source: "Bobby Knight",
    team: "University of Indiana"
  },
  {
    quote: "If we sit here and worry about what people think of us, then we don't have a chance. You still gotta come through Chicago. Utah. Indiana. I don't care what happens today. I don't care what happened in the last series. You still gotta come through Chicago. We will win game 7.",
    source: "Michael Jordan",
    year: 1998,
    team: "Chicago Bulls"
  },
  {
    quote: "It ain’t about how hard you can hit. It’s about how hard you can get hit, and keep moving forward.",
    source: "Sylvester Stallone",
    citation: "Rocky Balboa"
  }
];


//function to generate a random number and multiply it by the length of the quotes array to provide
//a number between 0-6
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  //sets the quote at the index value of the random number to a variable
  let currentQuote = quotes[randomNumber];
  //returns the variable
  return currentQuote;
}

//function to change the background color of the body element
const backgroundColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  //sets a number value to each color in rgb format for CSS
  let rgbColor = `rgb(${red}, ${green}, ${blue})`
  //had to look up how to change set the background color: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  document.body.style.backgroundColor = rgbColor;
}

// function to call the random quote function, generate html, check existence of citation
// year, and team, and then print the current quote to the page
const printQuote = () => {
  //calls getRandomQuote function
  let randomQuote = getRandomQuote();
  //sets the working template literal to a variable
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`
  //checks to see if a citation exists on the current quote and appends appropriate text if it does
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  //checks to see if a year exists on the current quote and appends appropriate text if it does
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  //checks to see if a team exists on the current quote and creates a new span element if it does
  if (randomQuote.team) {
    html += `<span> | ${randomQuote.team}</span>`
}
  //closes the template literal
  html += `</p>`
  //prints the current quote and properties to the page
  document.getElementById('quote-box').innerHTML = html; 
  //executes the background color function
  backgroundColor();
}

//function to refresh the display every 10 seconds
//had to look this up: https://www.w3schools.com/jsref/met_win_setinterval.asp
let refreshQuote = () => {
  refresh = setInterval(printQuote, 10000)
}

//calls the refresh quote
refreshQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);