let arr = [10, 20, 30, 40, 40, 5];

arr.forEach((e) => {
  console.log(e);
});

let obj = [
  {
    user: "Biraj",
    age: 20,
    isMarried: false,
    image:
      "https://plus.unsplash.com/premium_photo-1666298858421-3765c17bcf80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "Shubham",
    age: 22,
    isMarried: true,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "manav",
    age: 23,
    isMarried: false,
    image:
      "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "keval",
    age: 24,
    isMarried: true,
    image:
      "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "vraj",
    age: 23,
    isMarried: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669850858872-7ed947bac5e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let body = document.querySelector("body");

function heroFunction() {
  let sum = "";
  obj.forEach(function (ele, idx) {
    sum += `<div class="card">
        <img src="${ele.image}" alt="">
        <h1>${ele.user}</h1>
        <h5>${ele.age}</h5>
        <h5>${ele.status}</h5>
        <h4>is Married: ${ele.isMarried}</h4>
        <button id=${idx} type="button">Add Friend</button>
    </div>`;
  });
  body.innerHTML = sum;
}

heroFunction();

body.addEventListener("click", function (dets) {
  let gold = obj[dets.target.id];
  gold.user = 'Sunny';
  heroFunction()
  console.log(obj);
  
});
