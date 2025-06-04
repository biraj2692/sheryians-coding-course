import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Biraj", age: 22 },
    { name: "Ankur", age: 22 },
    { name: "Shubham", age: 22 },
  ]);

  return (
    <div>
      <Create />
      <Read name={users} setusers={setUsers} />
    </div>
  );
};

export default App;
