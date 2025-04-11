// Q.39 take an array of string and a string Prefix and return the count of string that starts with the given prefix

// let word = ['attemtion' , 'people','attire','hello','attend']
// let s ='at'
// let count = 0
// for(i = 0;i<word.length;i++){
//     if(word[i].startsWith(s)){
//         count++;
//     }
// }

// console.log(count)


// Q.40 Capitailize the first and last character of each word in the sentence and print the sentence

let s ="hello bhai kaise ho";
let ans = "";

let arrStr = s.split(" ");
for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i];
    if (word.length <=2 ) ans = ans + word.toUpperCase() + " ";

    else{
        ans = ans + word.charAt(0).toUpperCase() +
        word.substring(1,word.length-1) + 
        word.charAt(word.length-1).toUpperCase()+" ";
    }

}
console.log(ans);


