import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      <br />
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
    </>
  );
};

export default memo(Todo);