// 1. Simulate Food Delivery Function

// Task: Create a Food Function orderFood that returns promise. It should resolve after 2 sec with "Pizza Delivered"

// Bonus: Add a Chance to reject with " Delivery Failed".

// function orderFood() {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             let chance = Math.random()>0.7;
//             if (chance) res();
//             else rej();
//         }, 2000);
//     })
// }

// orderFood().then(()=>{console.log("Delivered")}).catch(()=>{console.log("Not Delivered")})

// 2. Chained Promises: User -> Post -> Comment
// Task:
// 1. Create getUser() -> resolves with (id and name)
// 2. getPost(userID) -> resolves with list of Post Titles
// 3. getComment(postID) -> resole with customElements
// chain them together using .then() and log final output.

// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//         res({ id: "1", name: "Biraj" });
//     }, 2000);
//   });
// }
// function getPosts(id) {
//   return new Promise((res, rej) => {
//       setTimeout(() => {
//           res(["title-1", "title-2"]);
//     }, 1000);
// });
// }

// function getComments(id) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//         res(["cmt-1", "cmt-2"]);
//     }, 1000);
//   });
// }

// getUser()
//   .then((data) => {
//     console.log(data);
//     return getPosts(data.id);
// })
// .then(function (title) {
//     console.log(title[0]);
//     return getComments(title[0]);
// })
// .then((cmt)=>{
//     console.log(cmt);
// })
// .finally(()=>{
//     console.log('All Data Fetched');
    
// })


// 3. Fake API Delay

// Task:
// Write a function fakeApiCall(endpoint) that:
//     Accepts a string like users or post
//     Resolves with dummy data after certain delay(1-3 sec)

function fakeApiCall(endpoint) {
    const data = {
        users : ["Biraj", "Manav",  "Shubham","Keval", "Jaineel", "Vraj"],
        posts : ["Great" , "God", "Blast", "Non-Stop","Who", "Money"]
    }

    let delay = Math.random()* 2000 + 1000 

    return new Promise((res,rej) => {
        setTimeout(() => {
            res(data[endpoint]);
        }, delay);
    });
}

fakeApiCall("users").then((data)=>{
    console.log(data); 
});
fakeApiCall("posts").then((data)=>{
    console.log(data);
})