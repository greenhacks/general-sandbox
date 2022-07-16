"use strict";

// set initial count as 0
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// loop over the buttons

btns.forEach(function (btn) {
    // on click, use the event (e) object to get the item & classes
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList

        // if the item clicked has the 'decrease' class (aka the 'decrease' class increases),
        // decrease the count
        if (styles.contains('decrease')) {
            count--;
        }
        
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        // style is a property
        if (count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count === 0){
            value.style.color = 'black';
        }

        value.textContent = count;
    });
});