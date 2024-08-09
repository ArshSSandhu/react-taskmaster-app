
import { useState } from 'react';

import './App.css';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/addTodo';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer'

function App() {

  const onDelete = (todo)=>{
    console.log("I am onDelete", todo)
  
//if this is not the item I want to delete, keep in a new array
setTodos(todos.filter((e)=>{
  return e!==todo;
}))

  }

//add todo define
const addTodo = (title,desc) =>{
  console.log("I am adding this to todo", title, desc)

  let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
  sno = todos[todos.length-1].sno+1;
  }

  const myTodo ={
    sno: sno,
    title: title,
    desc: desc,
  }

  setTodos([...todos, myTodo])
  console.log(myTodo)
}

// object
const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "Go Gym",
    desc: "Workout"
  },
  {
    sno: 2,
    title: "Go club",
    desc: "party"
  },
  {
    sno: 3,
    title: "Go lib",
    desc: "study react"
  }
]);

  return (
    <>
    <Header title="My TaskMaster App" searchBar={false} />
    <AddTodo addTodo={addTodo} />
    <Todos todos = {todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
