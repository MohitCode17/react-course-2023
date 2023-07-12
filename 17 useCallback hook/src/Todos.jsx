import { memo } from "react";

const Todos = ({todos, addTodos}) => {
    console.log('Render todos component');
  return (
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
            <p key={index}>{todo + " " + index}</p>
        ))}
        <button onClick={addTodos}>Add todo</button>
    </div>
  )
}

export default memo(Todos);