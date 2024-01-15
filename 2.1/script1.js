 //setInterval
// the setInterval method is
//similar to the setTimout, but it executes the function
// at a certain interval until it is cleared ( until we say stop)


// let count = 0;
// const interValId = setInterval(function() {
//     console.log("hello from the other world")
//     count++; // this is a increment
//     if(count === 5){
//         clearInterval(interValId);
//     }

// }, 1000); // function here is a anonymous function/ helper function

// const listContainer = document.querySelector(".container");
// let counter = 0;

// const interValId = setInterval (function() {
//     counter++; // add one after each second- its each second because i added 1000 = 1 second as the set interval
//     listContainer.innerHTML +=  `<li> Kenji ${counter} </li>`;

//     if (counter ===5) {
//         clearInterval(interValId);
//     }

// },1000);


// tasks
// let user = {
// }

// user.name = "Jonas";
// user.surName = "The Great";
// user.name = "Helene";

// delete user.name
// console.log(user);






// function isEmpty(obj) { // a function will only reuturn one thing
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             return false; // Object has at least one property
//         }
//     }
//     return true; // Object has no properties
// }

// let emptyObject = {};
// let nonEmptyObject = { key: 'value' };

// console.log(isEmpty(emptyObject)); // Output: true
// console.log(isEmpty(nonEmptyObject)); // Output: false


// let numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79];



// Given array of numbers
let numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79];

// Find the maximum and minimum values
let max = Math.max(...numbers);
let min = Math.min(...numbers);

// Filter positive and even numbers into a new array
let positiveEvenNumbers = numbers.filter(num => num > 0 && num % 2 === 0);

// Display the results on the screen
console.log("Original array:", numbers);
console.log("Maximum value:", max);
console.log("Minimum value:", min);
console.log("Positive and even numbers:", positiveEvenNumbers);

