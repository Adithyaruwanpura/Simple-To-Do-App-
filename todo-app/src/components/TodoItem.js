import React from "react";

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(index)} 
      />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
