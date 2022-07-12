"use strict";
// 2 Options:
// 1. traversing the DOM 
// 2. using selectors inside the element 

/* Strategy for traversing the DOM:
1. Select all the question buttons (question-btn)
2. Loop over the buttons
3. Add a click eventListener
4. Check who is the parent - Make sure the parent is a question?
    - ensure that the actual question is the parent of the parent
5. Show text to the parent

*/
/* OPTION 1 */
// //select all question buttons
// const btns = document.querySelectorAll('.question-btn'); // an array?

// // loop over the buttons
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // on click, get the overarching question (parent el of parent el)
//         // const question = e.currentTarget.parentElement.parentElement;
//         const question = e.currentTarget.parentElement
//         console.log(question)

//         // use the HTML dom element classList and the toggle method
//         // to toggle the class "show-text"
//         question.classList.toggle('show-text')
//     });
// });

/* OPTION 2 - using selectors inside the element
aka selecting within the element instead of 
traversing the entire dom  */
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question)
    // limit where we look - the first, second, or third - use question, not document
    // access the article
    const btn = question.querySelector('.question-btn');
    // console.log(btn)
    // for each button in each question, add an event listener
    // remember, question references the article
    // btn referennces the button that is in the article
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            // if the article does not match the article where i am
            // clicking the button, then close the prior article (aka remove the "show-text" class)
            // console.log(item)
            if(item !== question){
                item.classList.remove("show-text")
            }
        });
        question.classList.toggle("show-text")
    });
});