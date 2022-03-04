import React, { useState } from "react";

const UseStateOne = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
    // setCount((preState) => {
    //     return preState -1 ;
    // })
  };
  const incrementCount = () => {
    setCount(count + 1);
    // setCount((preState) => {
    //     return preState + 1 ;
    // })
  };
  return (
    <section>
      <h1 style={{ paddingBottom: "6px" }}>Count: {count}</h1>
      <button
        style={{ padding: "4px 14px", margin: "2px" }}
        onClick={decrementCount}
      >
        -
      </button>
      <button
        style={{ padding: "4px 14px", margin: "2px" }}
        onClick={incrementCount}
      >
        +
      </button>
    </section>
  );
};

export default UseStateOne;
