import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./stayle.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input 
        type="text" 
        className="todo-input" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a task..."
      />
      <button className="add-btn" onClick={addTodo}>Add</button>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
