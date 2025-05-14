// setTimeout(() => {}, 1000); For Delay

// setInterval(() => {}, 2000); For repeation with time interval

// clearInterval(); To stop the setInterval.

console.log("Before setTimeout");
setTimeout(() => {
    console.log("After 5 seconds...")
}, 5000);
console.log("After setTimeout");

var i =0
let setInt = setInterval(() => {
    console.log(i); // Infinite without the clearInterval
    i++;
}, 100);

setTimeout(() => {
    clearInterval(setInt);
    console.log('This will clear the interval')
    
}, 3000);