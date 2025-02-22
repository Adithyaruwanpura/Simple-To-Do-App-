import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos,deleteTodo}){
return(

    <div>
        {todos.map((todo,index)=>(
        <TodoItem key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
        ))}
    </div>
);

}
export default TodoList;
