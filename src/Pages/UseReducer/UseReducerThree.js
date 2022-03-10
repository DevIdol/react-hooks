import React, { useReducer, useState } from "react";
import Todo from "./Todo";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: 'delete-todo'
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
        return state.map(todo => {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo
        })
        case ACTIONS.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
            default: 
            return state;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};
const UseReducerThree = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: "10px 4px", width: "300px" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch = {dispatch} />
      ))}
    </div>
  );
};

export default UseReducerThree;
