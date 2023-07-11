import { useContext } from "react"
import { MyContext } from "./MyContext"

const MyComponent = () => {
  const {text, setText} = useContext(MyContext);
  return (
    <>
      <h1>{text}</h1>
      <button onClick={() => setText("This is example of context api")}>Click Me</button>
    </>
  )
}

export default MyComponent