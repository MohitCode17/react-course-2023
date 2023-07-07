import ChildA from "./ChildA"

const App = () => {
  // **Requirement: I have to use 'title' variable in ChildC
  let title = 'Hello React!!';

  return (
    <ChildA title={title} />
  )
}

export default App