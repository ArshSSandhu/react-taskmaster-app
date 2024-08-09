

import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer'

function App() {
// object
let todos = [
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
]

  return (
    <>
    <Header title="My TaskMaster App" searchBar={false} />

    <Todos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
