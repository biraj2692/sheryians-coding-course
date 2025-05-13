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

// Day 5

import React, { useState } from "react";

const App = () => {
  const [users, setusers] = useState([
    { name: "Biraj", age: 22 },
    { name: "Ankur", age: 22 },
    { name: "Shubham", age: 22 },
  ]);

  const renderUser = users.map((users, index) => {
    return <li key={index}>name: {users.name}</li>;
  });

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
      <h1>User Data</h1>
      <h1>{renderUser}</h1>
    </div>
  );
};

export default App;
