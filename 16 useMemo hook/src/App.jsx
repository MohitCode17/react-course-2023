import { useMemo, useState } from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [evenNum,setEvenNum] = useState(2)

  const memoHook = useMemo(function evenNumDouble(){
    console.log("double");
    return evenNum * 2;
  }, [evenNum]);
  

  return (
    <>
      <h2>Counter: {count}</h2> 
      <h2>Even Numbers: {evenNum}</h2>
      <h2>even Number Double Value: {memoHook}</h2>
      <button onClick={() =>setCount(count+1)}>Increment</button>
      <button onClick={()=>setEvenNum(evenNum+2)}>Even Numbers</button>
    </>
  )
}

export default App