//setInterval
// the setInterval method is
//similar to the setTimout, but it executes the function
// at a certain interval until it is cleared ( until we say stop)


let count = 0;
const interValId = setInterval(function() {
    console.log("hello from the other world")
    count++; // this is a increment
    if(count === 5){
        clearInterval(interValId);
    }

}, 1000); // function here is a anonymous function/ helper function

const listContainer = document.querySelector(".container");
let counter = 0;

