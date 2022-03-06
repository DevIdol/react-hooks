import React, { useEffect, useState } from "react";

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(typeof windowSize);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    // return console.log('Clear')
  }, [count]);

  const handleSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  return (
    <section>
      <h1 style={{ padding: "20px 0px" }}>
        {" "}
        Window Width: {windowSize.width} Window Height: {windowSize.height}
      </h1>
      <h1>Count: {count}</h1>
    </section>
  );
};

export default UseEffectOne;
