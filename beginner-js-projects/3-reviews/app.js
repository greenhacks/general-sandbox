"use strict";

// setting up data locally: have an array of objects with reviews
// NOTE: We would usually get this review data using Ajax requests, and
// you'd perform an HTTP request (but that has not been covered yet).
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item - a global variable
let currentItem = 0; // index of item

// once the document loads, select whatever item in the array

// load initial item by adding an event listener on the window object
window.addEventListener('DOMContentLoaded', function() {
    // invoke callback
    showPerson();
}); 

// show person based on item

function showPerson (){
    const item = reviews[currentItem];
    // get the information for each item once the document loads
    img.src = item.img; // same thing as reviews[currentitem].img - the property of an object
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) { // that reflects the actual last item in the array
        currentItem = 0;
    } 
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) { // index cannot be negative
        currentItem = reviews.length - 1; // go to the final item
    } 
    showPerson();
});

// show random person
randomBtn.addEventListener('click', function(){
    // remember how we used random number
    // remember array length
    // use showPerson with the item
    const getRandomNumber = function (){
            return Math.floor(Math.random() * reviews.length)
        };
    currentItem = getRandomNumber();
    showPerson()
    });