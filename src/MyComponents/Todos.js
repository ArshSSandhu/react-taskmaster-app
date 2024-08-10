import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
let myStyle ={
  minHeight: "70vh",
  margin: "40px auto"
}

  return (
    <div className="container todos-container" style={myStyle}>
      <div className="box-color">
      <h3 style={{ textAlign: 'center' }} className=" my-3">Tasks List</h3> <hr/>

      </div>
      
      {props.todos.length === 0 ? "No tasks to display" : 
        props.todos.map((todo) => {
          return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
            </>
          )
        })
      }
    </div>
  );
}

export default Todos;

