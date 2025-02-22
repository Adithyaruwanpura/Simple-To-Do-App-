import React from "react";

function TodoItem({todo,deleteTodo}){
return(
    <div>
        <span>{todo}</span>
        <button onClick={deleteTodo}>Delete</button>
    </div>
);


}
export default TodoItem;