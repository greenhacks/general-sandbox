"use strict;"

const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function() {
    // every time the button is clicked, the background color changes
    // note: the body is the property on the document object
    // console.log(document.body)

    // hoisting taking place here?
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // get background color
    document.body.style.backgroundColor = colors[randomNumber];
    
    // get text color
    color.textContent = colors[randomNumber]
});

// get random number between 0 and 3
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
};