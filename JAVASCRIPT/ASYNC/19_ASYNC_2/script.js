// function getDetails(userName, cb) {
//     //...api call to get data
//     setTimeout(function () {
//         console.log('Sending Request...');
//     },1000);

//     setTimeout(function () {
//         console.log('Fetching Data...');
//     },3000);

//     setTimeout(function () {
//        cb();
//     },5000);
// }

// getDetails("biraj",function () {
//     console.log('Data Saved in Gallery');
    
// })


// Call Back Hell or Christmas Tree Effect
// function stepOne(cb) {
//     console.log('Step one');
//     cb();
// }
// function stepTwo(cb) {
//     console.log('Step two');
//     cb();
// }
// function stepThree(cb) {
//     console.log('Step three');
//     cb();
// }

// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log('All Callbacks Called');
//         })
//     })
// })

// Promises:

// const pr = new Promise(function (res,rej) {
//     console.log('Sending Data...');
//     console.log('Verifying Data...');
//     console.log('Error in Data...');
//     rej();
// });

// pr.then(function () {
//     console.log('resolved');
// })

// pr.catch(function () {
//     console.log('rejected');
    
// })


function stepOne(cb) {
    return new Promise(function (res,rej) {
        console.log('Step one');
        res();
    });
}
function stepTwo(cb) {
    return new Promise(function (res,rej) {
        console.log('Step Two');
        res();
    });
}
function stepThree(cb) {
    return new Promise(function (res,rej) {
        console.log('Step Three');
        res();
    });
}

stepOne().then(stepTwo).then(stepThree).then(function () {
    console.log("All steps completed")
})

function fetchData() {
  return new Promise((resolve, reject) => {
    // Your code here
  });
}

// Usage
fetchData().then(result => {
  console.log(result); // Should log "Data fetched successfully" after 2 seconds
}).catch(error => {
  console.log(error);
});
