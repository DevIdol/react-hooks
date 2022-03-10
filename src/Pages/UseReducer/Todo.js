import React from 'react';
import { ACTIONS } from './UseReducerThree';

const Todo = ({todo, dispatch}) => {
    return (
        <div style={{margin: "10px"}}>
            <span style={{color: todo.complete ? "grey" : "green"}}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    );
};

export default Todo;