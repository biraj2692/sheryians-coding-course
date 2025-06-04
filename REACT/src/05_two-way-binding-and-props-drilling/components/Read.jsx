import React from "react";

const Read = (props) => {
    const users = props.name;
    const setusers = props.setusers;    
    const renderUser = users.map((user, index) => {
    return <li key={index}>name: {user.name}</li>;
    });

    return (
    <div>
      <h1>User Data</h1>
      <h1>{renderUser}</h1>
    </div>
  );
};

export default Read;
