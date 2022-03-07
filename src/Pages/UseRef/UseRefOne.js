import React, { useEffect, useRef, useState } from "react";

const UseRefOne = () => {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);
  const preInputValue = useRef("");
  const inputElement = useRef();

  const focusInput = ()=> inputElement.current.focus()

  useEffect(() => {
    count.current++;
    preInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div style={{ padding: "30px" }}>
      <input
        type="text"
        ref={inputElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focusInput} >Foucs</button>
      <h2>Value Count: {count.current}</h2>
      <h2>Input Value: {inputValue}</h2>
      <h2>Previous Value: {preInputValue.current}</h2>
    </div>
  );
};

export default UseRefOne;
