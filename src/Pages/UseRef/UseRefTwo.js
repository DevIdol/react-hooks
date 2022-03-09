import React, { useRef, useState } from "react";

const UseRefTwo = () => {
  const [second, setSecond] = useState(0);

  const render = useRef(0);
  const timerId = useRef();
  console.log(timerId.current);
  const startTimer = () => {
    timerId.current = setInterval(() => {
      render.current++;
      // console.log(render.current)
      setSecond((pre) => pre + 1);
    }, 1000);

  };

  const resetTimer = () => {
    stopTimer();
    if (second) {
      // render.current++;
      setSecond(0);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h2>Timer: {second}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: "10px" }}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default UseRefTwo;
