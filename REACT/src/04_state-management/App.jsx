import React, { useState } from "react";

const App = () => {
  let n = 12;
  let s = "String";
  let bool = true;
  let un = undefined;
  let nu = null;
  let arr = [<h3>This is H3 Tag</h3>, 1234,"hello", true, undefined, null];
  let obj = {
    id: "100",
    age: "21",
  };
// Object to Array
  const profiles = [{ nam: "Biraj", age: 19 }];
  const updatedProfiles = profiles.map((profile, index) => {
    return (
      <li key={index}>
        <span>Name: {profile.nam}</span>
        <span>Age: {profile.age}</span>
      </li>
    );
  });

  console.log(updatedProfiles);
// useState
  const [username, setUsername] = useState("Biraj");
  let bol = true;
  const changeHandler = () =>{
    if (bol) {
      setUsername("Shubham");
      count++;
    }
    else{
      setUsername("Biraj");
    }
    console.log(count);
    
  };

  return (
    <div>
      <h1>Datatype</h1>
      <h2>Number: {n}</h2>
      <h2>String: {s}</h2>
      <h2>undefined: {un}</h2>
      <h2>Null: {nu}</h2>
      <h2>Boolean: {bool}</h2>
      <h1>Array: {arr}</h1>
      <h2>Object: {obj.age} | {obj.id}</h2>
      <ol>{updatedProfiles}</ol>

      <h2>{username}</h2>
      <button onClick={changeHandler}>Change Name</button>
    </div>
  );
};

export default App;