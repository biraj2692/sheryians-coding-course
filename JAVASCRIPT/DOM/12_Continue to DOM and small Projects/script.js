// Random Color Generator

let btn = document.querySelector("button");
let box = document.querySelector(".box");
let winnerName = document.querySelector(".winnerName")

let arr = [
    {
        team:'CSK',
        pri:'yellow',
        sec:'green'
    },
    {
        team:'RCB',
        pri:'red',
        sec:'black'
    },
    {
        team:'MI',
        pri:'blue',
        sec:'black'
    },
    {
        team:'SRH',
        pri:'orange',
        sec:'black'
    },
    {
        team:'KKR',
        pri:'purple',
        sec:'gold'
    }
];

btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * arr.length);
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

//   box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    winnerName.innerHTML = arr[num].team;
    winnerName.style.color = arr[num].sec;
    box.style.backgroundColor = arr[num].pri;


});
