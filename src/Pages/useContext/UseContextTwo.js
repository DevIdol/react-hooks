import React, { createContext, useContext } from "react";
const Context = createContext();
const UseContextTwo = () => {
  return (
    <Context.Provider value={"Joseph Thang"}>
      <div style={{ padding: "30px" }}>
        <ComponentOne age={22} />
      </div>
    </Context.Provider>
  );
};

const ComponentOne = ({ age }) => (
  <h2>
    <ComponentTwo />
    Age: {age}
  </h2>
);

const ComponentTwo = () => {
  const context = useContext(Context);
  return <h2>Name: {context}</h2>;
};

export default UseContextTwo;
