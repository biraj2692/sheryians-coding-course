// DOM -> Document Object Model

// 4 Pillars of DOM
// Selection of Element
// Chnaging HTML
// Chnaging CSS
// Event Listener

// let h1 = document.querySelector('h1'); // h1, .class, #id, h1 #id
// // Selects only 1st one


// h1.addEventListener('click', () => {
//     h1.innerHTML = 'Hello biraj from DOM'
//     h1.style.color = 'blue'
//     console.log("Hello from addEventListener");
// })

// var box = document.getElementById('box');
// // var clas = document.getElementsByClassName('');

// var qsa = document.querySelectorAll('h1');
// console.log(qsa[0]);
// qsa[0].innnerHTML = 'Chnaged the 3rd one';


// box.innerHTML = '<h1>Changed</h1>'
// box.textContent = '<h1>Changed</h1>'


// function chnageBox() {
//     div.innerHTML = 'changed';
//     div.style.color = 'red'
// }

// let button = document.querySelector('button')
// let div = document.querySelector('#box')
// console.log(div);

// button.addEventListener('click', ()=>{
//     div.innerHTML = '<h1>Hello from Event Listener</h1>'
// })
