


let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
fetch("https://api.github.com/users/asynchronousJavascriptor")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
})