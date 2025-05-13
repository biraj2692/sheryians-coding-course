# 📜 JavaScript Practice Questions & Solutions

This document contains **JavaScript questions with detailed solutions**.  
Click on any question to reveal the answer. 🚀  

---

## **1️⃣ Console & Basic Operations (5 Questions)**

<details>
  <summary><strong>1. Log "Hello, JavaScript!" to the console in 3 different ways.</strong></summary>

  ```js
  // Method 1: Using console.log()
  console.log("Hello, JavaScript!");

  // Method 2: Using console.warn()
  console.warn("Hello, JavaScript!");

  // Method 3: Using console.error()
  console.error("Hello, JavaScript!");
  ```
</details>

<details>
  <summary><strong>2. Perform 35 * 2 - (10 / 2) + 7 and log the result.</strong></summary>

  ```js
  let result = 35 * 2 - (10 / 2) + 7;
  console.log(result); // Output: 74
  ```
</details>

<details>
  <summary><strong>3. Log the data type of "123", 123, true, and null using typeof.</strong></summary>

  ```js
  console.log(typeof "123");  // "string"
  console.log(typeof 123);    // "number"
  console.log(typeof true);   // "boolean"
  console.log(typeof null);   // "object" (JavaScript quirk)
  ```
</details>

<details>
  <summary><strong>4. Write a program that swaps the values of two variables.</strong></summary>

  ```js
  let a = 10, b = 20;
  console.log("Before Swap:", "a =", a, ", b =", b);

  // Using a temporary variable
  let temp = a;
  a = b;
  b = temp;
  console.log("After Swap (Method 1):", "a =", a, ", b =", b);

  // Using array destructuring (modern JS)
  [a, b] = [10, 20];
  [a, b] = [b, a];
  console.log("After Swap (Method 2):", "a =", a, ", b =", b);
  ```
</details>

<details>
  <summary><strong>5. Use console.group() to organize logs into a group.</strong></summary>

  ```js
  console.group("User Info");
  console.log("Name: John Doe");
  console.log("Age: 25");
  console.log("City: New York");
  console.groupEnd();

  console.groupCollapsed("Collapsed Group Example");
  console.log("This content is collapsed by default.");
  console.groupEnd();
  ```
</details>

---

## **2️⃣ Variables & Data Types (5 Questions)**

<details>
  <summary><strong>6. Declare a const object, modify its properties, and log the updated object.</strong></summary>

  ```js
  const person = { name: "Alice", age: 25, city: "New York" };
  console.log("Before update:", person);

  // Modifying properties
  person.age = 26;
  person.city = "Los Angeles";

  // Adding a new property
  person.country = "USA";

  console.log("After update:", person);
  ```
</details>

<details>
  <summary><strong>7. Convert "50" (string) into a number using 3 different methods.</strong></summary>

  ```js
  let str = "50";

  // Method 1: Using Number()
  let num1 = Number(str);
  console.log(num1, typeof num1); // 50 "number"

  // Method 2: Using parseInt()
  let num2 = parseInt(str);
  console.log(num2, typeof num2); // 50 "number"

  // Method 3: Using Unary `+` Operator
  let num3 = +str;
  console.log(num3, typeof num3); // 50 "number"
  ```
</details>

<details>
  <summary><strong>8. Check if "JavaScript" contains "Script" without using .includes().</strong></summary>

  ```js
  let str = "JavaScript";

  // Method 1: Using .indexOf()
  console.log(str.indexOf("Script") !== -1); // true

  // Method 2: Using .search()
  console.log(str.search("Script") !== -1); // true
  ```
</details>

<details>
  <summary><strong>9. Create an array of 5 numbers and log the sum using .reduce().</strong></summary>

  ```js
  let numbers = [10, 20, 30, 40, 50];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Sum:", sum); // Sum: 150
  ```
</details>

