

const App = () => {

  const handleClick = ()=>{
    alert("Button Clicked");
  }
  const handleparamClick= (msg) =>{
    alert(msg);
  }
  

  return (
    <>
    <div>App</div>
    <div>App</div>
    <button onClick={handleClick}>Button</button>
    <button onClick={() =>handleparamClick("Parameter Clicked")}>Click to para</button>
    </>
  )
}

export const x = "hello";
export const y = "world";
export default App;
