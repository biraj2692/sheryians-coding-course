// Hoisting

// console.log(a);
// var a = 10;

// Immediately invoked function expression (IIFE)

// (function () {
//   console.log('Hello World');
// })();


// var ans = (function () {
//   var a = 10;
//   return {
//     set: function (value) {
//         a=value;
//     },
//     get: function () {
//         console.log(a);
         
//     }
//   };
// })();

// ans.set(100);
// ans.get();

// var shery = (function sherylib(){
//     return{
//         imageEffect: function(){
//             console.log('Image effect applied');
//         },
//         mouseFollower: function(){
//             console.log('Mouse follower applied');
//         }
//     }
// })();

// shery.imageEffect();
// shery.mouseFollower();  

// Higher Order Function (hofs)
// The function which returns function or accept the function paramter

// function abcd(){
//     return function () {
//         console.log('Heellloo from HOFs');
//     };
// }

// abcd()();

// function ab(fnc){
//     fnc();
// }

// ab(function () {
//     console.log('Hello');
// })


// Callback Function
// The Function that is passed in the parameter/arg is known as CallBack Function

// ab(function () {
//     console.log('Hello');
// })

// First class function
// Every function is a First Class Function, you can use it as a value
// var a = function () {
    
// };

// Pure Functions
// A function that does not chnage or modify the external state
// function add(a,b) {
//     return a+b;
// }

// console.log(add(2,3));

// Impure Function

// var tot = 0;
// function addtot(tot){
//     tot++;
// }
// console.log(addtot(tot));

// Global Scope

var globe = 0

// Local Scope
// Cannot be used outside the scope
// function a() {
//     let ab=0; // Local Variable
//     console.log(ab);
// };

// Closure

function par() {
    var a = 10;
    return function (){
        console.log(a);
    }
}

// console.log(par()());
par()();
