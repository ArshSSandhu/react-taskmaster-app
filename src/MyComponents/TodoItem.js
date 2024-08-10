import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="todo-item">
      <div className="check">
      <h4>{todo.title}</h4>
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      </div>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
