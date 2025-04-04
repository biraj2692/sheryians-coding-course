// Left Rotation by K

// Brute Force
// console.log(arr);

// let k =7;

// if (k > arr.length) {
//     k = k%arr.length;
// }
// for (let j = 0; j <= k ; j++) {
//     let copy = arr[0]
//     for (let i = 0; i  < array.length-1; i++) {
//         arr[i] = arr[i+1]

//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr);

// ---2nd Method

// let temp = new Array(arr.length);
// let k = 7;

// if (k > arr.length) {
//   k = k % arr.length;
// }

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp)

// 3rd Method

let arr = [1, 2, 3, 4, 5];
let k = 7;
k = k % arr.length;

reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length - 1);

function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  }
}

// Right Rotation by K
// reverse(arr, 0, arr.length - 1);
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
