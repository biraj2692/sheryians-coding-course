let btn = document.querySelector('button')
let percent = document.querySelector('.percent')
let growth = document.querySelector('.growth')
let count = 0;

btn.addEventListener('click',()=>{
    console.log('hello');

    let slider = setInterval(()=>{
        count++;
        growth.style.width = count+'%';
        percent.innerHTML = count+'%'
    },50)

    setTimeout(() => {
        clearInterval(slider);
        btn.style.backgroundColor = 'lightgreen'
        btn.innerHTML='Downloaded'
        

    }, 5000);
})