import React, { useEffect, useState } from "react";


const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.windowWidth)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    // return console.log('Clear')
  }, [count]);
  return (
    <section>
      <h1 style={{padding:"20px 0px"}}>{windowWidth}</h1>
      <h1>Count: {count}</h1>
    </section>
  );
};

export default UseEffectOne;