<details>
  <summary><strong>10. Explain the difference between undefined, null, and NaN with examples.</strong></summary>

  | Concept | Meaning | Example |
  |---------|---------|---------|
  | `undefined` | A variable is declared but not assigned a value | `let x; console.log(x); // undefined` |
  | `null` | Represents an **intentional absence** of a value | `let y = null; console.log(y); // null` |
  | `NaN` (Not a Number) | A result of an invalid math operation | `console.log("hello" / 2); // NaN` |

  ```js
  let a; // Undefined
  console.log(a); // undefined

  let b = null; // Explicitly assigned null
  console.log(b); // null

  let c = "hello" / 2; // Invalid math operation
  console.log(c); // NaN
  console.log(typeof NaN); // "number" (weird JS quirk)
  ```
</details>

---

This document provides **clear explanations** and **collapsible answers** for easy reference. Happy coding! 🚀

# 📜 JavaScript Advanced HOFs, Callbacks, and Closures

<details>
  <summary><strong>Create a function that takes a callback and executes it after every `n` seconds indefinitely.</strong></summary>

  ```js
  function repeatFunction(callback, interval) {
      setInterval(callback, interval * 1000);
  }

  // Example usage
  repeatFunction(() => console.log("Repeating..."), 2); 
  // Logs "Repeating..." every 2 seconds
  ```
</details>

<details>
  <summary><strong>Implement a function that returns a function with a preset greeting (Closure).</strong></summary>

  ```js
  function greetUser(greeting) {
      return function (name) {
          return `${greeting}, ${name}!`;
      };
  }

  // Example usage
  const greetHello = greetUser("Hello");
  console.log(greetHello("Alice")); // "Hello, Alice!"
  console.log(greetHello("Bob"));   // "Hello, Bob!"
  ```
</details>

<details>
  <summary><strong>Implement a function that takes a callback and only executes it once (HOF + Closure).</strong></summary>

  ```js
  function once(fn) {
      let executed = false;
      return function (...args) {
          if (!executed) {
              executed = true;
              return fn(...args);
          }
      };
  }

  // Example usage
  const init = once(() => console.log("Initialized!"));
  init(); // "Initialized!"
  init(); // (No output)
  ```
</details>

<details>
  <summary><strong>Implement a function that throttles another function (HOF + Closures).</strong></summary>

  ```js
  function throttle(fn, delay) {
      let lastCall = 0;
      return function (...args) {
          let now = Date.now();
          if (now - lastCall >= delay) {
              lastCall = now;
              fn(...args);
          }
      };
  }

  // Example usage
  const throttledFn = throttle(() => console.log("Throttled Execution"), 2000);
  throttledFn();
  throttledFn();
  throttledFn(); // Only executes the first call, others are ignored until 2 sec passes
  ```
</details>

---
# 📜 JavaScript Advanced HOFs, Callbacks, and Closures


## **JavaScript Challenges on HOFs, Callbacks, and Closures**

<details>
  <summary><strong>Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).</strong></summary>

  ```js
  function delayedExecution(callback) {
      setTimeout(callback, 3000);
  }

  // Example usage
  delayedExecution(() => console.log("Executed after 3 seconds"));
  ```
</details>

<details>
  <summary><strong>Implement your own version of `.map()` as a higher-order function.</strong></summary>

  ```js
  function customMap(array, callback) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
          result.push(callback(array[i], i, array)); // Apply callback to each element
      }
      return result;
  }

  // Example usage
  console.log(customMap([1, 2, 3], num => num * 2)); 
  // Output: [2, 4, 6]
  ```
</details>

<details>
  <summary><strong>Write a function that uses closures to create a counter.</strong></summary>

  ```js
  function createCounter() {
      let count = 0;
      return function() { // Closure retains access to `count`
          return ++count;
      };
  }

  // Example usage
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  ```
</details>

<details>
  <summary><strong>Implement a function that limits how many times another function can be called (Closure + HOF).</strong></summary>

  ```js
  function limit(fn, limit) {
      let calledtimes = 0;
      return function () {
          if (calledtimes < limit) {
              calledtimes++;
              fn();
          }
      };
  }

  // Example usage
  let fn = limit(() => console.log("hello"), 3);
  fn(); // "hello"
  fn(); // "hello"
  fn(); // "hello"
  fn(); // (No output, limit reached)
  ```
</details>

---