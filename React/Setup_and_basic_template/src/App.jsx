// ---- Day-4 ----

// import React, { useState } from "react";

// const App = () => {
//   let n = 12;
//   let s = "String";
//   let bool = true;
//   let un = undefined;
//   let nu = null;
//   let arr = [<h1>This is H1 Tag</h1>, 1234, helo, true, undefined, null];
//   let obj = {
//     id: "100",
//     age: "21",
//   };

//   const profiles = [{ nam: "Biraj", age: 19 }];
//   const updatedProfiles = profiles.map((profile, index) => {
//     return (
//       <li key={index}>
//         <span>Name: {profile.nam}</span>
//         <span>Age: {profile.age}</span>
//       </li>
//     );
//   });

//   console.log(updatedProfiles);


//   const [username, setUsername] = useState("Biraj");

//   const changeHandler = () =>{
//     setUsername("Shubham");
//   };

//   return (
//     <div>
//       <h1>Datatype</h1>
//       <h2>Number: {n}</h2>
//       <h2>String: {s}</h2>
//       <h2>undefined: {un}</h2>
//       <h2>Null: {nu}</h2>
//       <h2>Boolean: {bool}</h2>
//       <h2>Array: {arr}</h2>
//       <h2>Object: {obj.age || obj.id}</h2>
//       <ol>{updatedProfiles}</ol>


//       <h2>{username}</h2>
//       <button onClick={changeHandler}>Change Name</button>
//     </div>
//   );
// };

// export default App;
