import React, { useState } from "react";

const Create = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = { fullname, age };
        console.log(newUser); 
    };
    const [fullname, setFullname] = useState(" ");
    const [age, setAge] = useState();
    

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
    </div>
  );
};

export default Create;
