import React, { useEffect, useState } from "react";

const UseEffectTwo = () => {
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCal(count + 1);
  }, [count]);

  return (
    <section>
      <h1>Count: {count}</h1>
      <button onClick={updateCount}>+</button>
      <h1>Calculation: {cal}</h1>
    </section>
  );
};

export default UseEffectTwo;
