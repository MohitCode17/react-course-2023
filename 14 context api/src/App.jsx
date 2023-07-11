import './App.css'
import { useState } from 'react'
import { MyContext } from './MyContext'
import MyComponent from './MyComponent';


const App = () => {

  // Suppose this logic use in many files
  const [text, setText] = useState("");

  return (
    <>
     <MyContext.Provider value={{text, setText}}>
      <MyComponent/>
     </MyContext.Provider> 
    </>
  )
}

export default App
