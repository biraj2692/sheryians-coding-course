let users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1666298858421-3765c17bcf80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    nam: "Biraj Desai",  
    title: "Dev-loper",  
    skills: ["Calmness", "Backchodi", "Flirting"],  
    codeName: "Ladkibaaz"
  },
  {
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    nam: "Shubham Gupta",  
    title: "CEO",  
    skills: ["Dark", "Backchodi", "1 bandi"],  
    codeName: "Fat Ass"
  },
  {
    img: "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    nam: "Manav Shah",  
    title: "Cyber-Noob",  
    skills: ["Advise", "Backchodi", "Anger"],  
    codeName: "25th"
  },
  {
    img: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    nam: "Keval Dalal",  
    title: "USA",  
    skills: ["Pedo", "Backchodi", "Chai-Breaks"],  
    codeName: "Toxic"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1669850858872-7ed947bac5e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    nam: "Vraj Thakar",  
    title: "Dhanda",  
    skills: ["Ciggrete", "Backchodi", "Ciggrete"],  
    codeName: "Ciggrete"
  }
];

let main = document.querySelector(".main");
function addCard() {
    let sum = ''
    users.forEach(function(element,idx){
   sum += `<div class="card">
            <div class="first">
                <img src="${element.img}" alt="">
                <div class="nam">${element.nam}</div>
                <div class="title">${element.title}</div>
            </div>
            <div class="skills">
                <span>${element.skills[0]}</span>
                <span>${element.skills[1]}</span>
                <span>${element.skills[2]}</span>
            </div>
            <div class="codename">${element.codeName}</div>
            <button id=${idx}>Add Friend</button>
        </div>`;
});

main.innerHTML = sum;
}
addCard();
let button = document.querySelector('button');

main.addEventListener('click', (e) => {
  // Only act on button clicks
  if (e.target.tagName !== 'BUTTON') return;

  const btn = e.target;
  const idx = btn.id;
  const user = users[idx];

  // Decide which confirmation prompt to show
  const isFriend = btn.textContent === 'Friends';
  const promptMsg = isFriend
    ? `Do you want to unfriend ${user.nam}?`
    : `Do you want to be friends with ${user.nam}?`;

  if (confirm(promptMsg)) {
    // Toggle text
    btn.textContent = isFriend ? 'Add Friend' : 'Friends';
  }
});

