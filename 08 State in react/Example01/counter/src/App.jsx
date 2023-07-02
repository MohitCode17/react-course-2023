import './App.css'
import { useState } from 'react';

const App = () => {
  
  let [count, setCount] = useState(0);

  const decreaseCount = () => {
    if(count <= 0) {
      return;
    }else{
      setCount(count-1);
    }
  };

  const increaseCount = () => {
    setCount(count+1);
  };

  return (
    <div className="counter">
      <button className="counter--minus" onClick={decreaseCount} >-</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={increaseCount} >+</button>
    </div>
  )
}

export default App