
import { useState } from 'react';

import './App.css';
import Header from './MyComponents/Header';
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

    <Todos todos = {todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
