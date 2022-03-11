import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      return { ...state, inputValue: action.payload };
      case "color":
          return {...state, color: !state.color}
    default:
      throw new Error();
  }
};
const UseReducerFour = () => {
  const [state, dispatch] = useReducer(reducer, {
    inputValue: "",
    color: false,
  });
  return (
    <div style={{padding: "30px"}}>
      <input
      style={{padding: "8px 2px", width: "240px"}}
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
      <br />
      <h2 style={{color: !state.color ? 'red' : 'green'}}>{state.inputValue}</h2>
      <br />
      <button style={{padding: "4px 8px"}} onClick={()=> dispatch({type: 'color'})}>Change Color</button>
    </div>
  );
};

export default UseReducerFour;
