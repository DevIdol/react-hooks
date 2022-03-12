import React, { useMemo, useState } from 'react';

const UseMemoOne = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0)
    const calculation = useMemo(()=>  expensiveCalculation(count), [count])
    const addTodo = () => {
       return setTodos([...todos, "New Todo"])
    }
    const increment = () => {
        return setCount(pre => pre + 1)
    }
    return (
        <div style={{padding: "30px"}}>
            <h2>My Todos</h2>
            {todos.map((todo,index) => (<h2 key={index} >{todo}</h2>))}
            <button style={{padding: "4px 8px"}} onClick={addTodo}>Add Todo</button>
            <br /><br />
            <h2>{count}</h2>
            <button style={{padding: "4px 8px"}} onClick={increment}>+</button>
            <br />
            <h2>Calculation: {calculation}</h2>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for(let i = 0; i < 10; i++){
        num += 1;
        // console.log(i)
    }
    return num;
}
// console.log(expensiveCalculation(2))

export default UseMemoOne;