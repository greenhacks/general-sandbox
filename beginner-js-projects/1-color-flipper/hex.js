"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
    "D", "E", "F"];
// e.g. #F15025 --> example of knowing what information we need and
// how it's structured
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // in order to get the hex value, we must have a hash to start with
    let hexColor = "#"

    // loop over the hex array six times because there are six elements
    // after the hash
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    };

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})

// generate a random number that will be used to compile the hexColor variable
function getRandomNumber (){
    return Math.floor(Math.random() * hex.length)
}