import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const UseCallbackOne = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div style={{ padding: "30px" }}>
      <Todo todos={todos} addTodo={addTodo} />
      <br />
      <hr />
      <br />
      <div>
        Count: {count}
        <br /> <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallbackOne;
