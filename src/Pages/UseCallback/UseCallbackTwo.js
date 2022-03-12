import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackTwo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (arg) => {
      return [number + arg, number + 1 + arg, number + 2 + arg];
    },
    [number]
  );
  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "30px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button
        style={{ padding: "4px 8px" }}
        onClick={() => setDark((pre) => !pre)}
      >
        ToggleTheme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackTwo;
