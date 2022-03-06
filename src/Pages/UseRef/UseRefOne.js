import React, { useEffect, useRef, useState } from "react";

const UseRefOne = () => {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div style={{padding: "30px"}}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Value Count: {count.current}</h2>
    </div>
  );
};

export default UseRefOne;
