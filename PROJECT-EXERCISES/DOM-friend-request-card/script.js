let btn = document.querySelector('button');
let flag = 0;
btn.addEventListener('click', ()=>{
    if (flag == 0) {
        btn.innerHTML= 'Adding Friend...';
            btn.style.backgroundColor = 'gold'
            btn.style.color='black'

        setTimeout(()=>{
            btn.innerHTML= 'Remove Friend';
            btn.style.backgroundColor = 'red'
            flag = 1;
        },5000);
    }else{
        btn.innerHTML= 'Add Friend';
        btn.style.backgroundColor = 'green'
        flag = 0;
    }
})