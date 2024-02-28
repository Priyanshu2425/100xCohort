import {useState} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function changeTitle(event){
    setTitle(event.target.value);
  }

  function changeDesc(event){
    setDescription(event.target.value);
  }

  function addTask(){
    const task = {
      "title": title,
      "description": description 
    }

    console.log(task);
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
    console.log(todos);
  }


  return (
    <>  
        <div id="todoForm">
          <h1> Todo List </h1>
          <input type="text" id="description" onChange={changeTitle} />
          <input type="text" id="description" onChange={changeDesc} />
          <button onClick={addTask}> Add Task </button>
        </div>
        <div>
          
          {todos.map((task, index) => (
            <span key={index}>
              <p>{index+1+" "} {task.title+":"} {task.description}</p>
            </span>
          ))}
        </div>
    </>
  )
}

export default App
