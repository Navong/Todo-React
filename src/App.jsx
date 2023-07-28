import { useState } from "react"
import "./style.css" 
import NewTodoFrom from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })

  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (id === todo.id)
          return { ...todo, completed }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  
  return (
    <>
      <NewTodoFrom onSubmit={addTodo} />
      <h1>To do list</h1>
      <div className="list">
        {todos.length === 0 && "No Todo"}
        {todos.map(todo => {
          return (
          // eslint-disable-next-line react/jsx-key
          <li key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.completed}
                  onChange={e => { toggleTodo(todo.id,e.target.completed)}}
                />
              {todo.title}
            </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">DELETE</button>
          </li>
          )
        })}
        
      </div>
    </>
  )
}