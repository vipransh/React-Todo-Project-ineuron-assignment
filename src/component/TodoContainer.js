import React, { useReducer, useState } from "react";
import todoReducer from "./TodoReducer";

function TodoContainer() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = e => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const handleToggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div>
    <h1>Todo App</h1>
    <form className="mt-8" onSubmit={handleAddTodo}>
      <input
       className='border border-gray-900 pl-2 w-64 py-1 rounded-lg'
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className='bg-gray-900 text-white px-3 py-1 rounded-lg ml-4' type="submit">Add</button>
    </form>
    <ul className="mt-8">
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          className="mb-3"
        >
          {todo.text}
          <button className=' bg-[#E21717] text-white px-2 py-1 rounded-lg ml-4' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
  
}

export default TodoContainer