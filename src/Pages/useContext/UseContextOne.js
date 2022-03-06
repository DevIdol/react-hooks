import React, { createContext, useState } from "react";

const UserContext = createContext();

const UseContextOne = () => {
  let name = "Mg Mg";
  const [user, setUser] = useState(name);
  const changeUser = () => {
    setUser("Ko Ko");
  };

  return (
    <UserContext.Provider value={user}>
      <div style={{ padding: "30px" }}>
        <UserTwo />
        <button onClick={changeUser}>Change Name</button>
      </div>
    </UserContext.Provider>
  );
};

const UserTwo = () => {
  return (
    <div>
      <h3>User Two</h3>
      <UserThree />
    </div>
  );
};

const UserThree = () => (
  <UserContext.Consumer>{(value) => <h3> {value}</h3>}</UserContext.Consumer>
);

export default UseContextOne;
