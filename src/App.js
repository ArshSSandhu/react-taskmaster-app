
import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/addTodo';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo)=>{
    console.log("I am onDelete", todo)
  
//if this is not the item I want to delete, keep in a new array
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
  localStorage.setItem("todos", JSON.stringify(todos));
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

const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])


  return (
    <>
    <Router>
    <Header title="My TaskMaster App" searchBar={false} />

    <Switch>

    <Route path="/" render={()=>{
return(
<>
<AddTodo addTodo={addTodo} />
<Todos todos = {todos} onDelete={onDelete} />
</>
)
    }}>
      </Route>

      <Route path="/about">
      <About />
      </Route>
     
    </Switch>
  
    <Footer/>
    
    </Router>
    </>
  );
}

export default App;
