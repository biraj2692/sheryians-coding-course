// What is Function
// Block of code which you can reuse and run at any point of time

// function nam() {
//     console.log('Hello world');
    
// }

// nam();

// Why function
//  If you dont want to use the function at the same time or need to reuse

// Why we need function
// To reuse the code block

// WET -> Write Everything more than Twice
// DRY -> Don't Repeat Yourself

// How to create a Function
function xyz(){
    // Code Block
}

let xyz1 = ()=>{
    // Code Block
}

// How to call a Function:

xyz1();

// What are parameters?


// How to pass the parameter?
function par(a,b,c,d) {
    console.log(a,b,c,d);
}
// How to pass arguments?
par(1,2,3,4)

// Fat Arrow Function:
let abc = ()=>{
    // Code Block
}

// Fat arrow with one para:
let abc1 = (a)=>{
    // Code Block
}

// fat arrow with implicit return
let abc2 = ()=> 10;
abc2(); 

// Rest Parameter:

function rest(...rest){
    console.log(rest);
}

rest(1,2,3,4,5,6,7,8,9,10);