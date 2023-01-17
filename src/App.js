import React from "react";
import TodoList from "./TodoList";

function App() {
  // const [todo, setTodo] = useState()


  return (
    <>
      <TodoList />
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear Todo</button>
    </>
  )
}

export default App;
