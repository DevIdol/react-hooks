import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const UseReducerTwo = () => {
  const [count, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Count: {count.count}</h2>
      <button
        onClick={decrement}
        style={{ padding: "4px 8px", margin: "10px" }}
      >
        -
      </button>
      <button
        onClick={increment}
        style={{ padding: "4px 8px", margin: "10px" }}
      >
        +
      </button>
    </div>
  );
};

export default UseReducerTwo;
