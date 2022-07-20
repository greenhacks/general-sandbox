"use strict";

/*
important to understand - the general concept of
how the toggle works.

start by getting the total height of our links - this means
that we are interested in the links class; use the Inspector tool

we are looking for:
1) the nav button
2) the links

toggle setup:
when we click the button, we will check to see if .show-links is already there.
if it's there, we remove it.

*/


// classList - shows/gets all classes that the element has
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

// set up an event listener to toggle

navToggle.addEventListener('click', function (){
    // console.log(links.classList); // provides the list of classes that the links currently have
    // console.log(links.classList.contains('random')); // returns false because random class is not in the HTML
    console.log(links.classList.contains("links")); // returns true

    // because links exist, we want to remove the class - can do so with an if statement
    // if the show-links class is not in the list, we want to add it

    // METHOD 1 - commented out b/c of METHOD 2
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // } else{
    //     links.classList.add('show-links');
    // }

    // METHOD 2 - the one-liner using the toggle method
    // takes a class
    // if the class is there, then it removes it. 
    // if the class is not there, then it adds it

    links.classList.toggle('show-links')
});