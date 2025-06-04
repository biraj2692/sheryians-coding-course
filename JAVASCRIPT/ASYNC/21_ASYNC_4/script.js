// The first code which runs will be synchronus part. It runs on main thread, it is single thread so it will execute one at a time. When first the synchronus code is executed then it eill start to execute the async code.


// sync -> Call Stack -> Main Thread
// Async -> WebAPI -> CallBack Queue -> (Call Stack Empty) -> Call Stack -> Main Thread
console.log("Hey 1");

setTimeout(() => {
    console.log('Hey 2');
}, 2000);

console.log("Hey 3");
