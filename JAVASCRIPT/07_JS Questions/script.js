// ------- Console & Basic Operations (5 Questions) -------

// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

// ANSWER:
console.log('Hello, Javasciript!');
console.info('Hello, Javasciript!');
console.warn('Hello, Javasciript!');
console.error('Hello, Javasciript!');
console.error('Hello, Javasciript!');

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

// ANSWER:
console.log(35 * 2 - (10 / 2) + 7);

// 3. Log the data type of "123", 123, true, and null using typeof.

// ANSWER:
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof true);

// 4. Write a program that swaps the values of two variables.

// ANSWER:
let a =10;
let b =20;
let temp = a;
a = b;
b = temp;


// [a,b] = [b,a] Without the need of 3rd variable   

// a = a + b;
// b = a - b;
// a = a - b;
 
// 5. Use console.group() to organize logs into a group.

console.group("Hisab");
    console.log('100');
    console.log('500');
    console.log('10');
console.groupEnd();

// 6. Declare a const object, modify its properties, and log the updated object.

const obj = {
    name:"biraj",
    age:22,
    email:"biraj@yopmail.com"
}

// Object.freeze(obj); // This will freeze the object and we will not be able to change the objects.

obj.age = 21;
console.log(obj)

// 7. Convert "50" (string) into a number using 3 different methods.

let num = "50"

console.log(typeof Number(num));
console.log(typeof parseInt(num));
console.log(typeof +num);


// 8. Check if "JavaScript" contains "Script" without using .includes().

let str = "Javascript"

console.log(str.includes("script"))
console.log(str.indexOf("script") !== -1)

// 9. Create an array of 5 numbers and log the sum using .reduce().

let arr = [1,2,3,4,5]

var ans = arr.reduce(function (acc,value) {
    return acc + value;
},0)

console.log(ans);

// 10. Explain the difference between undefined, null, and NaN with examples.

// undefined -> When variable is initalized but there is no value in it.
// null -> When there is no value
// NaN -> Mathematical calculation error


// 11. Write a for loop to print numbers from 10 to 1 in reverse.

var i =10;

while (i>0) {
    console.log(i);
    i--;
}

// 12. Use a while loop to print multiples of 3 from 3 to 30.

// let x = 3
// while (x<31) {
//     console.log(x);
//     x+=3;
// }

// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop. 

let sum = 0;
for(let i=1;i<=100;i++){
    sum=sum + i;
}
console.log(sum);

// 14. Create a nested loop to print a star pattern.


// 15. Use a for...of loop to iterate over the string "JavaScript".

let str1 = "JavaScript"

for(var i of str1){
    console.log(i);
}

// 16. Remove duplicate values from an array.

let arrd = [1,2,4,5,6,1,2,2,21,1,1]

let arrs = [... new Set(arrd)];
console.log(arrs);

// 17. Find the second largest number in an array.

let arrsl = [1,2,3,4,56,67,23,1,2,5,3,24,34,4,242,3543,234,5342,2,2,234,4325]

console.log([...new Set(arrsl)].sort(function (a,b) {
    // return a-b; //ascending
    return b-a; //descending
})[1]);

// 18. Sort an array in descending order.

let ansde=arrsl.sort((a,b) => b-a)

// 19. Reverse an array without using .reverse().

let arrrev = [];

for (let i = arrsl.length-9; i >= 0; i--) {
    arrrev.push(arrsl[i]);
    
}

// 20. Find the most frequent element in an array.

let varfe = [1,1,2,2,3,4,4,5,5,5,5]

var objfe ={}

varfe.forEach(function (value){
    objfe[value] === undefined ? (objfe[value]=1): objfe[value]++
});

console.log(objfe)
