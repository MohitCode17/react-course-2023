import { useCallback, useState } from 'react'
import './App.css'
import Todos from './Todos';

const App = () => {
  
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  }

  const addTodos = useCallback(() => {
    setTodos(prev => [...prev, `new Todo`]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodos={addTodos} />
      <hr />
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App