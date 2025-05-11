// Callback Function

// The Function that is passed in the parameter/arg is known as CallBack Function

// function abcd(){

// }

// abcd(function (){})

// Higher Order Function (hofs)
// The function which returns function or accept the function paramter.

// function ab(fnc){
//     fnc();
// }

// ab(function () {
//     console.log('Hello');
// })

// Closure
//  ek aisa function jo return kare dusra function and jo fnc return hua hai usmai parent ka variable use ho raha ho.

// function par() {
//     var a = 10;
//     return function (){
//         console.log(a);
//     }
// }

// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

function caller(fn){
    setTimeout(fn,3000);
}

caller(function(){
    console.log('Hello');
})

// Implement your own version of `.map()` as a higher-order function.

a = [1,2,3,4,5];

function ownMap(arr, fn) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(fn(arr[i]));
    }
    return newarr;
}

let ans = ownMap(a, function (value) {
    return value*2;
})

// Write a function that uses closures to create a counter.

function counter(){
    let count = 0;
    return function childCounter(){
        count++;
        console.log(count);
    };
}

let count = counter();
count();
count();
count();

// Implement a function that limits how many times another function can be called (Closure + HOF).


function functionLimiter(fn, lim){
    let call = 0
    return function(){
        if(call < lim){
            call++;
            fn();
        }
        else{
            console.log("Limit reached");
        }
    }
}

let limiter = functionLimiter(function () {
    console.log("Hello");
}, 3);

limiter();
limiter();
limiter();
limiter();


// Create a function that takes a callback and executes it after every `n` seconds indefinitely.

function indefiniteFunction(n,fn){
    setInterval(() => {
            fn();
        }, n*1000);
}

// let indefinite = indefiniteFunction(3,() => {
//     console.log('Hello')
// })


// Implement a function that returns a function with a preset greeting (Closure).


function greet(temp){
    return function (name) {
        console.log(`${temp} ${name}`); 
    }
}

greet("Hello")("Biraj");

let indianGreeter = greet("Namaste!")
let usCanadaGreeter = greet("Hey!")
let spainGreeter = greet("Hola!")

indianGreeter("Biraj")
usCanadaGreeter("Biraj")
spainGreeter("Biraj")

// Implement a function that takes a callback and only executes it once (HOF + Closure).

function oneTimeRunner(fnc){
    let runner = false;
    return function () {
        if (!runner) {
            runner = true;
            fnc();
        }
    }
}

let onceRunner = oneTimeRunner(function () {
    console.log('Hello for only one time');
})

onceRunner();
onceRunner();
onceRunner();

// Implement a function that throttles another function (HOF + Closures).

function throttles(fn,delay) {
    let lasCall = 0;
    return function () {
        let currentTime = Date.now();
        if (currentTime - lasCall >= delay) {
            lasCall = currentTime;
            fn();
        }
    }
}


let throt = throttles(function () {
    console.log("Hellloooo after every 1 sec");
},1000)

throt();
throt();
throt();
throt();
throt();